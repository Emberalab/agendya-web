import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, id, className = '', ...rest }: InputProps) {
  const inputId = id ?? `field-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="flex flex-col gap-1.5 text-left">
      <label htmlFor={inputId} className="text-sm font-bold text-brand-slate">
        {label}
      </label>
      <input
        id={inputId}
        className={`rounded-lg border bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors placeholder:text-brand-muted focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 ${
          error ? 'border-red-400' : 'border-brand-border'
        } ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...rest}
      />
      {error && (
        <span id={`${inputId}-error`} className="text-xs font-medium text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}
