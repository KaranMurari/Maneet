import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import sitemap from 'vite-plugin-sitemap' // 1. IMPORT THE PLUGIN

export default defineConfig({
  plugins: [
    react(),
    sitemap({ hostname: 'https://maneet.vercel.app' }), // 2. ADD THE PLUGIN WITH YOUR URL
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})