import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@components": "./src/components",
      "@hooks": "./src/hooks",
      "@pages": "./src/pages",
    },
  },
});