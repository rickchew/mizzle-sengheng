import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Steps from './components/Steps'

export const metadata: Metadata = {
  title: 'Engineering & Shipyard Services',
  description:
    'Ship repairs, hull maintenance, engine overhauls, structural welding, CAD engineering, and custom fabrication for the marine and offshore sector in East Malaysia, Labuan, and Brunei.',
  alternates: { canonical: '/services/engineering-shipyard-services' },
  openGraph: {
    title: 'Engineering & Shipyard Services | Seng Heng Shipping',
    description:
      'Ship repairs, hull maintenance, engine overhauls, structural welding, CAD engineering, and custom fabrication for the marine and offshore sector in East Malaysia, Labuan, and Brunei.',
    url: '/services/engineering-shipyard-services',
    images: [{ url: '/og/engineering.jpg', alt: 'Seng Heng Shipping — Engineering & Shipyard Services' }],
  },
  twitter: {
    title: 'Engineering & Shipyard Services | Seng Heng Shipping',
    description:
      'Ship repairs, hull maintenance, engine overhauls, structural welding, CAD engineering, and custom fabrication for the marine and offshore sector in East Malaysia, Labuan, and Brunei.',
    images: ['/og/engineering.jpg'],
  },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.senghengshipping.com/' },
        { '@type': 'ListItem', position: 2, name: 'Engineering & Shipyard Services', item: 'https://www.senghengshipping.com/services/engineering-shipyard-services' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.senghengshipping.com/services/engineering-shipyard-services#service',
      name: 'Engineering & Shipyard Services',
      provider: { '@id': 'https://www.senghengshipping.com/#business' },
      description: 'Ship repairs, hull maintenance, engine overhauls, structural welding, CAD engineering, and custom fabrication for the marine and offshore sector in East Malaysia, Labuan, and Brunei.',
      url: 'https://www.senghengshipping.com/services/engineering-shipyard-services',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Sarawak' },
        { '@type': 'AdministrativeArea', name: 'Sabah' },
        { '@type': 'AdministrativeArea', name: 'Labuan' },
        { '@type': 'Country', name: 'Malaysia' },
        { '@type': 'Country', name: 'Brunei' },
      ],
    },
  ],
}

const EngineeringShipyardPage = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: true,
          ulClassName: 'ms-auto',
        }}
        data-bs-theme="dark"
      />
      <main>
        <Hero />
        <Overview />
        <Gallery />
        <Benefits />
        <Steps />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default EngineeringShipyardPage
