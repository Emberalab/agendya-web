import { CheckCircle2 } from 'lucide-react';
import { Input } from './Input';
import { Button } from './Button';
import { useWaitlistForm } from '../hooks/useWaitlistForm';
import { COPY } from '../constants/copy';

interface WaitlistFormProps {
  className?: string;
  id?: string;
}

export function WaitlistForm({ className = '', id }: WaitlistFormProps) {
  const { formData, errors, status, updateField, submit } = useWaitlistForm();

  if (status === 'success') {
    return (
      <div
        id={id}
        role="status"
        className={`flex flex-col items-center gap-3 rounded-2xl border border-brand-success/30 bg-brand-success/10 px-6 py-10 text-center ${className}`}
      >
        <CheckCircle2 size={48} className="text-brand-success" aria-hidden="true" />
        <h3 className="text-lg font-bold text-brand-ink">{COPY.form.successTitle}</h3>
        <p className="max-w-sm text-sm text-brand-text">{COPY.form.successSubtitle}</p>
      </div>
    );
  }

  return (
    <form
      id={id}
      className={`flex flex-col gap-4 ${className}`}
      onSubmit={(event) => {
        event.preventDefault();
        void submit();
      }}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label={COPY.form.fields.name}
          placeholder={COPY.form.placeholders.name}
          value={formData.name}
          onChange={(event) => updateField('name', event.target.value)}
          error={errors.name}
          autoComplete="name"
        />
        <Input
          label={COPY.form.fields.business}
          placeholder={COPY.form.placeholders.business}
          value={formData.business}
          onChange={(event) => updateField('business', event.target.value)}
          error={errors.business}
          autoComplete="organization"
        />
        <Input
          label={COPY.form.fields.city}
          placeholder={COPY.form.placeholders.city}
          value={formData.city}
          onChange={(event) => updateField('city', event.target.value)}
          error={errors.city}
          autoComplete="address-level2"
        />
        <Input
          label={COPY.form.fields.whatsapp}
          placeholder={COPY.form.placeholders.whatsapp}
          value={formData.whatsapp}
          onChange={(event) => updateField('whatsapp', event.target.value)}
          error={errors.whatsapp}
          type="tel"
          autoComplete="tel"
        />
      </div>
      <Input
        label={COPY.form.fields.email}
        placeholder={COPY.form.placeholders.email}
        value={formData.email}
        onChange={(event) => updateField('email', event.target.value)}
        error={errors.email}
        type="email"
        autoComplete="email"
      />

      {status === 'error' && (
        <p className="text-sm font-medium text-red-500">{COPY.form.errorMessage}</p>
      )}

      <Button type="submit" isLoading={status === 'loading'} className="mt-1 w-full">
        {status === 'loading' ? COPY.form.submitting : COPY.form.submit}
      </Button>
      <p className="text-center text-xs text-brand-text">{COPY.form.privacy}</p>
    </form>
  );
}
