import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://xanty.net', changeFrequency: 'weekly', priority: 1 }];
}
