import { describe, expect, it } from 'vitest';
import { isRequired, validateEmail, validatePhone } from './validation';

describe('isRequired', () => {
  it('acepta texto con contenido', () => {
    expect(isRequired('Ana')).toBe(true);
    expect(isRequired('  x  ')).toBe(true);
  });

  it('rechaza cadenas vacías o solo espacios', () => {
    expect(isRequired('')).toBe(false);
    expect(isRequired('   ')).toBe(false);
  });
});

describe('validateEmail', () => {
  it.each(['maria@correo.com', 'a.b-c@sub.dominio.co', '  user@dominio.io  '])(
    'acepta "%s"',
    (value) => {
      expect(validateEmail(value)).toBe(true);
    },
  );

  it.each(['', 'maria', 'maria@', '@correo.com', 'maria correo.com', 'maria@correo'])(
    'rechaza "%s"',
    (value) => {
      expect(validateEmail(value)).toBe(false);
    },
  );
});

describe('validatePhone', () => {
  it.each(['+57 300 123 4567', '3001234567', '(300) 123-4567', '+52 55 1234 5678'])(
    'acepta "%s"',
    (value) => {
      expect(validatePhone(value)).toBe(true);
    },
  );

  it('rechaza cadenas con muy pocos dígitos', () => {
    expect(validatePhone('12345')).toBe(false);
  });

  it('rechaza cadenas con demasiados dígitos', () => {
    expect(validatePhone('1234567890123456')).toBe(false);
  });

  it('rechaza texto sin dígitos', () => {
    expect(validatePhone('sin numero')).toBe(false);
  });
});
