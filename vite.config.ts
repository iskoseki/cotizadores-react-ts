import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
    proxy: {
      '/api': {
        target: 'http://10.20.0.72:9080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/montepio': {
        target: 'http://montepio.whileam.com.ar',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/montepio/, '')
      },
      '/form': {
        target: 'https://crm.zoho.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/form/, '')
      },
      
    }
  }, 
  plugins: [react()],
})
