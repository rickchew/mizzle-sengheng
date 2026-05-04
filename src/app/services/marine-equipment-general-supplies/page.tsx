import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Features from './components/Features'
import Hero from './components/Hero'
import Steps from './components/Steps'

export const metadata: Metadata = {
  title: 'Marine Equipment Rental & General Supplies',
  description:
    'Class-certified generators, hydraulic A-frames, tugger winches, DNV containers, rescue boats, and offshore equipment rental across East Malaysia, Labuan, and Brunei.',
}

const MarineEquipmentPage = () => {
  return (
    <>
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
        <Benefits />
        <Steps />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default MarineEquipmentPage
