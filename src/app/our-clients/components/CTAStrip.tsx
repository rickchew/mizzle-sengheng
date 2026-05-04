import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const CTAStrip = () => {
  return (
    <section className="bg-dark py-7" data-bs-theme="dark">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={8}>
            <h3 className="text-white mb-2">Ready to work with Seng Heng?</h3>
            <p className="text-white-50 mb-0">
              Contact us to discuss your marine and offshore requirements. We serve clients across East &amp; West Malaysia, Labuan, and Brunei.
            </p>
          </Col>
          <Col lg={4} className="text-lg-end">
            <Link href="/contact" className="btn btn-primary me-3">
              Contact Us
            </Link>
            <Link href="/our-fleet" className="btn btn-outline-light">
              View Our Fleet
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CTAStrip
