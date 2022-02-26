import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
    }
  },
  css: {
    // 指定传递给 CSS 预处理器的选项
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@styles/properties.scss";'
      }
    }
  }
})
