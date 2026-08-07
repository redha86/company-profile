import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(import.meta.dirname, './src') },
      // Tree-shakeable icon imports (avoids 1500+ icon barrel from lucide-react)
      // Exact match only - allows lucide-react/dist/... subpath imports to resolve normally
      { find: /^lucide-react$/, replacement: path.resolve(import.meta.dirname, './src/lib/icons.ts') },
    ],
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssMinify: 'lightningcss',
    sourcemap: false,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('lucide-react') || id.includes('/lucide/')) return 'icons'
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) return 'motion'
          if (id.includes('react-router') || id.includes('@remix-run')) return 'router'
          if (id.includes('i18next') || id.includes('react-i18next')) return 'i18n'
          if (id.includes('react-helmet')) return 'helmet'
          if (id.includes('react') || id.includes('scheduler') || id.includes('use-sync-external-store')) return 'react'
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  server: {
    port: 5173,
    open: false,
  },
  preview: {
    port: 4173,
  },
})
