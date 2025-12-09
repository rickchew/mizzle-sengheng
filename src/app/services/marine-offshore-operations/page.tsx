import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import React from 'react'
import Hero from './component/Hero'
import Clients from './component/Clients'
import Features1 from './component/Features1'
// removed unused imports for optional sections (kept commented uses in markup)
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
