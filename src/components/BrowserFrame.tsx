import type { ReactNode } from 'react';

interface BrowserFrameProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function BrowserFrame({ children, title = 'app.agendya.com', className = '' }: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-2xl shadow-brand-navy/10 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-100 bg-brand-bg-soft px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-mint" />
        <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-center text-[11px] text-brand-text-secondary border border-slate-200/60">
          {title}
        </div>
      </div>
      <div className="bg-white p-4">{children}</div>
    </div>
  );
}
