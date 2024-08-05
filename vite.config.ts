import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    proxy: {
      '/v1': {
        target: 'https://exp.host/--/api/v2/push/send',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
