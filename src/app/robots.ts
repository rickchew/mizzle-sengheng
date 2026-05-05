import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.senghengshipping.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/demos/', '/saas/', '/blog/', '/shop/', '/account/', '/auth/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
