import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'
import ClientGrid from './components/ClientGrid'
import CTAStrip from './components/CTAStrip'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'Our Clients',
  description:
    'Seng Heng Shipping serves leading oil & gas operators including Petronas, Petros, Dialog, Dayang DESB, and more across Sarawak, Sabah, Labuan, and Brunei.',
  alternates: { canonical: '/our-clients' },
  openGraph: {
    title: 'Our Clients | Seng Heng Shipping',
    description:
      'Seng Heng Shipping serves leading oil & gas operators including Petronas, Petros, Dialog, Dayang DESB, and more across Sarawak, Sabah, Labuan, and Brunei.',
    url: '/our-clients',
    images: [{ url: '/og/home.jpg', alt: 'Seng Heng Shipping — Our Clients' }],
  },
  twitter: {
    title: 'Our Clients | Seng Heng Shipping',
    description:
      'Seng Heng Shipping serves leading oil & gas operators including Petronas, Petros, Dialog, Dayang DESB, and more across Sarawak, Sabah, Labuan, and Brunei.',
    images: ['/og/home.jpg'],
  },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.senghengshipping.com/' },
    { '@type': 'ListItem', position: 2, name: 'Our Clients', item: 'https://www.senghengshipping.com/our-clients' },
  ],
}

const OurClientsPage = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: true,
          ulClassName: 'ms-auto',
        }}
      />
      <main>
        <Hero />
        <ClientGrid />
        <CTAStrip />
      </main>
      <Footer1 />
    </>
  )
}

export default OurClientsPage
