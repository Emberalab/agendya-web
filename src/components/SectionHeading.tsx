import { Badge } from './Badge';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  /** id para el <h2>, útil para `aria-labelledby` de la sección. */
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  id,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`reveal flex flex-col gap-3 ${alignment}`}>
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2
        id={id}
        className="max-w-2xl text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight tracking-[-0.5px] text-brand-ink"
      >
        {title}
      </h2>
      {subtitle && <p className="max-w-xl text-base text-brand-text sm:text-lg">{subtitle}</p>}
    </div>
  );
}
