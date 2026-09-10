import type { WaitlistFormData } from '../types';

export interface SubmitWaitlistResponse {
  success: boolean;
}

/**
 * POST same-origin to the cPanel PHP endpoint (GoDaddy). No Railway.
 * Local `npm run dev` has no PHP: the request 404s unless you point at launch.
 */
export async function submitToWaitlist(
  data: WaitlistFormData,
): Promise<SubmitWaitlistResponse> {
  const response = await fetch('/api/waitlist.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return { success: false };
  }

  try {
    const json = (await response.json()) as { success?: boolean };
    return { success: Boolean(json.success) };
  } catch {
    return { success: false };
  }
}
