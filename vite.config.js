import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: 'https://hocokbcapae.github.io/publiv-views/', // <-- use your repo name here
  plugins: [vue()],
})