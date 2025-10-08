import { remarkReadingTime } from './src/utils/readingTime';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import expressiveCode from 'astro-expressive-code';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: 'passthrough',
    platformProxy: {
      enabled: true,
      experimental: {
        remoteBindings: true
      }
    }
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
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'localhost', port: '4321', pathname: '/**' },
      { protocol: 'https', hostname: 'yomis.blog', pathname: '/**' },
      { protocol: 'https', hostname: 'draft.yomis.blog', pathname: '/**' }
    ]
  },
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  redirects: {
    '/rss': {
      status: 302,
      destination: '/rss.xml'
    }
  },
  output: 'static',
  site: 'https://yomis.blog/',
  vite: {
    ssr: {
      external: ['@pulumi/pulumi']
    }
  }
});
