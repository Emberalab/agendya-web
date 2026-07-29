import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, id, className = '', ...rest }: InputProps) {
  const inputId = id ?? `field-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="flex flex-col gap-1.5 text-left">
      <label htmlFor={inputId} className="text-sm font-medium text-brand-navy">
        {label}
      </label>
      <input
        id={inputId}
        className={`rounded-xl border bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-slate-400 outline-none transition-colors focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 ${
          error ? 'border-red-400' : 'border-slate-200'
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
