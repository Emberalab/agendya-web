import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-brand-pink/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-pink ${className}`}
    >
      {children}
    </span>
  );
}
