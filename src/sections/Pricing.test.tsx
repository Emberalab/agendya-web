import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Pricing } from './Pricing';
import { PRICING_PLANS } from '../constants/pricing';
import { SITE } from '../constants/site';

describe('<Pricing />', () => {
  it('renderiza los dos planes con su precio y periodo', () => {
    render(<Pricing />);
    for (const plan of PRICING_PLANS) {
      expect(screen.getByText(plan.name)).toBeInTheDocument();
      expect(screen.getByText(plan.price)).toBeInTheDocument();
      expect(screen.getByText(`/ ${plan.period}`)).toBeInTheDocument();
    }
  });

  it('destaca el plan "Básico" como el más popular', () => {
    render(<Pricing />);
    expect(screen.getByText('Más popular')).toBeInTheDocument();
    expect(PRICING_PLANS.filter((plan) => plan.popular)).toHaveLength(1);
  });

  it('lista todas las características de cada plan', () => {
    render(<Pricing />);
    for (const plan of PRICING_PLANS) {
      for (const feature of plan.features) {
        expect(screen.getAllByText(feature).length).toBeGreaterThan(0);
      }
    }
  });

  it('cada CTA de plan lleva al registro de la app', () => {
    render(<Pricing />);
    const ctas = PRICING_PLANS.map(
      (plan) => screen.getByRole('link', { name: plan.cta }),
    );
    expect(ctas).toHaveLength(PRICING_PLANS.length);
    for (const cta of ctas) {
      expect(cta).toHaveAttribute('href', SITE.appSignupUrl);
    }
  });

  it('tiene un id de anclaje "precios"', () => {
    const { container } = render(<Pricing />);
    expect(container.querySelector('#precios')).not.toBeNull();
    // sanity: la sección envuelve el heading
    const section = container.querySelector('#precios') as HTMLElement;
    expect(within(section).getByText(PRICING_PLANS[0].name)).toBeInTheDocument();
  });
});
