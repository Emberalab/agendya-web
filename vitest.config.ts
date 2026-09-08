import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

// Reutiliza los plugins de Vite (React, Tailwind) para que los tests
// compartan el mismo pipeline de transformación que la app.
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/test/setup.ts'],
      css: true,
      include: ['src/**/*.{test,spec}.{ts,tsx}'],
      restoreMocks: true,
    },
  }),
)
