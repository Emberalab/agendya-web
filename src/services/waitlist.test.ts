import { describe, expect, it, vi } from 'vitest';
import { submitToWaitlist } from './waitlist';

describe('submitToWaitlist', () => {
  it('POSTs JSON to /api/waitlist.php and returns success', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    vi.stubGlobal('fetch', fetchMock);

    const payload = {
      name: 'María',
      business: 'El Corte',
      city: 'Bogotá',
      whatsapp: '+57 300 123 4567',
      email: 'maria@correo.com',
    };

    await expect(submitToWaitlist(payload)).resolves.toEqual({ success: true });
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/waitlist.php',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }),
    );

    vi.unstubAllGlobals();
  });

  it('returns success: false when the response is not ok', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: false, json: async () => ({}) }),
    );

    await expect(
      submitToWaitlist({
        name: 'María',
        business: 'El Corte',
        city: 'Bogotá',
        whatsapp: '+57 300 123 4567',
        email: 'maria@correo.com',
      }),
    ).resolves.toEqual({ success: false });

    vi.unstubAllGlobals();
  });
});
