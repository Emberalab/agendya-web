import { act, renderHook, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useWaitlistForm } from './useWaitlistForm';
import { submitToWaitlist } from '../services/waitlist';

vi.mock('../services/waitlist', () => ({
  submitToWaitlist: vi.fn(),
}));

const submitMock = vi.mocked(submitToWaitlist);

const VALID = {
  name: 'María Pérez',
  business: 'Barbería El Corte',
  city: 'Bogotá',
  whatsapp: '+57 300 123 4567',
  email: 'maria@correo.com',
};

function fill(
  update: (field: keyof typeof VALID, value: string) => void,
  data: Partial<typeof VALID> = VALID,
) {
  for (const [field, value] of Object.entries({ ...VALID, ...data })) {
    update(field as keyof typeof VALID, value);
  }
}

describe('useWaitlistForm', () => {
  beforeEach(() => {
    submitMock.mockReset();
    submitMock.mockResolvedValue({ success: true });
  });

  it('empieza en estado "idle" sin errores', () => {
    const { result } = renderHook(() => useWaitlistForm());
    expect(result.current.status).toBe('idle');
    expect(result.current.errors).toEqual({});
  });

  it('marca errores por campo y no llama al servicio si el formulario está vacío', async () => {
    const { result } = renderHook(() => useWaitlistForm());

    await act(async () => {
      await result.current.submit();
    });

    expect(result.current.errors.name).toBeDefined();
    expect(result.current.errors.email).toBeDefined();
    expect(result.current.errors.whatsapp).toBeDefined();
    expect(submitMock).not.toHaveBeenCalled();
    expect(result.current.status).toBe('idle');
  });

  it('valida el formato de correo y teléfono', async () => {
    const { result } = renderHook(() => useWaitlistForm());

    act(() => fill(result.current.updateField, { email: 'no-es-correo', whatsapp: '123' }));
    await act(async () => {
      await result.current.submit();
    });

    expect(result.current.errors.email).toContain('válido');
    expect(result.current.errors.whatsapp).toContain('válido');
    expect(submitMock).not.toHaveBeenCalled();
  });

  it('limpia el error de un campo al editarlo', async () => {
    const { result } = renderHook(() => useWaitlistForm());

    await act(async () => {
      await result.current.submit();
    });
    expect(result.current.errors.name).toBeDefined();

    act(() => result.current.updateField('name', 'Ana'));
    expect(result.current.errors.name).toBeUndefined();
  });

  it('envía datos válidos, pasa por "loading" y termina en "success" limpiando el formulario', async () => {
    const { result } = renderHook(() => useWaitlistForm());

    act(() => fill(result.current.updateField));
    expect(result.current.formData.email).toBe(VALID.email);

    await act(async () => {
      await result.current.submit();
    });

    expect(submitMock).toHaveBeenCalledWith(expect.objectContaining({ email: VALID.email }));
    await waitFor(() => expect(result.current.status).toBe('success'));
    expect(result.current.formData).toEqual({
      name: '',
      business: '',
      city: '',
      whatsapp: '',
      email: '',
    });
  });

  it('termina en "error" si el servicio falla', async () => {
    submitMock.mockRejectedValueOnce(new Error('network'));
    const { result } = renderHook(() => useWaitlistForm());

    act(() => fill(result.current.updateField));
    await act(async () => {
      await result.current.submit();
    });

    await waitFor(() => expect(result.current.status).toBe('error'));
  });

  it('reset vuelve al estado inicial', async () => {
    const { result } = renderHook(() => useWaitlistForm());
    act(() => fill(result.current.updateField));

    act(() => result.current.reset());

    expect(result.current.status).toBe('idle');
    expect(result.current.formData.name).toBe('');
    expect(result.current.errors).toEqual({});
  });
});
