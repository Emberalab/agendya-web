import { Check } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PRICING_PLANS } from '../constants/pricing';
import { COPY } from '../constants/copy';
import { SITE } from '../constants/site';

export function Pricing() {
  return (
    <section
      id="precios"
      aria-labelledby="pricing-title"
      className="bg-white px-4 py-16 sm:px-6 sm:py-18 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <div className="flex justify-center">
          <SectionHeading
            eyebrow={COPY.pricing.eyebrow}
            title={COPY.pricing.title}
            id="pricing-title"
          />
        </div>

        <ul className="mx-auto grid w-full max-w-2xl list-none gap-6 p-0 sm:grid-cols-2">
          {PRICING_PLANS.map((plan) => (
            <li
              key={plan.id}
              className={`reveal relative flex flex-col gap-5 rounded-xl bg-white p-7 shadow-[0_16px_32px_rgba(15,23,42,0.08),0_2px_6px_rgba(15,23,42,0.04)] ${
                plan.popular ? 'border-2 border-brand-primary' : 'border border-brand-border'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Más popular
                </span>
              )}

              <div>
                <h3
                  className={`text-sm font-bold uppercase ${
                    plan.popular ? 'text-brand-primary' : 'text-brand-text'
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="mt-1 font-display text-3xl font-extrabold text-brand-ink">
                  {plan.price}{' '}
                  <span className="text-sm font-normal text-brand-text">/ {plan.period}</span>
                </p>
              </div>

              <div className="h-px bg-brand-border" />

              <ul className="flex list-none flex-col gap-2.5 p-0">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-[13px] text-brand-slate">
                    <Check
                      size={14}
                      className={plan.popular ? 'text-brand-primary' : 'text-brand-success'}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={SITE.appSignupUrl}
                className={`press mt-auto inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors motion-reduce:transition-none ${
                  plan.popular
                    ? 'bg-brand-primary text-white hover:bg-brand-primary-hover'
                    : 'border border-brand-border text-brand-ink hover:bg-brand-bg-soft'
                }`}
              >
                {plan.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
