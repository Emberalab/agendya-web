import type { BenefitItem } from '../types';

export const BENEFITS: BenefitItem[] = [
  {
    id: 'never-lose-appointment',
    title: 'Nunca vuelvas a perder una cita',
    description: 'Recordatorios automáticos que reducen las inasistencias de tus clientes.',
    icon: 'CalendarCheck2',
  },
  {
    id: 'organized-agenda',
    title: 'Tu agenda, siempre organizada',
    description: 'Visualiza tu día, semana o mes completo desde cualquier dispositivo.',
    icon: 'LayoutGrid',
  },
  {
    id: 'more-time',
    title: 'Recupera horas de tu semana',
    description: 'Deja de responder uno a uno por WhatsApp para coordinar horarios.',
    icon: 'Clock',
  },
  {
    id: 'happier-clients',
    title: 'Clientes más contentos',
    description: 'Confirmaciones y recordatorios automáticos que generan confianza.',
    icon: 'Smile',
  },
  {
    id: 'no-double-booking',
    title: 'Cero dobles reservas',
    description: 'Agendya bloquea automáticamente los horarios ya ocupados.',
    icon: 'ShieldCheck',
  },
  {
    id: 'grow-business',
    title: 'Haz crecer tu negocio',
    description: 'Más citas cumplidas significan más ingresos cada mes.',
    icon: 'TrendingUp',
  },
];
