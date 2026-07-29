import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { TestimonialCard } from '../components/TestimonialCard';
import { TESTIMONIALS } from '../constants/testimonials';
import { COPY } from '../constants/copy';

export function Testimonials() {
  return (
    <section aria-label="Testimonios" className="bg-brand-bg-soft px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading eyebrow={COPY.testimonials.eyebrow} title={COPY.testimonials.title} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
