/**
 * URLs y enlaces globales del sitio.
 * `VITE_SITE_URL` permite cambiar el dominio de producción sin tocar el código.
 */
const rawSiteUrl =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) ||
  'https://agendya.co';

export const SITE = {
  /** URL canónica de producción, sin barra final. */
  url: rawSiteUrl.replace(/\/$/, ''),
  name: 'Agendya',
  appSignupUrl: 'https://app.agendya.com/signup',
  appLoginUrl: 'https://app.agendya.com/login',
  waitlistAnchor: '#lista-de-espera',
} as const;

export const NAV_LINKS = [
  { label: 'Funciones', href: '#funciones' },
  { label: 'Precios', href: '#precios' },
  { label: 'FAQ', href: '#faq' },
] as const;
