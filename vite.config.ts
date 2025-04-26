import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
    },
  },
});
