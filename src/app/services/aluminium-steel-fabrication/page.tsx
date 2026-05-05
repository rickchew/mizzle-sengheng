import React from 'react'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Features4 from './components/Features4'
import Benefits from './components/Benefits'
import Steps from './components/Steps'
import CTA from './components/CTA'
import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aluminium & Steel Fabrication',
  description:
    'Precision fabrication of steel structures, piping systems, industrial skids, DNV containers, and custom metal components for offshore and industrial applications across East Malaysia.',
  alternates: { canonical: '/services/aluminium-steel-fabrication' },
}

const services = () => {
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
        <Features4 />
        <Benefits />
        <Steps />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default services
