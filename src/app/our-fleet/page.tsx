import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'
import CTA from './components/CTA'
import FleetGrid from './components/FleetGrid'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'

export const metadata: Metadata = {
  title: 'Our Fleet',
  description:
    'Explore Seng Heng Shipping\'s fleet of offshore support vessels, passenger/pilot/survey boats, and landing craft serving Sarawak, Sabah, East & West Malaysia, Labuan, and Brunei.',
  alternates: { canonical: '/our-fleet' },
  openGraph: {
    title: 'Our Fleet | Seng Heng Shipping',
    description:
      'Explore Seng Heng Shipping\'s fleet of offshore support vessels, passenger/pilot/survey boats, and landing craft serving Sarawak, Sabah, East & West Malaysia, Labuan, and Brunei.',
    url: '/our-fleet',
    images: [{ url: '/og/fleet.jpg', alt: 'Seng Heng Shipping — Our Fleet of Marine Vessels' }],
  },
  twitter: {
    title: 'Our Fleet | Seng Heng Shipping',
    description:
      'Explore Seng Heng Shipping\'s fleet of offshore support vessels, passenger/pilot/survey boats, and landing craft serving Sarawak, Sabah, East & West Malaysia, Labuan, and Brunei.',
    images: ['/og/fleet.jpg'],
  },
}

const OurFleetPage = () => {
  return (
    <>
      <TopNavigationBar
        menuProps={{
          showMegaMenu: false,
          showContactUs: true,
          ulClassName: 'ms-auto',
        }}
        showBuyNow={false}
        showSignUp={false}
        data-bs-theme="dark"
      />
      <main>
        <Hero />
        <StatsStrip />
        <FleetGrid />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default OurFleetPage
