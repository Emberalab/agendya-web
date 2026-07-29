import { motion } from 'framer-motion';
import { CalendarCheck2, MessageCircle, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { COPY } from '../constants/copy';

const PILLARS = [
  {
    icon: CalendarCheck2,
    title: 'Nunca vuelvas a perder una cita',
    description: 'Tu agenda visible y ordenada, sin cuadernos ni notas sueltas.',
  },
  {
    icon: MessageCircle,
    title: 'Confirmaciones automáticas',
    description: 'Tus clientes reciben recordatorios por WhatsApp sin que muevas un dedo.',
  },
  {
    icon: ShieldCheck,
    title: 'Cero dobles reservas',
    description: 'Cada horario ocupado se bloquea solo, para siempre.',
  },
];

export function Solution() {
  return (
    <section aria-label="Nuestra solución" className="bg-brand-bg-soft px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          eyebrow={COPY.solution.eyebrow}
          title={COPY.solution.title}
          subtitle={COPY.solution.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-4 rounded-3xl bg-white p-8 text-center shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-pink to-brand-pink-dark text-white">
                <pillar.icon size={26} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy">{pillar.title}</h3>
              <p className="text-sm text-brand-text-secondary">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
