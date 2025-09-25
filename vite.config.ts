import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [vue()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin'],
        },
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          // 配置chunk分割策略
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('vue') && !id.includes('jdesign')) {
                return 'vue-vendor'
              }
              if (
                id.includes('jdesign-vue') ||
                id.includes('jdesign-icons-vue')
              ) {
                return 'jdesign-vendor'
              }
              if (
                id.includes('lodash') ||
                id.includes('dayjs') ||
                id.includes('moment')
              ) {
                return 'utils-vendor'
              }
              return 'vendor'
            }

            if (id.includes('formily')) {
              return 'formily-chunk'
            }
          },
          // 入口文件的输出目录
          entryFileNames: 'js/[name]-[hash].js',
          // 其他 js 文件的输出目录
          chunkFileNames: 'js/[name]-[hash].js',
          // 细分静态资源文件的输出目录
          assetFileNames(assetInfo) {
            const imgName = ['.jpg', '.svg', '.png', '.webp']
            if (assetInfo.names[0].endsWith('.css')) {
              return 'css/[name]-[hash][extname]'
            } else if (
              imgName.some((ext) => assetInfo.names[0].endsWith(ext))
            ) {
              return 'img/[name]-[hash][extname]'
            } else {
              return 'assets/[name]-[hash][extname]'
            }
          },
        },
      },
    },
  }
})
