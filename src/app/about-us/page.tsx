import Footer1 from '@/components/footer/Footer1'
import React from 'react'
import Hero from './component/Hero'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Seng Heng Shipping — an integrated marine, shipping, and engineering services group based in Miri, Sarawak, serving offshore operations across East Malaysia, Labuan, and Brunei since 1998.',
  alternates: { canonical: '/about-us' },
  openGraph: {
    title: 'About Us | Seng Heng Shipping',
    description:
      'Learn about Seng Heng Shipping — an integrated marine, shipping, and engineering services group based in Miri, Sarawak, serving offshore operations across East Malaysia, Labuan, and Brunei since 1998.',
    url: '/about-us',
    images: [{ url: '/og/about.jpg', alt: 'Seng Heng Shipping — About Us' }],
  },
  twitter: {
    title: 'About Us | Seng Heng Shipping',
    description:
      'Learn about Seng Heng Shipping — an integrated marine, shipping, and engineering services group based in Miri, Sarawak, serving offshore operations across East Malaysia, Labuan, and Brunei since 1998.',
    images: ['/og/about.jpg'],
  },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.senghengshipping.com/' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://www.senghengshipping.com/about-us' },
  ],
}

const page = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: false,
          ulClassName: 'ms-auto',
        }}
        // showSignUp
        // showBuyNow
      />
      <main>
        <Hero />
        {/* <About />
        <Testimonials />
        <Location />
        <FAQs /> */}
      </main>
      <Footer1 />
    </>
  )
}

export default page
