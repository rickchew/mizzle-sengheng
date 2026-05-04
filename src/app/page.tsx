import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer1 from '@/components/footer/Footer1'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import About from './components/About'
import CTA from './components/CTA'

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
