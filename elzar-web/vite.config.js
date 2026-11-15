import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Varsayılan kök (/) — Vercel (elzar.com.tr) ve yerel geliştirme için.
// GitHub Pages iş akışı BASE_PATH=/elzar/ vererek alt yola göre derler.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
