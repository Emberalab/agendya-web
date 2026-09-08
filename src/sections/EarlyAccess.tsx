import { SectionHeading } from '../components/SectionHeading';
import { TestimonialCard } from '../components/TestimonialCard';
import { TESTIMONIALS } from '../constants/testimonials';
import { COPY } from '../constants/copy';
import { SITE } from '../constants/site';

export function EarlyAccess() {
  const featured = TESTIMONIALS[0];

  return (
    <section
      aria-labelledby="early-title"
      className="bg-white px-4 py-16 sm:px-6 sm:py-18 lg:px-12"
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-7">
        <div className="flex justify-center">
          <SectionHeading
            eyebrow={COPY.earlyUsers.eyebrow}
            title={COPY.earlyUsers.title}
            id="early-title"
          />
        </div>

        <TestimonialCard testimonial={featured} />

        <a
          href={SITE.appSignupUrl}
          className="press reveal inline-flex w-full items-center justify-center rounded-lg bg-brand-primary px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_16px_rgba(79,70,229,0.3)] transition-colors hover:bg-brand-primary-hover motion-reduce:transition-none"
        >
          {COPY.earlyUsers.cta}
        </a>
      </div>
    </section>
  );
}
