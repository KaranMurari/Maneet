import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({ 
      hostname: 'https://maneet.vercel.app',
      robots: [{ userAgent: '*', allow: '/' }]
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
