import { motion } from 'framer-motion';
import { CheckCircle2, Clock3 } from 'lucide-react';
import { BrowserFrame } from '../components/BrowserFrame';

const DAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'];

const APPOINTMENTS = [
  { time: '9:00', client: 'Laura G.', service: 'Corte + barba', color: 'bg-brand-pink' },
  { time: '10:30', client: 'Sofía M.', service: 'Manicure', color: 'bg-brand-mint' },
  { time: '12:00', client: 'Andrés R.', service: 'Color', color: 'bg-brand-navy' },
  { time: '15:30', client: 'Valentina P.', service: 'Peinado', color: 'bg-brand-pink' },
];

export function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="animate-float"
    >
      <BrowserFrame title="app.agendya.com/agenda">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-brand-navy">Esta semana</p>
          <span className="flex items-center gap-1 rounded-full bg-brand-mint/10 px-2.5 py-1 text-[11px] font-semibold text-brand-mint">
            <CheckCircle2 size={12} aria-hidden="true" />
            18 citas confirmadas
          </span>
        </div>
        <div className="mb-3 grid grid-cols-5 gap-2">
          {DAYS.map((day, index) => (
            <div
              key={day}
              className={`rounded-lg px-2 py-1.5 text-center text-[11px] font-medium ${
                index === 2
                  ? 'bg-brand-pink text-white'
                  : 'bg-brand-bg-soft text-brand-text-secondary'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {APPOINTMENTS.map((appt) => (
            <div
              key={appt.time}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-brand-bg-soft/60 px-3 py-2.5"
            >
              <span className={`h-8 w-1.5 rounded-full ${appt.color}`} aria-hidden="true" />
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-brand-navy">{appt.client}</p>
                  <p className="text-[11px] text-brand-text-secondary">{appt.service}</p>
                </div>
                <span className="flex items-center gap-1 text-[11px] font-medium text-brand-text-secondary">
                  <Clock3 size={12} aria-hidden="true" />
                  {appt.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </BrowserFrame>
    </motion.div>
  );
}
