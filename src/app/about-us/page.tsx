import Footer1 from '@/components/footer/Footer1'
import React from 'react'
import Hero from './component/Hero'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'

const page = () => {
  return (
    <>
      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: true,
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
