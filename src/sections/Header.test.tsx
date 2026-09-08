import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';
import { NAV_LINKS, SITE } from '../constants/site';

describe('<Header />', () => {
  it('enlaza los CTA a la aplicación real de Agendya', () => {
    render(<Header />);

    const signup = screen.getAllByRole('link', { name: 'Empezar gratis' })[0];
    const login = screen.getAllByRole('link', { name: 'Iniciar sesión' })[0];

    expect(signup).toHaveAttribute('href', SITE.appSignupUrl);
    expect(login).toHaveAttribute('href', SITE.appLoginUrl);
  });

  it('muestra los enlaces de navegación', () => {
    render(<Header />);
    for (const link of NAV_LINKS) {
      expect(screen.getAllByRole('link', { name: link.label })[0]).toHaveAttribute(
        'href',
        link.href,
      );
    }
  });

  it('abre y cierra el menú móvil', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const toggle = screen.getByRole('button', { name: 'Abrir menú' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getAllByRole('link', { name: NAV_LINKS[0].label })).toHaveLength(1);

    await user.click(toggle);

    expect(screen.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    expect(screen.getAllByRole('link', { name: NAV_LINKS[0].label })).toHaveLength(2);

    await user.click(screen.getByRole('button', { name: 'Cerrar menú' }));
    expect(screen.getAllByRole('link', { name: NAV_LINKS[0].label })).toHaveLength(1);
  });
});
