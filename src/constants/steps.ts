import type { StepItem } from '../types';

export const STEPS: StepItem[] = [
  {
    id: 'join',
    number: 1,
    title: 'Únete a la lista de espera',
    description: 'Completa el formulario con los datos de tu negocio en menos de un minuto.',
    icon: 'UserPlus',
  },
  {
    id: 'early-access',
    number: 2,
    title: 'Recibe acceso anticipado',
    description: 'Te avisamos por correo y WhatsApp apenas Agendya esté disponible para ti.',
    icon: 'MailCheck',
  },
  {
    id: 'start',
    number: 3,
    title: 'Empieza a organizar tu agenda sin esfuerzo',
    description: 'Configura tus servicios y horarios, y deja que Agendya haga el resto.',
    icon: 'Rocket',
  },
];
