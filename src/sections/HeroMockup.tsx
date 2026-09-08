import { BrowserFrame } from '../components/BrowserFrame';

const STATS = [
  { label: 'Citas hoy', value: '3', hint: 'vie, 1 ago' },
  { label: 'Esta semana', value: '12', hint: '+2 vs anterior' },
  { label: 'Pendientes', value: '5', hint: 'por confirmar' },
  { label: 'Completadas', value: '47', hint: 'este mes' },
];

const WEEK = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'];

const SLOTS = [
  { day: 0, label: '09:00 Carlos', extra: '+2 más' },
  { day: 1, label: '11:30 Valentina' },
  { day: 3, label: '09:00 Andrea', extra: '+1 más' },
  { day: 4, label: '10:00 Roberto' },
];

/**
 * Ilustración decorativa del panel de Agendya. Los lectores de pantalla
 * reciben la descripción `sr-only`; el resto del marcado se oculta.
 */
export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:mx-0">
      <p className="sr-only">
        Vista previa del panel de Agendya: un calendario semanal con las citas de la semana y
        contadores de citas de hoy, pendientes y completadas.
      </p>

      <div aria-hidden="true">
        <BrowserFrame title="app.agendya.com/agenda/calendario">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-brand-ink">Tu agenda</p>
              <p className="text-[11px] text-brand-text">Consulta y gestiona tus próximas citas.</p>
            </div>
            <span className="shrink-0 rounded-md bg-brand-primary px-2.5 py-1.5 text-[11px] font-semibold text-white">
              + Nueva cita
            </span>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-brand-border bg-brand-bg-soft px-2.5 py-2"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-text">
                  {stat.label}
                </p>
                <p className="text-lg font-bold text-brand-ink">{stat.value}</p>
                <p className="text-[10px] text-brand-text">{stat.hint}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-brand-border p-3">
            <p className="mb-2 text-[11px] font-semibold text-brand-slate">Agosto 2026</p>
            <div className="grid grid-cols-5 gap-1.5">
              {WEEK.map((day, index) => (
                <div key={day} className="flex flex-col gap-1">
                  <div
                    className={`rounded-md px-1 py-1 text-center text-[10px] font-medium ${
                      index === 4
                        ? 'bg-brand-primary text-white'
                        : 'bg-brand-bg-soft text-brand-slate'
                    }`}
                  >
                    {day}
                  </div>
                  {SLOTS.filter((slot) => slot.day === index).map((slot) => (
                    <div
                      key={slot.label}
                      className="rounded-md bg-brand-primary/10 px-1 py-1 text-[9px] font-semibold leading-tight text-brand-primary"
                    >
                      {slot.label}
                      {slot.extra && <span className="block text-brand-slate">{slot.extra}</span>}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </BrowserFrame>

        <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-2 shadow-lg">
          <span className="h-2 w-2 rounded-full bg-brand-success" />
          <span className="whitespace-nowrap text-[11px] font-semibold text-brand-slate">
            ¡Cita confirmada por Email!
          </span>
        </div>
      </div>
    </div>
  );
}
