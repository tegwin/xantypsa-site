import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://vibepsa.net', changeFrequency: 'weekly', priority: 1 }];
}
