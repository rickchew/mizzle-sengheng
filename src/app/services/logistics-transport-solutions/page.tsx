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
}

const page = () => {
  return (
    <>
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
