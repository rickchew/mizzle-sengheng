import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'
import ContactInfo from './components/ContactInfo'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Seng Heng Shipping for marine & offshore operations, equipment rental, logistics, fabrication, and ship repair services in Sarawak, Sabah, Labuan, and Brunei.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Seng Heng Shipping',
    description:
      'Get in touch with Seng Heng Shipping for marine & offshore operations, equipment rental, logistics, fabrication, and ship repair services in Sarawak, Sabah, Labuan, and Brunei.',
    url: '/contact',
    images: [{ url: '/og/home.jpg', alt: 'Seng Heng Shipping — Contact Us' }],
  },
  twitter: {
    title: 'Contact Us | Seng Heng Shipping',
    description:
      'Get in touch with Seng Heng Shipping for marine & offshore operations, equipment rental, logistics, fabrication, and ship repair services in Sarawak, Sabah, Labuan, and Brunei.',
    images: ['/og/home.jpg'],
  },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.senghengshipping.com/' },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://www.senghengshipping.com/contact' },
  ],
}

const ContactPage = () => {
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
        <ContactInfo />
      </main>
      <Footer1 />
    </>
  )
}

export default ContactPage
