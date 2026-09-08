import type { ReactNode } from 'react';

interface BrowserFrameProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function BrowserFrame({
  children,
  title = 'app.agendya.com',
  className = '',
}: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-brand-border bg-white shadow-[0_0_18px_rgba(79,70,229,0.18),0_16px_40px_rgba(15,23,42,0.12)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-brand-border bg-brand-bg-soft px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-success" />
        <div className="ml-3 flex-1 rounded-md border border-brand-border bg-white px-3 py-1 text-center text-[11px] text-brand-text">
          {title}
        </div>
      </div>
      <div className="bg-white p-4">{children}</div>
    </div>
  );
}
