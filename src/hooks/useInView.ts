import { useRef } from 'react';
import { useInView as useFramerInView } from 'framer-motion';

/**
 * Pequeño envoltorio sobre el `useInView` de Framer Motion para
 * detectar cuándo un elemento entra en el viewport (usado para
 * animaciones de "reveal on scroll" en listas grandes).
 */
export function useInView(amount: number = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useFramerInView(ref, { once: true, amount });

  return { ref, isInView };
}
