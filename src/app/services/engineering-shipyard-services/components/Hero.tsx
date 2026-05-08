import bgImg from '@/assets/images/services/structure.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section
      className="py-8 py-sm-9 position-relative"
      style={{ background: `url("${bgImg.src}") no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-overlay bg-dark opacity-7" />
      <Container className="position-relative z-index-1">
        <Row className="g-4 g-xxl-5">
          <Col lg={8} className="text-center mx-auto">
            <nav aria-label="breadcrumb" className="mb-3">
              <ol className="breadcrumb breadcrumb-dots breadcrumb-dark justify-content-center pb-0 mb-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white-50">Home</Link>
                </li>
                <li className="breadcrumb-item active text-white" aria-current="page">
                  Engineering &amp; Shipyard Services
                </li>
              </ol>
            </nav>
            <h1 className="mb-3 text-white">Welding, Fabrication &amp; Ship Repair Services</h1>
            <p className="text-white-50 mb-5">
              Comprehensive shipyard engineering covering vessel repairs, structural welding, custom fabrication, and engineered solutions for the marine and offshore sector.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
