/**
 * Utilidades de validación para el formulario de lista de espera.
 * Todas las funciones son puras y no dependen de librerías externas.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Acepta números telefónicos con o sin prefijo internacional, espacios,
// guiones o paréntesis. Requiere entre 7 y 15 dígitos.
const PHONE_REGEX = /^\+?[0-9\s()-]{7,20}$/;

export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function validateEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim());
}

export function validatePhone(value: string): boolean {
  const trimmed = value.trim();
  const digitCount = trimmed.replace(/\D/g, '').length;
  return PHONE_REGEX.test(trimmed) && digitCount >= 7 && digitCount <= 15;
}
