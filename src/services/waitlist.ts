import type { WaitlistFormData } from '../types';

export interface SubmitWaitlistResponse {
  success: boolean;
}

/**
 * Envía los datos del formulario a la lista de espera de Agendya.
 *
 * NOTA: esta es una simulación con `setTimeout` para representar la
 * latencia de red. Está lista para reemplazarse por una llamada real,
 * por ejemplo:
 *
 *   const response = await fetch('https://api.agendya.com/waitlist', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(data),
 *   });
 *   return { success: response.ok };
 */
export function submitToWaitlist(data: WaitlistFormData): Promise<SubmitWaitlistResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulación de un registro exitoso en el backend.
      console.info('[waitlist] Nuevo registro simulado:', data);
      resolve({ success: true });
    }, 1200);
  });
}
