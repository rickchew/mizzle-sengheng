import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import React from 'react'
import Hero from './component/Hero'
import Overview from './component/Overview'
import Benefits from './component/Benefits'
import Steps from './component/Steps'
import CTA from './component/CTA'
import Footer1 from '@/components/footer/Footer1'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marine & Offshore Operations',
  description:
    'Seng Heng Shipping provides safe, reliable marine and offshore operations — crew transfer, pilot boats, survey vessels, ship chandler services, and offshore support across Sarawak, Sabah, Labuan, and Brunei.',
  alternates: { canonical: '/services/marine-offshore-operations' },
  openGraph: {
    title: 'Marine & Offshore Operations | Seng Heng Shipping',
    description:
      'Safe, reliable crew transfer, pilot boats, survey vessels, ship chandler, and offshore support services across Sarawak, Sabah, Labuan, and Brunei.',
    url: '/services/marine-offshore-operations',
    images: [{ url: '/og/marine.jpg', alt: 'Seng Heng Shipping — Marine & Offshore Operations' }],
  },
  twitter: {
    title: 'Marine & Offshore Operations | Seng Heng Shipping',
    description:
      'Safe, reliable crew transfer, pilot boats, survey vessels, ship chandler, and offshore support services across Sarawak, Sabah, Labuan, and Brunei.',
    images: ['/og/marine.jpg'],
  },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.senghengshipping.com/' },
        { '@type': 'ListItem', position: 2, name: 'Marine & Offshore Operations', item: 'https://www.senghengshipping.com/services/marine-offshore-operations' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.senghengshipping.com/services/marine-offshore-operations#service',
      name: 'Marine & Offshore Operations',
      provider: { '@id': 'https://www.senghengshipping.com/#business' },
      description: 'Crew transfer, pilot boats, survey vessels, ship chandler, and offshore support services across Sarawak, Sabah, Labuan, and Brunei.',
      url: 'https://www.senghengshipping.com/services/marine-offshore-operations',
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

const page = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: true,
          ulClassName: 'ms-auto',
        }}
        showSignUp
        showBuyNow
      />

      <main>
        <Hero />
        <Overview />
        <Benefits />
        <Steps />
        <CTA />
      </main>

      <Footer1 />
    </>
  )
}

export default page
