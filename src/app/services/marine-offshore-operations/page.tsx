import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import React from 'react'
import Hero from './component/Hero'
import Overview from './component/Overview'
import Benefits from './component/Benefits'
import Steps from './component/Steps'
import CTA from './component/CTA'
import Footer1 from '@/components/footer/Footer1'

const page = () => {
  return (
    <>
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: true,
          ulClassName: 'ms-auto',
        }}
        showSignUp
        showBuyNow
      />

      <main>
        <Hero />
        <Overview />
        <Benefits />
        <Steps />
        <CTA />
      </main>

      <Footer1 />
    </>
  )
}

export default page
