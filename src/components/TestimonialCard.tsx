import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="reveal m-0 flex h-full flex-col gap-4 rounded-xl border border-brand-border bg-brand-bg-soft p-6">
      <blockquote className="m-0 flex-1 text-sm italic leading-relaxed text-brand-slate">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary/10 text-xs font-bold text-brand-primary"
        >
          {testimonial.initials}
        </span>
        <span>
          <span className="block text-[13px] font-bold text-brand-slate">{testimonial.name}</span>
          <span className="block text-xs text-brand-text">
            {testimonial.business} · {testimonial.city}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
