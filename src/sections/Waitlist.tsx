import { SectionHeading } from '../components/SectionHeading';
import { WaitlistForm } from '../components/WaitlistForm';
import { COPY } from '../constants/copy';

export function Waitlist() {
  return (
    <section
      id="lista-de-espera"
      aria-labelledby="waitlist-title"
      className="bg-brand-bg-soft px-4 py-16 sm:px-6 sm:py-18 lg:px-12"
    >
      <div className="mx-auto flex max-w-xl flex-col gap-8">
        <div className="flex justify-center">
          <SectionHeading
            eyebrow={COPY.waitlist.eyebrow}
            title={COPY.waitlist.title}
            id="waitlist-title"
          />
        </div>

        <div className="reveal rounded-xl border border-brand-border bg-white p-6 shadow-[0_16px_32px_rgba(15,23,42,0.08)] sm:p-7">
          <h3 className="mb-1 text-lg font-bold text-brand-ink">{COPY.form.title}</h3>
          <p className="mb-6 text-sm text-brand-text">{COPY.form.subtitle}</p>
          <WaitlistForm id="waitlist-form" />
        </div>
      </div>
    </section>
  );
}
