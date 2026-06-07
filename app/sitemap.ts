import type { MetadataRoute } from 'next';
import { navigation, siteSettings } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...navigation, { label: 'Book Now', href: '/booking' }];

  return routes.map((item) => ({
    url: new URL(item.href, siteSettings.url).toString(),
    lastModified: new Date(),
    changeFrequency: item.href === '/' ? 'weekly' : 'monthly',
    priority: item.href === '/' ? 1 : 0.8
  }));
}
