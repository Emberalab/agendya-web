import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { IconTile } from '../components/IconTile';
import { PROBLEMS } from '../constants/problems';
import { COPY } from '../constants/copy';
import { getIcon } from '../utils/iconMap';

export function Problem() {
  return (
    <section aria-label="El problema que resolvemos" className="bg-white px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow={COPY.problem.eyebrow}
          title={COPY.problem.title}
          subtitle={COPY.problem.subtitle}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROBLEMS.map((problem) => {
            const Icon = getIcon(problem.icon);
            return (
              <motion.div
                key={problem.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200/60 bg-brand-bg-soft/50 p-6"
              >
                <IconTile icon={Icon} tone="navy" />
                <h3 className="text-base font-semibold text-brand-navy">{problem.title}</h3>
                <p className="text-sm leading-relaxed text-brand-text-secondary">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
