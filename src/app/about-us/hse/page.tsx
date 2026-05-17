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

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.senghengshipping.com/' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.senghengshipping.com/about-us' },
    { '@type': 'ListItem', position: 3, name: 'Health, Safety & Environment', item: 'https://www.senghengshipping.com/about-us/hse' },
  ],
}

const HsePage = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
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
