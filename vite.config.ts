import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/portfolio/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
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
    }),
    {
      name: 'rewrite-all-to-index',
      configureServer(server) {
        server.middlewares.use((req, _, next) => {
          if (!req.url?.startsWith('/@vite') && !req.url?.endsWith('.js')) {
            req.url = '/index.html'
          }
          next()
        })
      }
    },
    {
      name: 'github-pages-nojekyll',
      apply: 'build',
      closeBundle() {
        const fs = require('fs')
        fs.writeFileSync('dist/.nojekyll', '')
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
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url))
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
})
