import { useCallback, useState } from 'react';
import type { WaitlistFieldErrors, WaitlistFormData, WaitlistStatus } from '../types';
import { isRequired, validateEmail, validatePhone } from '../utils/validation';
import { submitToWaitlist } from '../services/waitlist';

const INITIAL_DATA: WaitlistFormData = {
  name: '',
  business: '',
  city: '',
  whatsapp: '',
  email: '',
};

function validate(data: WaitlistFormData): WaitlistFieldErrors {
  const errors: WaitlistFieldErrors = {};

  if (!isRequired(data.name)) errors.name = 'Cuéntanos tu nombre.';
  if (!isRequired(data.business)) errors.business = 'Cuéntanos el nombre de tu negocio.';
  if (!isRequired(data.city)) errors.city = 'Cuéntanos tu ciudad.';

  if (!isRequired(data.whatsapp)) {
    errors.whatsapp = 'Ingresa tu WhatsApp.';
  } else if (!validatePhone(data.whatsapp)) {
    errors.whatsapp = 'Ingresa un número de WhatsApp válido.';
  }

  if (!isRequired(data.email)) {
    errors.email = 'Ingresa tu correo electrónico.';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Ingresa un correo electrónico válido.';
  }

  return errors;
}

export function useWaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<WaitlistFieldErrors>({});
  const [status, setStatus] = useState<WaitlistStatus>('idle');

  const updateField = useCallback((field: keyof WaitlistFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const submit = useCallback(async () => {
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus('loading');
    try {
      const response = await submitToWaitlist(formData);
      if (response.success) {
        setStatus('success');
        setFormData(INITIAL_DATA);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }, [formData]);

  const reset = useCallback(() => {
    setFormData(INITIAL_DATA);
    setErrors({});
    setStatus('idle');
  }, []);

  return { formData, errors, status, updateField, submit, reset };
}
