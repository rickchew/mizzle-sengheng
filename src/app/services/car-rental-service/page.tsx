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
  title: 'Car Rental Service',
  description: 'Reliable car rental service in Miri, Sarawak. Seng Heng provides well-maintained vehicles for corporate, offshore crew, and personal use across East Malaysia.',
  alternates: { canonical: '/services/car-rental-service' },
}

const CarRentalServicePage = () => {
  return (
    <>
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
