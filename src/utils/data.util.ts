import { AnyEntryMap, CollectionEntry } from 'astro:content';

export const formatDate = (pubDate: string) => {
  var options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  };

  return new Date(pubDate).toLocaleDateString(undefined, options);
};

// export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
export const sortPostsByDate = (
  a: CollectionEntry<keyof AnyEntryMap>,
  b: CollectionEntry<keyof AnyEntryMap>
) => {
  const pubDateA = new Date(a.data.pubDate);
  const pubDateB = new Date(b.data.pubDate);
  if (pubDateA < pubDateB) {
    return 1;
  }
  if (pubDateA > pubDateB) {
    return -1;
  }
  return 0;
};
