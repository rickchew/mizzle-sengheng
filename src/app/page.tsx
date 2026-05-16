import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer1 from '@/components/footer/Footer1'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import About from './components/About'
import CTA from './components/CTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trusted Marine & Offshore Service Partner in Miri, Sarawak',
  description:
    'Seng Heng Shipping provides marine operations, shipping & forwarding, equipment rental, fabrication, and ship repair services across Sarawak, Sabah, East & West Malaysia, Labuan, and Brunei since 1998.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Trusted Marine & Offshore Service Partner in Miri, Sarawak',
    description:
      'Marine operations, shipping & forwarding, equipment rental, fabrication, and ship repair across Sarawak, Sabah, East & West Malaysia, Labuan, and Brunei since 1998.',
    url: '/',
    images: [{ url: '/og/home.jpg', alt: 'Seng Heng Shipping — Marine & Offshore Operations, Miri Sarawak' }],
  },
  twitter: {
    title: 'Trusted Marine & Offshore Service Partner in Miri, Sarawak',
    description:
      'Marine operations, shipping & forwarding, equipment rental, fabrication, and ship repair across Sarawak, Sabah, East & West Malaysia, Labuan, and Brunei since 1998.',
    images: ['/og/home.jpg'],
  },
}

const page = () => {
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
      />
      <main>
        <Hero />
        <Clients />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer1 />
    </>
  )
}

export default page
