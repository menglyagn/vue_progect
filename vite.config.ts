import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: '/',  // 确保是根路径
  server: {
    host: true, // 允许外部访问
    proxy: {
      '/.netlify/functions/proxy': {
        target: 'http://localhost:8888', // Netlify 开发服务器端口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/.netlify\/functions\/proxy/, ''),
        // 添加超时和错误处理
        timeout: 5000,
        onError: (err, req, res) => {
          console.error('Proxy error:', err);
          res.writeHead(502, { 'Content-Type': 'text/plain' });
          res.end('Proxy error: Could not connect to Netlify dev server. Make sure it\'s running on port 8888.');
        }
      }
    }
  }
})
