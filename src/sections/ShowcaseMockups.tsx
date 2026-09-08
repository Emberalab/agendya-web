import { CalendarDays, Check, Clock3 } from 'lucide-react';
import { BrowserFrame } from '../components/BrowserFrame';
import { PhoneFrame } from '../components/PhoneFrame';

const AGENDA_ROWS = [
  { client: 'Mariana T.', service: 'Corte + color', status: 'Confirmada', ok: true },
  { client: 'Jorge L.', service: 'Barba', status: 'Pendiente', ok: false },
  { client: 'Isabela C.', service: 'Uñas gel', status: 'Confirmada', ok: true },
  { client: 'Ricardo P.', service: 'Corte clásico', status: 'Confirmada', ok: true },
];

/** Vista decorativa "Para ti": panel de agenda del profesional. */
export function DashboardShowcase() {
  return (
    <div>
      <p className="sr-only">
        Vista del panel de Agendya con la lista de citas de hoy y su estado (confirmada o
        pendiente).
      </p>
      <div aria-hidden="true">
        <BrowserFrame title="app.agendya.com/agenda">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-brand-primary" aria-hidden="true" />
              <p className="text-sm font-bold text-brand-ink">Citas de hoy</p>
            </div>
            <span className="rounded-full bg-brand-success/10 px-2.5 py-1 text-[10px] font-semibold text-brand-primary">
              18 confirmadas
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {AGENDA_ROWS.map((row) => (
              <div
                key={row.client}
                className="flex items-center justify-between rounded-lg border border-brand-border px-3 py-2.5"
              >
                <div>
                  <p className="text-xs font-semibold text-brand-ink">{row.client}</p>
                  <p className="text-[11px] text-brand-text">{row.service}</p>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                    row.ok
                      ? 'bg-brand-success/15 text-brand-ink'
                      : 'bg-brand-primary/10 text-brand-primary'
                  }`}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </BrowserFrame>
      </div>
    </div>
  );
}

const BOOKING_TIMES = ['8:00', '9:00', '10:30', '11:30', '15:00', '16:00'];

/** Vista decorativa "Para clientes": flujo de reserva público. */
export function ClientBookingShowcase() {
  return (
    <div>
      <p className="sr-only">
        Vista de la página pública de reservas de Agendya donde un cliente elige la hora de su
        cita entre los horarios disponibles.
      </p>
      <div aria-hidden="true">
        <PhoneFrame>
          <div className="flex h-full flex-col bg-brand-bg-soft">
            <div className="border-b border-brand-border bg-white px-4 py-3">
              <p className="text-xs font-bold text-brand-ink">Barbería Classic</p>
              <p className="text-[10px] text-brand-text">Elige la hora de tu servicio</p>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-4">
              <div className="rounded-lg border border-brand-border bg-white px-3 py-2">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-text">
                  Fecha seleccionada
                </p>
                <p className="text-[11px] font-bold text-brand-ink">Martes, 1 de septiembre</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {BOOKING_TIMES.map((time, index) => (
                  <span
                    key={time}
                    className={`flex items-center justify-center gap-1 rounded-md border px-1.5 py-2 text-[10px] font-semibold ${
                      index === 2
                        ? 'border-brand-primary bg-brand-primary text-white'
                        : 'border-brand-border bg-white text-brand-slate'
                    }`}
                  >
                    <Clock3 size={9} aria-hidden="true" />
                    {time}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-center gap-1.5 rounded-md bg-brand-primary px-3 py-2.5 text-[11px] font-semibold text-white">
                <Check size={13} aria-hidden="true" />
                Continuar
              </div>
            </div>
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}
