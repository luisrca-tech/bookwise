import type { MetadataRoute } from 'next';

const url = process.env.VERCEL_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `https://${url}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    }
  ];
}