import { CheckCheck, Scissors, Sparkles } from 'lucide-react';
import { BrowserFrame } from '../components/BrowserFrame';
import { PhoneFrame } from '../components/PhoneFrame';

const RESERVATIONS = [
  { client: 'Mariana T.', service: 'Corte + color', status: 'Confirmada', tone: 'mint' },
  { client: 'Jorge L.', service: 'Barba', status: 'Pendiente', tone: 'pink' },
  { client: 'Isabela C.', service: 'Uñas gel', status: 'Confirmada', tone: 'mint' },
  { client: 'Ricardo P.', service: 'Corte clásico', status: 'Confirmada', tone: 'mint' },
];

export function ReservationsListMockup() {
  return (
    <BrowserFrame title="app.agendya.com/reservas">
      <div className="mb-3 flex items-center gap-2">
        <Scissors size={16} className="text-brand-pink" aria-hidden="true" />
        <p className="text-sm font-semibold text-brand-navy">Reservas de hoy</p>
      </div>
      <div className="flex flex-col gap-2">
        {RESERVATIONS.map((r) => (
          <div
            key={r.client}
            className="flex items-center justify-between rounded-xl border border-slate-100 px-3 py-2.5"
          >
            <div>
              <p className="text-xs font-semibold text-brand-navy">{r.client}</p>
              <p className="text-[11px] text-brand-text-secondary">{r.service}</p>
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                r.tone === 'mint'
                  ? 'bg-brand-mint/10 text-brand-mint'
                  : 'bg-brand-pink/10 text-brand-pink'
              }`}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

export function WhatsAppConfirmationMockup() {
  return (
    <PhoneFrame>
      <div className="flex h-full flex-col bg-[#e9edf2]">
        <div className="flex items-center gap-2 bg-brand-mint px-3 py-3 text-white">
          <Sparkles size={16} aria-hidden="true" />
          <p className="text-xs font-semibold">Agendya · WhatsApp</p>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-3">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-white px-3 py-2 text-[11px] text-brand-navy shadow-sm">
            Hola, ¿tienes espacio mañana a las 4pm?
          </div>
          <div className="mr-auto max-w-[85%] rounded-2xl rounded-tl-sm bg-brand-mint/90 px-3 py-2 text-[11px] text-white shadow-sm">
            ¡Sí! Tu cita quedó confirmada para mañana 4:00pm 🎉
          </div>
          <div className="mr-auto flex max-w-[85%] items-center gap-1 rounded-2xl rounded-tl-sm bg-brand-mint/90 px-3 py-2 text-[11px] text-white shadow-sm">
            <CheckCheck size={13} aria-hidden="true" />
            Te recordaremos un día antes
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
