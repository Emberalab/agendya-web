import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'inverse';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  isLoading?: boolean;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-white shadow-[0_4px_16px_rgba(79,70,229,0.3)] hover:bg-brand-primary-hover',
  secondary:
    'bg-transparent text-brand-ink border border-brand-border hover:border-brand-primary hover:bg-brand-bg-soft',
  ghost: 'bg-transparent text-brand-ink hover:bg-brand-bg-soft',
  inverse: 'bg-white text-brand-primary shadow-lg hover:bg-brand-bg-soft',
};

export function Button({
  variant = 'primary',
  children,
  isLoading = false,
  className = '',
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`press inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
