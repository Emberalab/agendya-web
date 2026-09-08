import { COPY } from '../constants/copy';
import { SITE } from '../constants/site';

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-linear-to-r from-brand-primary-dark via-brand-primary to-brand-primary px-6 py-20 sm:py-24 lg:px-20"
    >
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-white/8"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-36 -right-36 h-72 w-72 rounded-full bg-white/8"
        aria-hidden="true"
      />

      <div className="reveal relative mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <h2
          id="final-cta-title"
          className="font-display text-[clamp(1.75rem,5vw,3rem)] font-extrabold leading-[1.15] tracking-[-1.5px] text-white"
        >
          {COPY.finalCta.title}
        </h2>
        <p className="text-lg text-brand-bg-lavender">{COPY.finalCta.subtitle}</p>

        <div className="mt-4 flex flex-col items-center gap-3">
          <a
            href={SITE.appSignupUrl}
            className="press inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-bold text-brand-primary shadow-lg transition-colors hover:bg-brand-bg-soft motion-reduce:transition-none"
          >
            {COPY.finalCta.cta}
          </a>
          <p className="text-[13px] text-brand-bg-lavender">{COPY.finalCta.microcopy}</p>
        </div>
      </div>
    </section>
  );
}
