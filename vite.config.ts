import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import dns from 'node:dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [preact()],
});
