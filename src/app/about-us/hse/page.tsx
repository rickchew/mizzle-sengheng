import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'
import Hero from './component/Hero'
import Overview from './component/Overview'
import Approach from './component/Approach'
import Stats from './component/Stats'
import Practices from './component/Practices'
import CTA from './component/CTA'

export const metadata: Metadata = {
  title: 'Health, Safety & Environment (HSE) | Seng Heng Shipping',
  description:
    'How Seng Heng Shipping runs marine, offshore, forwarding, and warehousing operations safely — class-certified vessels and equipment, experienced crew, secured warehousing, and customs-compliant documentation across Sarawak, Sabah, Labuan, and Brunei.',
  alternates: { canonical: '/about-us/hse' },
}

const HsePage = () => {
  return (
    <>
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: false,
          ulClassName: 'ms-auto',
        }}
      />
      <main>
        <Hero />
        <Overview />
        <Approach />
        <Stats />
        <Practices />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default HsePage
