import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from './Hero';
import { COPY } from '../constants/copy';
import { SITE } from '../constants/site';

describe('<Hero />', () => {
  it('muestra el titular y la bajada de la propuesta de valor', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1, name: COPY.hero.title })).toBeInTheDocument();
    expect(screen.getByText(COPY.hero.subtitle)).toBeInTheDocument();
    expect(screen.getByText(COPY.hero.microcopy)).toBeInTheDocument();
  });

  it('el CTA principal lleva al registro y el secundario ancla a "cómo funciona"', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: new RegExp(COPY.hero.ctaPrimary) })).toHaveAttribute(
      'href',
      SITE.appSignupUrl,
    );
    expect(screen.getByRole('link', { name: COPY.hero.ctaSecondary })).toHaveAttribute(
      'href',
      '#como-funciona',
    );
  });
});
