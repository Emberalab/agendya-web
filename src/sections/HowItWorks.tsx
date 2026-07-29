import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { STEPS } from '../constants/steps';
import { COPY } from '../constants/copy';
import { getIcon } from '../utils/iconMap';

export function HowItWorks() {
  return (
    <section aria-label="Cómo funciona Agendya" className="bg-white px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow={COPY.howItWorks.eyebrow}
          title={COPY.howItWorks.title}
          subtitle={COPY.howItWorks.subtitle}
        />

        <div className="grid gap-8 sm:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = getIcon(step.icon);
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center gap-4 text-center"
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-pink to-brand-pink-dark text-white shadow-lg shadow-brand-pink/25">
                  <Icon size={28} aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy">{step.title}</h3>
                <p className="max-w-xs text-sm text-brand-text-secondary">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
