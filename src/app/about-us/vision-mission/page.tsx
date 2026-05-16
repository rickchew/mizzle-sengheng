import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'
import CTA from './component/CTA'
import CoreValues from './component/CoreValues'
import Hero from './component/Hero'
import MissionVision from './component/MissionVision'
import StatsStrip from './component/StatsStrip'

export const metadata: Metadata = {
  title: 'Vision & Mission',
  description:
    'Seng Heng Shipping\'s vision, mission, and core values — a trusted marine and offshore service partner serving Sarawak, Sabah, East & West Malaysia, Labuan, and Brunei since 1998.',
  alternates: { canonical: '/about-us/vision-mission' },
}

const VisionMissionPage = () => {
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
        <MissionVision />
        <CoreValues />
        <StatsStrip />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default VisionMissionPage
