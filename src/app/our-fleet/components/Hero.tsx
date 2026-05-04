import bgImg from '@/assets/images/bg/05.jpg'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

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
                  Our Fleet
                </li>
              </ol>
            </nav>
            <h1 className="mb-3 text-white">Our Fleet</h1>
            <p className="text-white-50 mb-0">
              Serving Sarawak, Sabah, East &amp; West Malaysia, Labuan, and Brunei
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
