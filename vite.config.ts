import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { writeFileSync } from 'node:fs'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
    appType: 'spa',
  assetsInclude: ['**/*.html'],
  optimizeDeps: {
    exclude: ['@vue/devtools-kit'], 
  },
  define: {
    __VUE_PROD_DEVTOOLS__: false, 
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
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
    AutoImport({
      imports: [
        'vue',
        {
          'vue/macros': ['defineProps', 'defineEmits'],
          '@vueuse/core': ['useMouse', 'useFetch'],
        }
      ],
      dts: 'src/auto-imports.d.ts', 
    }),
    {
      name: 'github-pages-nojekyll',
      apply: 'build',
      closeBundle() {
        writeFileSync('dist/.nojekyll', '')
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {

      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.html')) {
            return '[name][extname]' // Keep HTML at root without hash
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
