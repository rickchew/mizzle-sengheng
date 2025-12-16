'use client'
import heroFinance from '@/assets/images/elements/hero-finance.svg'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsStopwatch, BsFire, BsLifePreserver, BsShieldCheck } from 'react-icons/bs'
import CountUp from 'react-countup'
import { clientsData } from '../data'
import Image from 'next/image'
import { SwiperOptions } from 'swiper/types'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Hero = () => {
  const swiperOptions: SwiperOptions = {
    modules: [Autoplay],
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
    wrapperClass: 'align-items-center',
  }

  return (
    <section className="pt-xl-8 pb-0">
      <Container className="pt-2 pt-sm-5">
        <Row className="g-4 g-xxl-5">
          <Col xl={6}>
            <h1 className="mb-0 lh-base">
              Supporting Operations with Seamless Logistics
            </h1>

            <p className="mb-0 mt-4 mt-xl-5">
              From planning to delivery, our transport solutions keep your cargo moving efficiently while meeting operational and safety requirements.
            </p>

            {/* <div className="d-flex gap-1 gap-sm-3 flex-wrap mt-4 mt-xl-5">
              <Button variant="dark" type="button">
                Get started
              </Button>
              <Button variant="outline-dark" type="button">
                Start a 14 days free trial
              </Button>
            </div> */}

            <ul className="list-inline d-flex flex-wrap gap-2 gap-sm-4 mb-0 mt-4 mt-xl-5">
              <li className="list-inline-item heading-color icons-center">
                <BsStopwatch className="me-1" />
                Round-the-Clock Support
              </li>
              <li className="list-inline-item heading-color icons-center">
                <BsFire className="me-1" />
                Timely Delivery Assurance
              </li>
              <li className="list-inline-item heading-color icons-center">
                <BsLifePreserver className="me-1" />
                Trained & Certified Crew
              </li>
            </ul>
          </Col>

          <Col xl={6} className="text-center">
            <Image src={heroFinance} alt="hero-img" />
          </Col>
        </Row>

        <hr className="border-primary opacity-2 mt-sm-7 my-5" />

        <Row>
          <Col md={6} xl={7} className="mb-5 mb-md-0">
            <p className="mb-0">
              <BsShieldCheck /> | Trusted logistics and transport support for industrial and maritime operations.
            </p>

            {/* <Swiper className="mt-2 mt-md-4" {...swiperOptions}>
              {clientsData.map((client, idx) => (
                <SwiperSlide key={idx}>{client.image && <Image src={client.image} className="px-3 ps-0" alt="client-img" />}</SwiperSlide>
              ))}
            </Swiper> */}
          </Col>

          {/* <Col md={6} lg={5} xl={3} className="ms-auto text-md-end">
            <p className="mb-0 me-2">
              Trusted by Customers <span className="badge bg-dark">Active</span>
            </p>

            <div className="d-flex justify-content-md-end mt-2 mt-md-4">
              <div>
                <div className="d-flex justify-content-md-end">
                  <h4 className="purecounter mb-0">
                    <CountUp start={0} end={15} delay={0.3} duration={3} />
                  </h4>
                  <span className="h4 mb-0">k+</span>
                </div>
                <p className="mb-0">Active users</p>
              </div>

              <div className="vr mx-3 mx-sm-4"></div>

              <div>
                <div className="d-flex justify-content-md-end">
                  <h4 className="purecounter mb-0">
                    <CountUp start={0} end={56} delay={0.3} duration={3} />
                  </h4>
                  <span className="h4 mb-0">+</span>
                </div>
                <p className="mb-0">Completed projects</p>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  )
}

export default Hero
