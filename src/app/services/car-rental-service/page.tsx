import React from 'react'
import Hero from './components/Hero'
import Overview from './components/Overview'
import PricingTable from './components/PricingTable'
import Benefits from './components/Benefits'
import Steps from './components/Steps'
import CTA from './components/CTA'
import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Rental Service in Miri, Sarawak',
  description: 'Reliable car rental service in Miri, Sarawak. Seng Heng provides well-maintained vehicles for corporate, offshore crew, and personal use across East Malaysia.',
  keywords: ['car rental Miri', 'car hire Sarawak', 'vehicle rental Miri Sarawak', 'offshore crew transport Miri', 'corporate car rental East Malaysia', 'car rental Sarawak'],
  alternates: { canonical: '/services/car-rental-service' },
  openGraph: {
    title: 'Car Rental Service in Miri, Sarawak | Seng Heng Shipping',
    description: 'Well-maintained vehicles for corporate, offshore crew, and personal use across Miri and East Malaysia. Flexible daily, weekly, and monthly rental terms.',
    url: '/services/car-rental-service',
    images: [{ url: '/og/home.jpg', alt: 'Seng Heng Shipping — Car Rental Service in Miri, Sarawak' }],
  },
  twitter: {
    title: 'Car Rental Service in Miri, Sarawak | Seng Heng Shipping',
    description: 'Well-maintained vehicles for corporate, offshore crew, and personal use across Miri and East Malaysia. Flexible daily, weekly, and monthly rental terms.',
    images: ['/og/home.jpg'],
  },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.senghengshipping.com/' },
        { '@type': 'ListItem', position: 2, name: 'Car Rental Service', item: 'https://www.senghengshipping.com/services/car-rental-service' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.senghengshipping.com/services/car-rental-service#service',
      name: 'Car Rental Service',
      provider: { '@id': 'https://www.senghengshipping.com/#business' },
      description: 'Reliable car rental in Miri, Sarawak for corporate, offshore crew, and personal use across East Malaysia.',
      url: 'https://www.senghengshipping.com/services/car-rental-service',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Sarawak' },
        { '@type': 'Country', name: 'Malaysia' },
      ],
    },
  ],
}

const CarRentalServicePage = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: true,
          ulClassName: 'ms-auto',
        }}
      />
      <main>
        <Hero />
        <Overview />
        <PricingTable />
        <Benefits />
        <Steps />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default CarRentalServicePage
