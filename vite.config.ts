// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ✅ allows access from mobile devices
    port: 5173  // default port, you can change if needed
  },
});
