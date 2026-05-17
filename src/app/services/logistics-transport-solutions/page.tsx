import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer1 from '@/components/footer/Footer1'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Features from './components/Features'
import Blogs from './components/Blogs'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping, Forwarding & Logistics Solutions',
  description:
    'Customs clearance, air and sea freight, inland transport, warehousing, packing, and tug & barge services across East & West Malaysia, Labuan, and Brunei — all under one roof at Seng Heng Shipping.',
  alternates: { canonical: '/services/logistics-transport-solutions' },
  openGraph: {
    title: 'Shipping, Forwarding & Logistics Solutions | Seng Heng Shipping',
    description:
      'Customs clearance, air and sea freight, inland transport, warehousing, packing, and tug & barge services across East & West Malaysia, Labuan, and Brunei — all under one roof at Seng Heng Shipping.',
    url: '/services/logistics-transport-solutions',
    images: [{ url: '/og/logistics.jpg', alt: 'Seng Heng Shipping — Shipping, Forwarding & Logistics' }],
  },
  twitter: {
    title: 'Shipping, Forwarding & Logistics Solutions | Seng Heng Shipping',
    description:
      'Customs clearance, air and sea freight, inland transport, warehousing, packing, and tug & barge services across East & West Malaysia, Labuan, and Brunei — all under one roof at Seng Heng Shipping.',
    images: ['/og/logistics.jpg'],
  },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.senghengshipping.com/' },
        { '@type': 'ListItem', position: 2, name: 'Shipping, Forwarding & Logistics Solutions', item: 'https://www.senghengshipping.com/services/logistics-transport-solutions' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.senghengshipping.com/services/logistics-transport-solutions#service',
      name: 'Shipping, Forwarding & Logistics Solutions',
      provider: { '@id': 'https://www.senghengshipping.com/#business' },
      description: 'Customs clearance, air and sea freight, inland transport, warehousing, packing, and tug & barge services across East & West Malaysia, Labuan, and Brunei.',
      url: 'https://www.senghengshipping.com/services/logistics-transport-solutions',
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
        navClassName="navbar-dark"
        data-bs-theme="dark"
        menuProps={{
          showContactUs: true,
          showDocs: true,
          ulClassName: 'ms-auto',
        }}
      />

      <main>
        <Hero />
        {/* <About /> */}
        <Services />
        {/* <Projects />
        <Testimonials />
        <Features />
        <Blogs /> */}
      </main>

      <Footer1 />
    </>
  )
}

export default page
