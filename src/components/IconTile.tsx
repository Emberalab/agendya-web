import type { LucideIcon } from 'lucide-react';

interface IconTileProps {
  icon: LucideIcon;
  className?: string;
}

export function IconTile({ icon: Icon, className = '' }: IconTileProps) {
  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-primary/15 bg-brand-primary/8 text-brand-primary ${className}`}
    >
      <Icon size={18} aria-hidden="true" />
    </div>
  );
}
