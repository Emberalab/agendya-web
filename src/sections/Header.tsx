import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../components/Logo';
import { NAV_LINKS, SITE } from '../constants/site';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">
        <a href="#top" className="flex items-center" aria-label="Agendya, ir al inicio">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-text transition-colors hover:text-brand-ink motion-reduce:transition-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={SITE.appLoginUrl}
              className="rounded-lg border border-brand-border px-4 py-2 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand-bg-soft motion-reduce:transition-none"
            >
              Iniciar sesión
            </a>
            <a
              href={SITE.appSignupUrl}
              className="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-hover motion-reduce:transition-none"
            >
              Empezar gratis
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="p-2 text-brand-ink lg:hidden"
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Menú móvil"
        hidden={!menuOpen}
        className="flex flex-col gap-4 border-t border-brand-border px-5 py-4 lg:hidden"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-[15px] font-medium text-brand-text"
          >
            {link.label}
          </a>
        ))}
        <div className="flex flex-col gap-2 border-t border-brand-border pt-3">
          <a
            href={SITE.appLoginUrl}
            className="rounded-lg border border-brand-border px-4 py-3 text-center text-sm font-semibold text-brand-ink"
          >
            Iniciar sesión
          </a>
          <a
            href={SITE.appSignupUrl}
            className="rounded-lg bg-brand-primary px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Empezar gratis
          </a>
        </div>
      </nav>
    </header>
  );
}
