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

const OurClientsPage = () => {
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
        <ClientGrid />
        <CTAStrip />
      </main>
      <Footer1 />
    </>
  )
}

export default OurClientsPage
