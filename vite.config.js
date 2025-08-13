import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'og-image.png', 'twitter-image.png'],
      manifest: {
        name: 'Tim Harmar Legal & Consulting Services',
        short_name: 'TH Legal',
        description: 'Expert legal solutions in civil litigation, privacy law, intellectual property, and economic development consulting.',
        theme_color: '#1f2937',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/TH_Site/',
        scope: '/TH_Site/',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '32x32',
            type: 'image/x-icon'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,txt}']
      }
    })
  ],
  base: '/TH_Site/',
  build: {
    // Explicitly disable Server-Side Rendering
    ssr: false, 
  }
})
