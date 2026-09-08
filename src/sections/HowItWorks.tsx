import type { ReactNode } from 'react';
import { CalendarCheck2, Link2, SlidersHorizontal } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { STEPS } from '../constants/steps';
import { COPY } from '../constants/copy';

function MockShell({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="flex h-44 flex-col gap-2 overflow-hidden rounded-xl border border-brand-border bg-white p-4"
    >
      {children}
    </div>
  );
}

const STEP_MOCKS: Record<string, ReactNode> = {
  configure: (
    <MockShell>
      <div className="flex items-center gap-2 text-brand-primary">
        <SlidersHorizontal size={14} aria-hidden="true" />
        <span className="text-[11px] font-bold text-brand-slate">Tus servicios</span>
      </div>
      {['Corte sencillo · 45 min · $30.000', 'Barba · 20 min · $15.000', 'Corte + barba · 60 min'].map(
        (row) => (
          <div
            key={row}
            className="flex items-center justify-between rounded-md border border-brand-border bg-brand-bg-soft px-2.5 py-2 text-[10px] font-medium text-brand-slate"
          >
            {row}
            <span className="h-3 w-6 rounded-full bg-brand-primary" aria-hidden="true" />
          </div>
        ),
      )}
    </MockShell>
  ),
  share: (
    <MockShell>
      <span className="text-[11px] font-bold text-brand-slate">Comparte tu enlace</span>
      <div className="flex items-center gap-2 rounded-md border border-brand-primary/30 bg-brand-primary/5 px-2.5 py-2 text-[10px] font-semibold text-brand-primary">
        <Link2 size={13} aria-hidden="true" />
        agendya.com/tu-negocio
      </div>
      <div className="mt-1 flex gap-1.5">
        {['WhatsApp', 'Instagram', 'Web'].map((channel) => (
          <span
            key={channel}
            className="rounded-full bg-brand-bg-soft px-2.5 py-1 text-[9px] font-semibold text-brand-slate"
          >
            {channel}
          </span>
        ))}
      </div>
      <div className="mt-auto rounded-md bg-brand-primary px-2.5 py-1.5 text-center text-[10px] font-semibold text-white">
        Copiar enlace
      </div>
    </MockShell>
  ),
  receive: (
    <MockShell>
      <div className="flex items-center gap-2 text-brand-primary">
        <CalendarCheck2 size={14} aria-hidden="true" />
        <span className="text-[11px] font-bold text-brand-slate">Reservas entrantes</span>
      </div>
      {[
        { name: 'Laura G. · Corte + barba', time: '9:00' },
        { name: 'Sofía M. · Manicure', time: '10:30' },
        { name: 'Andrés R. · Color', time: '12:00' },
      ].map((appt) => (
        <div
          key={appt.time}
          className="flex items-center justify-between rounded-md border border-brand-border px-2.5 py-2 text-[10px] text-brand-slate"
        >
          <span className="font-medium">{appt.name}</span>
          <span className="rounded bg-brand-success/10 px-1.5 py-0.5 font-semibold text-brand-success">
            {appt.time}
          </span>
        </div>
      ))}
    </MockShell>
  ),
};

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="how-title"
      className="bg-linear-to-b from-white to-brand-bg-lavender px-4 py-16 sm:px-6 sm:py-18 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="flex justify-center">
          <SectionHeading
            eyebrow={COPY.howItWorks.eyebrow}
            title={COPY.howItWorks.title}
            id="how-title"
          />
        </div>

        <ol className="grid list-none gap-8 p-0 sm:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.id} className="reveal flex flex-col gap-4">
              {STEP_MOCKS[step.id]}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="font-display text-base font-bold text-brand-primary [text-shadow:0_2px_6px_rgba(79,70,229,0.35)]">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-brand-ink">{step.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-brand-text">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
