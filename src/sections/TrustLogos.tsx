import { motion } from 'framer-motion';
import { COPY } from '../constants/copy';
import { TRUST_BUSINESSES } from '../constants/trustBusinesses';

export function TrustLogos() {
  return (
    <section aria-label="Confianza de negocios" className="border-y border-slate-100 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6">
        <p className="text-center text-sm font-medium text-brand-text-secondary">
          {COPY.trust.title}
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {TRUST_BUSINESSES.map((business) => (
            <motion.span
              key={business.id}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="rounded-full border border-slate-200/70 bg-brand-bg-soft px-4 py-2 text-xs font-medium text-brand-text-secondary"
            >
              {business.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
