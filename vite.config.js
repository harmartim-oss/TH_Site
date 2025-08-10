import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TH_Site/',
  build: {
    // Explicitly disable Server-Side Rendering
    ssr: false, 
  }
})
