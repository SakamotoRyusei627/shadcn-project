import {defineConfig} from "vitest/config";
import * as path from "node:path";


export default defineConfig({
  root:'./',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals:true,
    environment:'jsdom',
    setupFiles: "./setupTests.ts",
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
      include: ['src/project/**/*.{js,ts,jsx,tsx}'],
      exclude: ['assets'],
    },
  },
  server:{
    open:false,
    proxy:{
      '/api':{
        target:'http://localhost:8080'
      }
    }
  },
  css: {
    preprocessorOptions: {
      // Lessのオプション
      less: {
        math: 'parens-division', // 数値の演算処理方法を設定
      },
      // Sass/SCSSのオプション
      scss: {
        api: 'modern-compiler', // Sass APIの設定 ("legacy", "modern", "modern-compiler" のいずれか)
        importers: [
          // 必要であればインポーターの設定を追加
        ],
      },
    },
  },
})
