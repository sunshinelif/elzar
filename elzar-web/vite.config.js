import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Build, GitHub Pages alt yolu (/elzar/) için yapılır; geliştirme sunucusu kökte (/) kalır.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/elzar/' : '/',
  plugins: [react()],
}))
