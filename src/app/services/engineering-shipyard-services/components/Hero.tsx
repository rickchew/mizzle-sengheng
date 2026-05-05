import pattern2 from '@/assets/images/elements/bg-pattern-2.png'
import saasBg from '@/assets/images/services/structure.jpg'
import decoration1 from '@/assets/images/services/valve.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="pt-lg-8">
      <Container className="position-relative pt-4 pt-lg-0">
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-lg-0">
            <nav className="mb-4" aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-dots pb-0 mb-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Engineering &amp; Shipyard Services
                </li>
              </ol>
            </nav>
            <h1 className="mb-4">Welding, Fabrication &amp; Ship Repair Services</h1>
            <p className="mb-5">
              Comprehensive shipyard engineering covering vessel repairs, structural welding, custom fabrication, and engineered solutions for the marine and offshore sector.
            </p>
            <Link href="/contact" className="btn btn-primary me-3">
              Request a Quote
            </Link>
          </Col>
          <Col lg={6} className="ms-auto">
            <div className="position-relative pe-4 pe-sm-6">
              <div
                className="bg-dark rounded position-absolute top-0 end-0 w-50 h-100"
                style={{ backgroundImage: `url(${pattern2.src})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
              />
              <Image src={saasBg} className="rounded-4 border border-dark border-5 my-4 my-sm-6 position-relative" alt="ship-repair" priority />
              <Col xs={2} className="position-absolute bottom-0 start-0 ms-lg-n7">
                <Image src={decoration1} className="shadow rounded-4" alt="engineering-detail" />
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
