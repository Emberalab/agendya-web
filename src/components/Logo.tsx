interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  variant?: 'dark' | 'light';
}

export function Logo({ className = '', showWordmark = true, variant = 'dark' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="56" height="56" rx="18" fill="#D14D7A" />
        <rect x="16" y="17" width="32" height="28" rx="6" stroke="#FFFFFF" strokeWidth="3.2" />
        <path d="M16 26H48" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M23 12V20" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M41 12V20" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="47" cy="47" r="12" fill="#3ECF8E" stroke="#FFFFFF" strokeWidth="2.5" />
        <path
          d="M42 47L45.5 50.5L52.5 43.5"
          stroke="#FFFFFF"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showWordmark && (
        <span className="text-xl font-bold tracking-tight">
          <span className={variant === 'dark' ? 'text-brand-navy' : 'text-white'}>agend</span>
          <span className="text-brand-pink">ya</span>
        </span>
      )}
    </div>
  );
}
