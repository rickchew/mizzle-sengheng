import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'
import Hero from './component/Hero'
import Overview from './component/Overview'
import Story from './component/Story'
import Stats from './component/Stats'
import Values from './component/Values'
import CTA from './component/CTA'

export const metadata: Metadata = {
  title: 'Company Profile | Seng Heng Shipping',
  description:
    'Founded in 1998 in Miri, Sarawak — Seng Heng is an integrated marine, shipping, and engineering services group serving offshore operations across East Malaysia, Labuan, and Brunei.',
  alternates: { canonical: '/about-us/company-profile' },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.senghengshipping.com/' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.senghengshipping.com/about-us' },
    { '@type': 'ListItem', position: 3, name: 'Company Profile', item: 'https://www.senghengshipping.com/about-us/company-profile' },
  ],
}

const CompanyProfilePage = () => {
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
        <Story />
        <Stats />
        <Values />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default CompanyProfilePage
