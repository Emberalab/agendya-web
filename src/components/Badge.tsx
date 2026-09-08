import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/8 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-brand-primary ${className}`}
    >
      {children}
    </span>
  );
}
