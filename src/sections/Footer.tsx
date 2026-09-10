import { Logo } from '../components/Logo';
import { COPY } from '../constants/copy';

const FOOTER_COLUMNS = [
  {
    id: 'producto',
    title: 'Producto',
    links: [
      { label: 'Funciones', href: '#funciones' },
      { label: 'Precios', href: '#precios' },
      { label: 'Preguntas frecuentes', href: '#faq' },
    ],
  },
  {
    id: 'empresa',
    title: 'Empresa',
    links: [
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Lista de espera', href: '#lista-de-espera' },
    ],
  },
  {
    id: 'cuenta',
    title: 'Cuenta',
    links: [
      { label: 'Iniciar sesión', href: 'https://app.agendya.co/login' },
      { label: 'Crear cuenta gratis', href: 'https://app.agendya.co/register' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-ink px-4 pb-6 pt-12 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo variant="light" />
            <p className="max-w-xs text-[13px] leading-relaxed text-brand-muted">
              {COPY.footer.blurb}
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.id} aria-labelledby={`footer-${column.id}`}>
              <p
                id={`footer-${column.id}`}
                className="mb-4 text-[13px] font-bold uppercase tracking-wider text-white"
              >
                {column.title}
              </p>
              <ul className="flex list-none flex-col gap-2.5 p-0">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-on-dark transition-colors hover:text-white motion-reduce:transition-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-brand-slate pt-5">
          <p className="text-[13px] text-brand-on-dark">{COPY.footer.rights}</p>
          <p className="text-[13px] text-brand-on-dark">{COPY.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
