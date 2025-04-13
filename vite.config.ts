import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'BlogPoint',
        short_name: 'BlogPoint',
        description: 'Blogging Platform',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@ui': '/src/ui',
      '@components': '/src/components',
      '@modules': '/src/modules',
      '@pages': '/src/pages',
      '@styles': '/src/app/styles',
      '@app-types': '/src/app/types',
      '@hooks': '/src/app/hooks',
      '@themes': '/src/app/themes',
      '@store': '/src/app/store',
      '@utils': '/src/app/utils',
      '@constants': '/src/app/constants',
      '@routes': '/src/app/routes',
      '@api': '/src/app/api',
      '@assets': '/src/app/assets',
    },
  },
});
