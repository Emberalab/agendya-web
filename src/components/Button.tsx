import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant;
  children: ReactNode;
  isLoading?: boolean;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-brand-pink to-brand-pink-dark text-white shadow-lg shadow-brand-pink/25 hover:shadow-xl hover:shadow-brand-pink/30',
  secondary:
    'bg-white text-brand-navy border border-slate-200/80 hover:border-brand-pink/40 shadow-sm',
  ghost: 'bg-transparent text-brand-navy hover:bg-brand-bg-soft',
};

export function Button({
  variant = 'primary',
  children,
  isLoading = false,
  className = '',
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.97 }}
      transition={{ duration: 0.2 }}
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-70 ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
