import { defineConfig } from 'vite';
import PrettierPlugin from 'vite-plugin-prettier';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), PrettierPlugin()],
});
