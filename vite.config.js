import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimización de chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion']
        }
      }
    },
    // Minificación con esbuild (más rápido)
    minify: 'esbuild',
    // Reportar tamaño de chunks
    chunkSizeWarningLimit: 500
  }
})
