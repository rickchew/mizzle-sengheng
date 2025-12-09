import React from 'react'
import Hero from './components/Hero'
import Features4 from './components/Features4'
import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'

const services = () => {
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
        
        <Features4 />
        {/* 
        <Tools />
        <Features />
        <Features2 />
        <Features3 /> */}
      </main>
      <Footer1 />
    </>
  )
}

export default services
