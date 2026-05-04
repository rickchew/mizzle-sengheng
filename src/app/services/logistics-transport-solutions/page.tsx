import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Footer1 from '@/components/footer/Footer1'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Features from './components/Features'
import Blogs from './components/Blogs'
import React from 'react'

const page = () => {
  return (
    <>
      <TopNavigationBar
        navClassName="navbar-dark"
        data-bs-theme="dark"
        menuProps={{
          showContactUs: true,
          showDocs: true,
          ulClassName: 'ms-auto',
        }}
      />

      <main>
        <Hero />
        {/* <About /> */}
        <Services />
        {/* <Projects />
        <Testimonials />
        <Features />
        <Blogs /> */}
      </main>

      <Footer1 />
    </>
  )
}

export default page
