import rss from '@astrojs/rss';
import { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: "Yomi's Blog RSS Feed",
    description: 'A space to document and share my projects and ideas.',
    site: context.site?.toString() ?? '',
    items: posts.map((post) => {
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/${post.slug}/`,
        content: post.data.excerpt
      };
    }),
    stylesheet: './rss/styles.xsl',
    customData: `<language>en-us</language>`
  });
}
