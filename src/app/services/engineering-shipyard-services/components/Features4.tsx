import decoration12 from '@/assets/images/elements/saas-decoration/12.png'
import decoration13 from '@/assets/images/services/valve.jpg'
import decoration14 from '@/assets/images/services/skid.jpg'
import decoration15 from '@/assets/images/services/structure.jpg'
import decoration16 from '@/assets/images/services/basket.jpg'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
const Features = () => {
  return (
    <section className="pt-xl-0">
      <Container className="pt-xl-6">
        <div className="inner-container-small text-center mb-4 mb-sm-7">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">Our Services</span>
          {/* <h2 className="mb-0 mt-3">The heart of our solution</h2> */}
        </div>
        <Row>
          <Col lg={10} className=" mx-auto">
            <Row className="g-4 align-items-center mb-6">
              <Col md={6} className="pe-md-7">
                <div className="bg-light p-4 rounded-3">
                  <Image alt="" src={decoration13} />
                </div>
              </Col>
              <Col md={6}>
                <h3 className="mb-4">Aluminium & Steel Fabrication​</h3>
                <p>
                  We provide tailored engineering and fabrication solutions, including pipe and valve systems, modular skids, steel structures, containers, baskets, and custom-fabricated products.
                </p>
              </Col>
            </Row>
            <Row className="g-4 align-items-center mb-6">
              <Col md={6} className="order-2">
                <h3 className="mb-4">Customised Engineering Solutions</h3>
                <p>
                  Our services include hydraulic A-Frame systems, CAD design, and FEM analysis to ensure precise and reliable engineering solutions for shipbuilding, repairs, and onshore/offshore projects.
                </p>
              </Col>
              <Col md={6} className="ps-md-7 order-md-2">
                <div className="bg-light p-4 rounded-3">
                  <Image alt="" src={decoration14} />
                </div>
              </Col>
            </Row>
            <Row className="g-4 align-items-center">
              <Col md={6} className="pe-md-7">
                <div className="bg-light p-4 rounded-3">
                  <Image alt="" src={decoration15} />
                </div>
              </Col>
              <Col md={6}>
                <h3 className="mb-4">Ship Building & Repair​</h3>
                <p>
                  We specialize in new vessel construction, hull repairs, engine overhauls, docking services, and routine maintenance, ensuring vessels remain safe, durable, and fully operational.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
