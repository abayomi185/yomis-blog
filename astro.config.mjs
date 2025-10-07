import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import { remarkReadingTime } from './src/utils/readingTime';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },
    imageService: 'cloudflare'
  }),
  collections: {
    posts: {
      directory: 'src/pages/posts',
      slug: ({ id, defaultSlug }) => defaultSlug.replace('posts/', '')
    }
  },
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
  redirects: {
    '/rss': {
      status: 302,
      destination: '/rss.xml'
    }
  },
  site: 'https://yomis.blog/'
});
