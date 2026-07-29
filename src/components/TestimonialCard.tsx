import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm"
    >
      <Quote className="text-brand-pink/40" size={28} aria-hidden="true" />
      <p className="flex-1 text-sm leading-relaxed text-brand-navy">“{testimonial.quote}”</p>
      <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-pink/10 text-sm font-bold text-brand-pink">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-navy">{testimonial.name}</p>
          <p className="text-xs text-brand-text-secondary">
            {testimonial.business} · {testimonial.city}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
