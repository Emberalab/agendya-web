import { ArrowRight } from 'lucide-react';
import { COPY } from '../constants/copy';
import { SITE } from '../constants/site';
import { HeroMockup } from './HeroMockup';

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-linear-to-br from-brand-bg-lavender via-white to-brand-bg-soft"
    >
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-primary-light/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-12 lg:py-24">
        <div className="flex flex-col items-start gap-6 text-left">
          <h1
            id="hero-title"
            className="font-display text-[clamp(2.25rem,6vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-1.5px] text-brand-ink"
          >
            {COPY.hero.title}
          </h1>
          <p className="max-w-lg text-lg text-brand-text">{COPY.hero.subtitle}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE.appSignupUrl}
              className="press inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(79,70,229,0.3)] transition-colors hover:bg-brand-primary-hover motion-reduce:transition-none"
            >
              {COPY.hero.ctaPrimary}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#como-funciona"
              className="press inline-flex items-center justify-center gap-2 rounded-lg border border-brand-border bg-transparent px-7 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-primary hover:bg-brand-bg-soft motion-reduce:transition-none"
            >
              {COPY.hero.ctaSecondary}
            </a>
          </div>
          <p className="text-xs font-medium text-brand-primary">{COPY.hero.microcopy}</p>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}
