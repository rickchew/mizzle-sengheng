import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="pt-8 pb-5 position-relative overflow-hidden">
      <figure className="position-absolute top-0 start-50 translate-middle">
        <svg className="fill-light opacity-8" width={1990} height={859} viewBox="0 0 1990 859" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1990 429.5C1990 666.706 1544.52 859 995 859C445.477 859 0 666.706 0 429.5C0 192.294 445.477 0 995 0C1544.52 0 1990 192.294 1990 429.5Z" />
        </svg>
      </figure>
      <Container className="pt-lg-4">
        <Row className="g-4 g-xxl-5">
          <Col lg={7} className="position-relative mx-auto text-center">
            <div className="d-flex justify-content-center mb-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots pb-0 mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Our Clients
                  </li>
                </ol>
              </nav>
            </div>
            <h1 className="mb-3">Trusted by Industry Leaders</h1>
            <p>
              For over 20 years, Seng Heng has built long-standing partnerships with leading operators and contractors across the oil &amp; gas industry in East Malaysia, Labuan, and Brunei.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
