import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { DashboardShowcase, ClientBookingShowcase } from './ShowcaseMockups';
import { COPY } from '../constants/copy';
import { SITE } from '../constants/site';

type Tab = 'pro' | 'clients';

export function ProductShowcase() {
  const [tab, setTab] = useState<Tab>('pro');

  return (
    <section
      id="producto"
      aria-labelledby="showcase-title"
      className="relative overflow-hidden bg-brand-bg-soft px-4 py-16 sm:px-6 sm:py-18 lg:px-12"
    >
      <div
        className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-brand-primary/15 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-brand-primary-light/20 blur-2xl"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-7">
        <SectionHeading
          eyebrow={COPY.showcase.eyebrow}
          title={COPY.showcase.title}
          id="showcase-title"
        />

        <div
          role="group"
          aria-label="Elige qué vista de Agendya mostrar"
          className="flex w-full max-w-xs gap-1 rounded-full bg-brand-border/60 p-1"
        >
          {(['pro', 'clients'] as const).map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={tab === value}
              onClick={() => setTab(value)}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                tab === value ? 'bg-white text-brand-primary shadow-sm' : 'text-brand-text'
              }`}
            >
              {value === 'pro' ? COPY.showcase.tabs.pro : COPY.showcase.tabs.clients}
            </button>
          ))}
        </div>

        <div className="flex w-full justify-center">
          <div className="w-full max-w-lg">
            {tab === 'pro' ? <DashboardShowcase /> : <ClientBookingShowcase />}
          </div>
        </div>

        <a
          href={SITE.appSignupUrl}
          className="press inline-flex items-center justify-center rounded-lg bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(79,70,229,0.3)] transition-colors hover:bg-brand-primary-hover motion-reduce:transition-none"
        >
          {COPY.showcase.cta}
        </a>
      </div>
    </section>
  );
}
