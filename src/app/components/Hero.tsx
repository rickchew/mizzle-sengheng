'use client'
import bg6Img from '@/assets/images/bg/06.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import { BsWater, BsShieldCheck } from 'react-icons/bs'
import { ReactTyped } from 'react-typed'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="position-relative overflow-hidden pb-0 pt-xl-9">
      <Container className="pt-4 pt-sm-5">
        <Row className="g-xl-5 align-items-center">
          <Col xl={6} className="mb-5 mb-xl-0">
            <div className="pe-xxl-4">
              <span className="heading-color d-inline-block bg-light small rounded-3 px-3 py-2">
                🚢 Trusted Marine Partner in Miri, Sarawak
              </span>
              <h1 className="mt-3 lh-base">
                Marine &amp; Offshore&nbsp;
                <span className="text-primary d-block">
                  <ReactTyped
                    strings={['Operations', 'Forwarding', 'Equipment Supply', 'Ship Repairs']}
                    className="typed"
                    typeSpeed={120}
                    backSpeed={60}
                    loop
                  />
                </span>
                — Under One Roof
              </h1>
              <p className="mb-0 mt-4">
                From crew transfer boats and customs clearance to equipment rental and fabrication, Seng Heng delivers integrated marine services across East &amp; West Malaysia, Labuan, and Brunei.
              </p>
              <div className="d-flex flex-wrap gap-2 mt-4 mt-md-5">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
                <Link href="/our-fleet" className="btn btn-outline-dark">
                  View Our Fleet
                </Link>
              </div>
              <Row className="mt-5">
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="d-flex align-items-center">
                    <figure className="text-primary mb-0">
                      <BsWater size={40} />
                    </figure>
                    <div className="ms-3">
                      <h6 className="mb-1">10 Vessels in Fleet</h6>
                      <p className="mb-0 small">Offshore, survey &amp; landing craft</p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-center">
                    <figure className="text-primary mb-0">
                      <BsShieldCheck size={40} />
                    </figure>
                    <div className="ms-3">
                      <h6 className="mb-1">20+ Years Experience</h6>
                      <p className="mb-0 small">Serving the oil &amp; gas sector</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={10} xl={6} className="position-relative mx-auto mt-4 mt-xl-0">
            <Image src={bg6Img} className="rounded-3" alt="Seng Heng fleet" />
            <div className="d-inline-block bg-dark rounded-4 position-absolute start-0 bottom-0 mb-md-4 ms-md-n3 p-3">
              <h6 className="text-white mb-1">Sarawak · Sabah · Labuan · Brunei</h6>
              <p className="text-white-50 small mb-0">Operational coverage across the region</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
