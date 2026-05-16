import '@/assets/scss/style.scss'
import BackToTop from '@/components/BackToTop'
import PageWrapper from '@/components/PageWrapper'
import { DEFAULT_PAGE_TITLE } from '@/states/constants'
import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'

const Instrument = Instrument_Sans({
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  weight: [ '400', '500','600', '700'],
})


const SITE_URL = 'https://www.senghengshipping.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Seng Heng Shipping',
    default: DEFAULT_PAGE_TITLE,
  },
  description:
    'Seng Heng Shipping — trusted marine, offshore, shipping, equipment rental, fabrication, and ship repair services. Based in Miri, Sarawak; serving Sarawak, Sabah, East & West Malaysia, Labuan, and Brunei since 1998.',
  keywords: [
    'Seng Heng Shipping',
    'marine services Miri',
    'offshore support Sarawak',
    'ship chandler Sarawak',
    'shipping forwarding Miri',
    'crew boat charter',
    'offshore equipment rental',
    'marine fabrication',
    'ship repair Miri',
    'Labuan offshore',
    'Brunei marine services',
  ],
  authors: [{ name: 'Seng Heng Shipping' }],
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    siteName: 'Seng Heng Shipping',
    title: 'Seng Heng Shipping — Marine & Offshore Services',
    description:
      'Trusted marine & offshore service partner in Miri, Sarawak — operations, forwarding, equipment rental, engineering, and fleet services since 1998.',
    images: [
      {
        url: '/og/home.jpg',
        alt: 'Seng Heng Shipping — Marine & Offshore Services, Miri Sarawak',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seng Heng Shipping — Marine & Offshore Services',
    description:
      'Trusted marine & offshore service partner in Miri, Sarawak — operations, forwarding, equipment rental, engineering, and fleet services since 1998.',
    images: ['/og/home.jpg'],
  },
  other: {
    'geo.region': 'MY-13',
    'geo.placename': 'Miri, Sarawak',
    'geo.position': '4.3995;113.9914',
    ICBM: '4.3995, 113.9914',
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Seng Heng Shipping',
  url: SITE_URL,
  description:
    'Marine, offshore, shipping, equipment rental, fabrication, and ship repair services serving Sarawak, Sabah, East & West Malaysia, Labuan, and Brunei since 1998.',
  foundingDate: '1998',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Miri',
    addressRegion: 'Sarawak',
    addressCountry: 'MY',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 4.3995,
    longitude: 113.9914,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Sarawak' },
    { '@type': 'AdministrativeArea', name: 'Sabah' },
    { '@type': 'AdministrativeArea', name: 'Labuan' },
    { '@type': 'Country', name: 'Malaysia' },
    { '@type': 'Country', name: 'Brunei' },
  ],
  sameAs: [
    'https://www.facebook.com/senghengshipping',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={Instrument.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <PageWrapper>
          {children}
          <BackToTop />
        </PageWrapper>
      </body>
    </html>
  )
}
