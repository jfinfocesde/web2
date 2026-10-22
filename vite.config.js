import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://backend2proyectointegradorv1-z5sjxaet.b4a.run',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

