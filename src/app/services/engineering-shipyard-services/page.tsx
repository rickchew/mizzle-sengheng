import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Steps from './components/Steps'

export const metadata: Metadata = {
  title: 'Engineering & Shipyard Services',
  description:
    'Ship repairs, hull maintenance, engine overhauls, structural welding, CAD engineering, and custom fabrication for the marine and offshore sector in East Malaysia, Labuan, and Brunei.',
  alternates: { canonical: '/services/engineering-shipyard-services' },
}

const EngineeringShipyardPage = () => {
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
        <Overview />
        <Gallery />
        <Benefits />
        <Steps />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default EngineeringShipyardPage
