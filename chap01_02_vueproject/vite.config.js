import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // server: {
  //   proxy: {
  //     '/api': {

  //       // 백엔드가 docker 컨테이너화 되기 전
  //       // target: 'http://localhost:7777',

  //       // 백엔드가 docker 컨테이너화 된 후(8055:7777(안 바꾸는 게 보통))
  //       target: 'http://localhost:8055',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     }
  //   }
  // },
})
