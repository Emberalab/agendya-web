import type { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[260px] rounded-[2.5rem] border-[8px] border-brand-navy bg-brand-navy p-2 shadow-2xl shadow-brand-navy/20 ${className}`}
    >
      <div className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-brand-navy" />
      <div className="min-h-[420px] overflow-hidden rounded-[2rem] bg-white">{children}</div>
    </div>
  );
}
