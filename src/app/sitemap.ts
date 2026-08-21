import type { MetadataRoute } from 'next'
import { siteUrl, servicePageData } from '@/data/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/approach`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${siteUrl}/resources`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/contact`, changeFrequency: 'yearly', priority: 0.8 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = servicePageData.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
