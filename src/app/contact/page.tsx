import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import type { Metadata } from 'next'
import ContactInfo from './components/ContactInfo'
import Hero from './components/Hero'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Seng Heng Shipping for marine & offshore operations, equipment rental, logistics, fabrication, and ship repair services in Sarawak, Sabah, Labuan, and Brunei.',
}

const ContactPage = () => {
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
        <ContactInfo />
      </main>
      <Footer1 />
    </>
  )
}

export default ContactPage
