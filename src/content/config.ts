import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }: { image: any }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      date: z.date(),
      tags: z.array(z.string()),
      cover: z
        .object({
          image: image(),
          alt: z.string()
        })
        .optional(),
      author: z.string()
    })
});

export const collections = {
  posts: postsCollection
};
