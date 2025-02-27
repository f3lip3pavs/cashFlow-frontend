import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Garante que o Vercel sirva corretamente os arquivos estáticos
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // Redireciona todas as rotas para index.html
  },
})



