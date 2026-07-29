import type { ProblemItem } from '../types';

export const PROBLEMS: ProblemItem[] = [
  {
    id: 'forgotten-appointments',
    title: 'Citas que se te olvidan',
    description:
      'Sin recordatorios automáticos, los clientes faltan y tu silla o sillón queda vacío ese horario.',
    icon: 'CalendarX',
  },
  {
    id: 'paper-agenda',
    title: 'Agenda de papel',
    description:
      'Se moja, se pierde, se llena de tachones y nadie más del equipo la puede consultar a tiempo.',
    icon: 'BookX',
  },
  {
    id: 'messy-whatsapp',
    title: 'WhatsApp desordenado',
    description:
      'Las citas se agendan entre cientos de chats y es fácil perder el hilo de quién reservó qué.',
    icon: 'MessageSquareWarning',
  },
  {
    id: 'double-bookings',
    title: 'Dobles reservas',
    description:
      'Dos clientes llegan a la misma hora y alguno se va molesto, quizás para no volver nunca.',
    icon: 'Users',
  },
  {
    id: 'lost-revenue',
    title: 'Pérdida de ingresos',
    description:
      'Cada cita perdida o mal agendada es dinero que no vuelve a entrar a tu negocio.',
    icon: 'TrendingDown',
  },
  {
    id: 'missed-messages',
    title: 'Mensajes perdidos',
    description:
      'Clientes que escriben para agendar y nunca reciben respuesta a tiempo, así que reservan en otro lado.',
    icon: 'MailQuestion',
  },
];
