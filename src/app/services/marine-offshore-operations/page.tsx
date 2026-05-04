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
