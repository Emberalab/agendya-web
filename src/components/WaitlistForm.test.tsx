import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { WaitlistForm } from './WaitlistForm';
import { COPY } from '../constants/copy';
import { submitToWaitlist } from '../services/waitlist';

vi.mock('../services/waitlist', () => ({
  submitToWaitlist: vi.fn(),
}));

const submitMock = vi.mocked(submitToWaitlist);

describe('<WaitlistForm />', () => {
  beforeEach(() => {
    submitMock.mockReset();
    submitMock.mockResolvedValue({ success: true });
  });

  it('renderiza todos los campos de la lista de espera', () => {
    render(<WaitlistForm />);
    expect(screen.getByLabelText(COPY.form.fields.name)).toBeInTheDocument();
    expect(screen.getByLabelText(COPY.form.fields.business)).toBeInTheDocument();
    expect(screen.getByLabelText(COPY.form.fields.city)).toBeInTheDocument();
    expect(screen.getByLabelText(COPY.form.fields.whatsapp)).toBeInTheDocument();
    expect(screen.getByLabelText(COPY.form.fields.email)).toBeInTheDocument();
  });

  it('muestra errores de validación y no llama al servicio al enviar vacío', async () => {
    const user = userEvent.setup();
    render(<WaitlistForm />);

    await user.click(screen.getByRole('button', { name: COPY.form.submit }));

    expect(await screen.findByText('Cuéntanos tu nombre.')).toBeInTheDocument();
    expect(screen.getByText('Ingresa tu correo electrónico.')).toBeInTheDocument();
    expect(submitMock).not.toHaveBeenCalled();
  });

  it('envía datos válidos y muestra el estado de éxito', async () => {
    const user = userEvent.setup();
    render(<WaitlistForm />);

    await user.type(screen.getByLabelText(COPY.form.fields.name), 'María Pérez');
    await user.type(screen.getByLabelText(COPY.form.fields.business), 'Barbería El Corte');
    await user.type(screen.getByLabelText(COPY.form.fields.city), 'Bogotá');
    await user.type(screen.getByLabelText(COPY.form.fields.whatsapp), '+57 300 123 4567');
    await user.type(screen.getByLabelText(COPY.form.fields.email), 'maria@correo.com');

    await user.click(screen.getByRole('button', { name: COPY.form.submit }));

    expect(await screen.findByText(COPY.form.successTitle)).toBeInTheDocument();
    expect(submitMock).toHaveBeenCalledTimes(1);
    expect(submitMock).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'María Pérez', email: 'maria@correo.com' }),
    );
  });
});
