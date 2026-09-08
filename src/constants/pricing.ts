import type { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Gratis',
    price: '$0',
    period: 'por siempre',
    features: [
      '1 profesional',
      'Hasta 30 reservas por mes',
      'Hasta 3 servicios',
      'Página pública',
      'Gestión de horarios',
      'Publicidad',
      'Marca Agendya visible',
    ],
    cta: 'Empezar gratis',
  },
  {
    id: 'basic',
    name: 'Básico',
    price: '$19.900 COP',
    period: 'mes',
    features: [
      '1 profesional',
      'Reservas ilimitadas',
      'Hasta 10 servicios',
      'Página pública sin publicidad',
      'Horarios avanzados',
      'Notificaciones por correo',
      'Soporte prioritario',
    ],
    cta: 'Empezar ahora',
    popular: true,
  },
];
