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
