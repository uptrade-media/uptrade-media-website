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

export default defineConfig({
  plugins: [
    // Make sure this stays BEFORE react()
    mdx({
      // Compile both .mdx and .md to React components
      include: ['**/*.mdx', '**/*.md'],
      remarkPlugins: [
        remarkGfm,
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: 'frontmatter' }], // exports `frontmatter`
      ],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', '@radix-ui/react-slot'],
          'utils-vendor': ['lucide-react', 'clsx', 'tailwind-merge'],
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
            './src/pages/MarketingPaidAdsPage.jsx',
            './src/pages/MarketingContentMarketingPage.jsx',
            './src/pages/MarketingEmailSocialPage.jsx',
            './src/pages/MarketingSalesFunnelPage.jsx',
          ],
          'media-pages': [
            './src/pages/MediaVideoProductionPage.jsx',
            './src/pages/MediaPhotographyPage.jsx',
            './src/pages/MediaTestimonialPage.jsx',
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
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    minify: 'terser',
    terserOptions: { compress: { drop_console: true, drop_debugger: true } },
  },
})
