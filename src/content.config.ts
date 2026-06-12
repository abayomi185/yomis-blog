import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    cover: z
      .object({
        image: z.string(),
        alt: z.string()
      })
      .optional(),
    author: z.string()
  })
});

export const collections = {
  posts: postsCollection
};
