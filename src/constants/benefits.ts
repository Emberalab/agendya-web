import type { BenefitItem } from '../types';

export const BENEFITS: BenefitItem[] = [
  {
    id: 'always-available',
    title: 'Tu agenda siempre disponible',
    description:
      'Incluso mientras duermes, entrenas o estás en una cita. Tus clientes siempre tienen un espacio listo.',
    icon: 'CalendarCheck2',
  },
  {
    id: 'no-overlaps',
    title: 'Evita horarios cruzados',
    description:
      'Nuestro motor previene automáticamente choques o reservas dobles. Cero errores de coordinación.',
    icon: 'ShieldCheck',
  },
  {
    id: 'services-in-one-place',
    title: 'Tus servicios en un solo lugar',
    description:
      'Muestra tu catálogo, precios, duración y modalidad de forma atractiva y totalmente transparente.',
    icon: 'LayoutGrid',
  },
  {
    id: 'control-your-day',
    title: 'Controla tu día',
    description:
      'Define descansos, bloquea días específicos y maneja tus tiempos de preparación entre citas fácilmente.',
    icon: 'Clock',
  },
  {
    id: 'single-link',
    title: 'Comparte un solo enlace',
    description:
      'Simplifica tu comunicación con un único link que contiene todo tu perfil profesional.',
    icon: 'Link2',
  },
  {
    id: 'more-time',
    title: 'Más tiempo para tu negocio',
    description:
      'Dedica las horas que antes perdías respondiendo chats a mejorar tu servicio o descansar.',
    icon: 'TrendingUp',
  },
];
