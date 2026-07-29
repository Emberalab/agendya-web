import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { HeroMockup } from './HeroMockup';
import { ReservationsListMockup, WhatsAppConfirmationMockup } from './ShowcaseMockups';
import { COPY } from '../constants/copy';

export function ProductShowcase() {
  return (
    <section id="producto" aria-label="Capturas del producto" className="bg-white px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow={COPY.showcase.eyebrow}
          title={COPY.showcase.title}
          subtitle={COPY.showcase.subtitle}
        />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <HeroMockup />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3 text-left"
          >
            <h3 className="text-2xl font-bold text-brand-navy">Calendario semanal</h3>
            <p className="text-brand-text-secondary">
              Visualiza toda tu semana de un vistazo y evita que se te crucen las citas.
            </p>
          </motion.div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-2 flex flex-col gap-3 text-left lg:order-1"
          >
            <h3 className="text-2xl font-bold text-brand-navy">Lista de reservas</h3>
            <p className="text-brand-text-secondary">
              Revisa quién viene hoy, qué servicio pidió y si ya confirmó su cita.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <ReservationsListMockup />
          </motion.div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <WhatsAppConfirmationMockup />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3 text-left"
          >
            <h3 className="text-2xl font-bold text-brand-navy">Confirmación por WhatsApp</h3>
            <p className="text-brand-text-secondary">
              Tus clientes reciben la confirmación y el recordatorio directo en su WhatsApp.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
