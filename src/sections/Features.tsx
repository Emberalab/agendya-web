import { Check } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { FEATURES } from '../constants/features';
import { COPY } from '../constants/copy';

export function Features() {
  return (
    <section
      id="funciones"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-brand-bg-soft px-4 py-16 sm:px-6 sm:py-18 lg:px-12"
    >
      <div
        className="pointer-events-none absolute -left-28 -top-28 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -right-24 h-56 w-56 rounded-full bg-brand-primary-light/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="flex justify-center">
          <SectionHeading
            eyebrow={COPY.features.eyebrow}
            title={COPY.features.title}
            id="features-title"
          />
        </div>

        <ul className="reveal grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {FEATURES.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 rounded-lg border border-brand-border bg-white p-3"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-primary/8 text-brand-primary">
                <Check size={13} aria-hidden="true" />
              </span>
              <span className="text-xs font-semibold text-brand-slate">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
