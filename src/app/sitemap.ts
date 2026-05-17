import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.senghengshipping.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date('2026-05-16'), changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/about-us`, lastModified: new Date('2026-05-16'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/about-us/company-profile`, lastModified: new Date('2026-05-16'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/about-us/vision-mission`, lastModified: new Date('2026-05-16'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/about-us/hse`, lastModified: new Date('2026-05-16'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/our-fleet`, lastModified: new Date('2026-05-16'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/our-clients`, lastModified: new Date('2026-05-16'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/services/marine-offshore-operations`, lastModified: new Date('2026-05-16'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/services/logistics-transport-solutions`, lastModified: new Date('2026-05-16'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services/engineering-shipyard-services`, lastModified: new Date('2026-05-16'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services/marine-equipment-general-supplies`, lastModified: new Date('2026-05-16'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services/car-rental-service`, lastModified: new Date('2026-05-16'), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
