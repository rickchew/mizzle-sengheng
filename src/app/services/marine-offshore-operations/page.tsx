import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import React from 'react'
import Hero from './component/Hero'
import Clients from './component/Clients'
import Features1 from './component/Features1'
import Features2 from './component/Features2'
import Features3 from './component/Features3'
import Integrations from './component/Integrations'
import Pricing from './component/Pricing'
import Blogs from './component/Blogs'
import Footer6 from '@/components/footer/Footer6'
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
        <Clients />
        <Features1 />
        {/* <Features2 />
        <Features3 />
        <Integrations />
        <Pricing />
        <Blogs /> */}
      </main>

      <Footer1 />
    </>
  )
}

export default page
