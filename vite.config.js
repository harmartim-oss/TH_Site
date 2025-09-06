import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // Explicitly disable Server-Side Rendering
    ssr: false,
    // Ensure proper asset handling for GitHub Pages
    assetsDir: 'assets',
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Ensure proper preview server behavior
  preview: {
    port: 4173,
    strictPort: true,
  },
})
