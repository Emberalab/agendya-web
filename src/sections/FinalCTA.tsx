import { motion } from 'framer-motion';
import { Badge } from '../components/Badge';
import { WaitlistForm } from '../components/WaitlistForm';
import { COPY } from '../constants/copy';

export function FinalCTA() {
  return (
    <section
      aria-label="Únete a la lista de espera"
      className="relative overflow-hidden bg-brand-navy px-6 py-24"
    >
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-brand-pink/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brand-mint/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5 text-left"
        >
          <Badge className="bg-white/10 text-white">{COPY.finalCta.eyebrow}</Badge>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            {COPY.finalCta.title}
          </h2>
          <p className="max-w-md text-brand-bg-soft/80">{COPY.finalCta.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
        >
          <h3 className="mb-1 text-lg font-bold text-brand-navy">{COPY.form.title}</h3>
          <p className="mb-6 text-sm text-brand-text-secondary">{COPY.form.subtitle}</p>
          <WaitlistForm id="waitlist-form" />
        </motion.div>
      </div>
    </section>
  );
}
