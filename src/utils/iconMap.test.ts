import { describe, expect, it } from 'vitest';
import { CalendarCheck2 } from 'lucide-react';
import { ICON_MAP, getIcon } from './iconMap';

describe('getIcon', () => {
  it('devuelve el icono mapeado cuando el nombre existe', () => {
    for (const [name, icon] of Object.entries(ICON_MAP)) {
      expect(getIcon(name)).toBe(icon);
    }
  });

  it('cae en CalendarCheck2 cuando el nombre no existe', () => {
    expect(getIcon('NoExiste')).toBe(CalendarCheck2);
  });

  it('cubre todos los iconos usados por los datos de contenido', async () => {
    const { PROBLEMS } = await import('../constants/problems');
    const { BENEFITS } = await import('../constants/benefits');
    for (const { icon } of [...PROBLEMS, ...BENEFITS]) {
      expect(ICON_MAP[icon], `falta el icono "${icon}" en ICON_MAP`).toBeDefined();
    }
  });
});
