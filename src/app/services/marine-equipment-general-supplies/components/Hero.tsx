import heroImg from '@/assets/images/marine-equipment-hero.jpg'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section
      className="pt-lg-8 pt-xl-9 position-relative"
      style={{ backgroundImage: `url(${heroImg.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
      data-bs-theme="dark">
      <div className="bg-overlay bg-dark opacity-7" />
      <Container className="position-relative z-index-1 pt-4 pt-lg-0">
        <Row className="align-items-center">
          <Col md={7} xl={6}>
            <nav className="mb-4" aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-dots pt-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white-50">Home</Link>
                </li>
                <li className="breadcrumb-item active text-white-50" aria-current="page">
                  Equipment Rental &amp; Supply
                </li>
              </ol>
            </nav>
            <h1 className="mb-4">Marine Equipment Rental &amp; General Supplies</h1>
            <p className="mb-4">
              Class-certified offshore equipment — generators, lifting frames, DNV containers, rescue boats, and more — deployed across East Malaysia, Labuan, and Brunei.
            </p>
          </Col>
          <Col md={4} className="ms-auto text-md-end">
            <Link href="/contact" className="btn btn-lg btn-primary mb-6 mb-md-0">
              Request a Quote
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
