import { AnyEntryMap, CollectionEntry } from 'astro:content';

export const formatDate = (date: string) => {
  var options: Intl.DateTimeFormatOptions = {
    dateStyle: 'medium'
  };

  return new Date(date).toLocaleDateString(undefined, options);
};

// export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
export const sortPostsByDate = (
  a: CollectionEntry<keyof AnyEntryMap>,
  b: CollectionEntry<keyof AnyEntryMap>
) => {
  const dateA = new Date(a.data.date);
  const dateB = new Date(b.data.date);
  if (dateA < dateB) {
    return 1;
  }
  if (dateA > dateB) {
    return -1;
  }
  return 0;
};
