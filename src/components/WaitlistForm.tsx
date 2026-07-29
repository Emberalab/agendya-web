import { motion } from 'framer-motion';
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
      <motion.div
        id={id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`flex flex-col items-center gap-3 rounded-2xl border border-brand-mint/30 bg-brand-mint/10 px-6 py-10 text-center ${className}`}
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        >
          <CheckCircle2 size={48} className="text-brand-mint" aria-hidden="true" />
        </motion.span>
        <h3 className="text-lg font-bold text-brand-navy">{COPY.form.successTitle}</h3>
        <p className="max-w-sm text-sm text-brand-text-secondary">{COPY.form.successSubtitle}</p>
      </motion.div>
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
      <p className="text-center text-xs text-brand-text-secondary">{COPY.form.privacy}</p>
    </form>
  );
}
