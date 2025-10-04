// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// MDX + remark/rehype
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// Custom build-time plugins (keep these as separate files)
import { generateRssPlugin } from './plugins/rssPlugin.js'
import { generateSitemapPlugin } from './plugins/sitemapPlugin.js'

export default defineConfig({
  plugins: [
    // MDX MUST run before React so .md/.mdx compile correctly
    mdx({
      include: ['**/*.{md,MD,mdx,MDX}'],
      remarkPlugins: [
        remarkGfm,
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: 'frontmatter' }],
      ],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    }),
    react(),
    tailwindcss(),

    // Build-time generators
    generateRssPlugin({
      site: 'https://uptrademedia.com',
      title: 'Uptrade Media Insights',
      description: 'Bold strategies and proven tactics for design, media, and growth.',
      feedPath: 'rss.xml',
      limit: 50,
    }),
    generateSitemapPlugin({
      site: 'https://uptrademedia.com',
      outFile: 'sitemap.xml',
      // Add any extra routes you want guaranteed in the sitemap:
      extraRoutes: [
        '/', '/about', '/contact', '/free-audit', '/portfolio',
        '/marketing', '/media', '/design',
        '/marketing/seo',
        '/marketing/content-marketing',
        '/marketing/ad-management',            // your route name
        '/marketing/reputation-management',    // your route name
        '/marketing/email-social-marketing',   // your route name
        '/marketing/sales-funnels',            // your route name
        '/media/video-production',
        '/media/photography',
        '/media/build-credibility',            // your route name
        '/media/aerial-drone',
        '/design/web-design',
        '/design/branding',
        '/design/ux',
        '/design/graphic-design',
      ],
      exclude: ['/404', '/404.html'],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: { compress: { drop_console: true, drop_debugger: true } },
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', '@radix-ui/react-slot'],
          'utils-vendor': ['lucide-react', 'clsx', 'tailwind-merge'],

          // Group some big pages into stable chunks to keep main bundle skinny
          'portfolio-pages': [
            './src/pages/portfolio/ChateauHeritageSquarePage.jsx',
            './src/pages/portfolio/ElSenorPigPage.jsx',
            './src/pages/portfolio/ManhattanHarbourLivingPage.jsx',
            './src/pages/portfolio/MarinaManhattanHarbourPage.jsx',
            './src/pages/portfolio/QueenCityRiverboatsPage.jsx',
            './src/pages/portfolio/SpadeKreationsPage.jsx',
          ],
          'marketing-pages': [
            './src/pages/MarketingSEOPage.jsx',
            './src/pages/MarketingPaidAdsPage.jsx',           // ad-management route
            './src/pages/MarketingContentMarketingPage.jsx',
            './src/pages/MarketingEmailSocialPage.jsx',
            './src/pages/MarketingSalesFunnelPage.jsx',
            './src/pages/MarketingReputationPage.jsx',        // reputation-management route
          ],
          'media-pages': [
            './src/pages/MediaVideoProductionPage.jsx',
            './src/pages/MediaPhotographyPage.jsx',
            './src/pages/MediaTestimonialPage.jsx',           // build-credibility route
            './src/pages/MediaAerialDronePage.jsx',
          ],
          'design-pages': [
            './src/pages/DesignWebDesignPage.jsx',
            './src/pages/DesignBrandingPage.jsx',
            './src/pages/DesignUXUIPage.jsx',
            './src/pages/DesignGraphicDesignPage.jsx',
          ],
        },
      },
    },
  },
})
