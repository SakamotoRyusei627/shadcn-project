import {defineConfig} from "vite";
import react from '@vitejs/plugin-react-swc'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  root:'./',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
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
