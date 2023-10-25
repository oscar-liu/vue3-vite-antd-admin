/*
 * @Description: vite配置
 * @Author: oscar
 * @Email: jincan.liu@gmail.com
 * @Date: 2023-06-29 09:46:41
 * @LastEditTime: 2023-07-19 15:58:21
 * @LastEditors: oscar
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const timestamp = new Date().getTime()
// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    manifest: false,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash]-${timestamp}.js`,
        chunkFileNames: `assets/[name]-[hash]-${timestamp}.js`,
        assetFileNames: `assets/[ext]/[name]-[hash]-${timestamp}.[ext]`
      }
    }
  },
  server: {
    host: '0.0.0.0',
    https: false,
    port: Number(loadEnv(mode, process.cwd()).VITE_PORT) || 3000,
    proxy: {
      // 接口地址代理
      '/reqapi': {
        target: loadEnv(mode, process.cwd()).VITE_API_PROXY_USER_URL,
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, 
        rewrite: path => path.replace(/^\/reqapi/, '/')
      },
      // ... 更多地址继续加
    }
  },
})
