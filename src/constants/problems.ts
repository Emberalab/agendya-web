import type { ProblemItem } from '../types';

export const PROBLEMS: ProblemItem[] = [
  {
    id: 'messages-all-day',
    title: 'Mensajes todo el día',
    description: 'Contestar mensajes de WhatsApp a deshoras corta tu ritmo y paz mental.',
    icon: 'MessageSquareWarning',
  },
  {
    id: 'crossed-appointments',
    title: 'Citas cruzadas',
    description: 'El horror de agendar a dos personas a la misma hora por un descuido.',
    icon: 'CalendarX2',
  },
  {
    id: 'scattered-info',
    title: 'Información dispersa',
    description: 'Papelitos, cuadernos y chats donde se pierden los detalles del cliente.',
    icon: 'Users',
  },
  {
    id: 'cancellations',
    title: 'Cancelaciones',
    description: 'Clientes que no asisten y te enteras en el último minuto sin aviso previo.',
    icon: 'Ban',
  },
  {
    id: 'less-time',
    title: 'Menos tiempo para atender',
    description: 'Pasas más tiempo coordinando y confirmando que prestando tu servicio.',
    icon: 'Clock',
  },
];
