import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: 'terser', // Domyślnie Vite używa Terser do minifikacji
    terserOptions: {
      compress: {
        drop_console: true, // Opcjonalnie: usuwa wszystkie console.log z produkcji
      },
    },
  },
  plugins: [react(), tailwindcss()],
})