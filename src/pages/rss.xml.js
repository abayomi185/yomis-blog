import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: "Yomi's Blog RSS Feed",
    description: 'A space to document and share my projects and ideas.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./posts/*.{md,mdx}')),
    stylesheet: './rss/styles.xsl',
    customData: `<language>en-us</language>`
  });
}
