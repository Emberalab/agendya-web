import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { IconTile } from '../components/IconTile';
import { BENEFITS } from '../constants/benefits';
import { COPY } from '../constants/copy';
import { getIcon } from '../utils/iconMap';

export function Benefits() {
  return (
    <section aria-label="Beneficios de Agendya" className="bg-brand-bg-soft px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow={COPY.benefits.eyebrow}
          title={COPY.benefits.title}
          subtitle={COPY.benefits.subtitle}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BENEFITS.map((benefit) => {
            const Icon = getIcon(benefit.icon);
            return (
              <motion.div
                key={benefit.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm"
              >
                <IconTile icon={Icon} tone="mint" />
                <h3 className="text-base font-semibold text-brand-navy">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-brand-text-secondary">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
