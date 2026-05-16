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

const page = () => {
  return (
    <>
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
