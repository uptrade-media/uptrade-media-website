import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', '@radix-ui/react-slot'],
          'utils-vendor': ['lucide-react', 'clsx', 'tailwind-merge'],
          
          // Page chunks - group related pages together
          'portfolio-pages': [
            './src/pages/portfolio/ChateauHeritageSquarePage.jsx',
            './src/pages/portfolio/ElSenorPigPage.jsx',
            './src/pages/portfolio/ManhattanHarbourLivingPage.jsx',
            './src/pages/portfolio/MarinaManhattanHarbourPage.jsx',
            './src/pages/portfolio/QueenCityRiverboatsPage.jsx',
            './src/pages/portfolio/SpadeKreationsPage.jsx'
          ],
          'marketing-pages': [
            './src/pages/MarketingSEOPage.jsx',
            './src/pages/MarketingPaidAdsPage.jsx',
            './src/pages/MarketingContentMarketingPage.jsx',
            './src/pages/MarketingEmailSocialPage.jsx',
            './src/pages/MarketingSalesFunnelPage.jsx'
          ],
          'media-pages': [
            './src/pages/MediaVideoProductionPage.jsx',
            './src/pages/MediaPhotographyPage.jsx',
            './src/pages/MediaTestimonialPage.jsx',
            './src/pages/MediaAerialDronePage.jsx'
          ],
          'design-pages': [
            './src/pages/DesignWebDesignPage.jsx',
            './src/pages/DesignBrandingPage.jsx',
            './src/pages/DesignUXUIPage.jsx',
            './src/pages/DesignGraphicDesignPage.jsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
