import { AtSign, Globe, X } from 'lucide-react';
import { Logo } from '../components/Logo';

const SOCIAL_LINKS = [
  { icon: AtSign, label: 'Instagram', href: '#' },
  { icon: Globe, label: 'Facebook', href: '#' },
  { icon: X, label: 'X (Twitter)', href: '#' },
];

const FOOTER_LINKS = [
  { label: 'Sobre Agendya', href: '#' },
  { label: 'Preguntas frecuentes', href: '#faq' },
  { label: 'Contacto', href: '#' },
  { label: 'Privacidad', href: '#' },
];

export function Footer() {
  return (
    <footer aria-label="Pie de página" className="border-t border-slate-100 bg-white px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <Logo />

        <nav aria-label="Enlaces del sitio">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-brand-text-secondary">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand-pink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-bg-soft text-brand-navy transition-colors hover:bg-brand-pink hover:text-white"
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-brand-text-secondary">
        © 2026 Agendya. Todos los derechos reservados.
      </p>
    </footer>
  );
}
