import type { LucideIcon } from 'lucide-react';

interface IconTileProps {
  icon: LucideIcon;
  tone?: 'pink' | 'mint' | 'navy';
  className?: string;
}

const TONE_CLASSES: Record<NonNullable<IconTileProps['tone']>, string> = {
  pink: 'bg-brand-pink/10 text-brand-pink',
  mint: 'bg-brand-mint/10 text-brand-mint',
  navy: 'bg-brand-navy/5 text-brand-navy',
};

export function IconTile({ icon: Icon, tone = 'pink', className = '' }: IconTileProps) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-xl ${TONE_CLASSES[tone]} ${className}`}
    >
      <Icon size={22} aria-hidden="true" />
    </div>
  );
}
