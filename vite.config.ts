import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Dominio raíz en GoDaddy (agendya.co). /agendya-web/ era solo GitHub Pages.
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    // Fuentes woff2 (~30 KB) se emiten como archivos para poder precargarlas.
    assetsInlineLimit: 4096,
    reportCompressedSize: true,
  },
  server: {
    watch: {
      ignored: ['**/.DS_Store'],
    },
  },
})
