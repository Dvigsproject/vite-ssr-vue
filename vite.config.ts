import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ssr from 'vite-ssr-vue/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ssr(),vue()]
})
