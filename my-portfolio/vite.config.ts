import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('swiper')
        }
      }
    }),
    vueDevTools(),
    AutoImport({
      imports: [
        'vue',
        {
          'vue/macros': ['defineProps', 'defineEmits'],
          '@vueuse/core': ['useMouse', 'useFetch'],
        }
      ],
      dts: 'src/auto-imports.d.ts', // Generates TypeScript declarations
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
