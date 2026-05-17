import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Steps from './components/Steps'

export const metadata: Metadata = {
  title: 'Marine Equipment Rental & General Supplies',
  description:
    'Class-certified generators, hydraulic A-frames, tugger winches, DNV containers, rescue boats, and offshore equipment rental across East Malaysia, Labuan, and Brunei.',
  alternates: { canonical: '/services/marine-equipment-general-supplies' },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.senghengshipping.com/' },
        { '@type': 'ListItem', position: 2, name: 'Marine Equipment Rental & General Supplies', item: 'https://www.senghengshipping.com/services/marine-equipment-general-supplies' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.senghengshipping.com/services/marine-equipment-general-supplies#service',
      name: 'Marine Equipment Rental & General Supplies',
      provider: { '@id': 'https://www.senghengshipping.com/#business' },
      description: 'Class-certified generators, hydraulic A-frames, tugger winches, DNV containers, rescue boats, and offshore equipment rental across East Malaysia, Labuan, and Brunei.',
      url: 'https://www.senghengshipping.com/services/marine-equipment-general-supplies',
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

const MarineEquipmentPage = () => {
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
        <Features />
        <Gallery />
        <Benefits />
        <Steps />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default MarineEquipmentPage
