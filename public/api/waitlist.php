<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$secretsFile = __DIR__ . '/waitlist.secrets.php';
if (!is_readable($secretsFile)) {
    http_response_code(500);
    echo json_encode(['success' => false]);
    exit;
}

/** @var array{db_host:string,db_name:string,db_user:string,db_pass:string,notify_to:string,notify_from:string} $config */
$config = require $secretsFile;

$raw = file_get_contents('php://input') ?: '';
$payload = json_decode($raw, true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

function waitlist_field(array $payload, string $key, int $max): ?string
{
    if (!isset($payload[$key]) || !is_string($payload[$key])) {
        return null;
    }
    $value = trim($payload[$key]);
    if ($value === '' || mb_strlen($value) > $max) {
        return null;
    }
    if (preg_match('/[\r\n]/', $value)) {
        return null;
    }
    return $value;
}

$name = waitlist_field($payload, 'name', 120);
$business = waitlist_field($payload, 'business', 160);
$city = waitlist_field($payload, 'city', 120);
$whatsapp = waitlist_field($payload, 'whatsapp', 32);
$email = waitlist_field($payload, 'email', 190);

if ($name === null || $business === null || $city === null || $whatsapp === null || $email === null) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

$digits = preg_replace('/\D+/', '', $whatsapp) ?? '';
if (strlen($digits) < 7 || strlen($digits) > 15) {
    http_response_code(400);
    echo json_encode(['success' => false]);
    exit;
}

try {
    $pdo = new PDO(
        sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $config['db_host'], $config['db_name']),
        $config['db_user'],
        $config['db_pass'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ],
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false]);
    exit;
}

$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? null;
if (is_string($ip) && strlen($ip) > 45) {
    $ip = substr($ip, 0, 45);
}

try {
    $insert = $pdo->prepare(
        'INSERT INTO waitlist_signups (name, business, city, whatsapp, email, ip)
         VALUES (:name, :business, :city, :whatsapp, :email, :ip)',
    );
    $insert->execute([
        ':name' => $name,
        ':business' => $business,
        ':city' => $city,
        ':whatsapp' => $whatsapp,
        ':email' => $email,
        ':ip' => is_string($ip) ? $ip : null,
    ]);
} catch (PDOException $e) {
    if ($e->getCode() === '23000') {
        echo json_encode(['success' => true, 'duplicate' => true]);
        exit;
    }
    http_response_code(500);
    echo json_encode(['success' => false]);
    exit;
}

$to = $config['notify_to'];
$from = $config['notify_from'];
$subject = 'Lista de espera Agendya: ' . $name . ' — ' . $business;
$body = "Nuevo registro en launch.agendya.co\n\n"
    . "Nombre: {$name}\n"
    . "Negocio: {$business}\n"
    . "Ciudad: {$city}\n"
    . "WhatsApp: {$whatsapp}\n"
    . "Correo: {$email}\n";

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$headers = 'From: Agendya <' . $from . ">\r\n"
    . 'Reply-To: ' . $email . "\r\n"
    . "MIME-Version: 1.0\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n";

@mail($to, $encodedSubject, $body, $headers, '-f' . $from);

echo json_encode(['success' => true]);
