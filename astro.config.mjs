import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import { remarkReadingTime } from './src/utils/readingTime';

// https://astro.build/config
export default defineConfig({
  site: 'https://yomis.blog/',
  integrations: [
    tailwind(),
    react(),
    sitemap(),
    expressiveCode({
      themes: ['github-light', 'github-dark'],
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => `[class~='dark']`
    }),
    mdx()
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  output: 'static',
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true
    }
  }),
  collections: {
    posts: {
      directory: 'src/pages/posts',
      slug: ({ id, defaultSlug }) => defaultSlug.replace('posts/', '')
    }
  }
});
