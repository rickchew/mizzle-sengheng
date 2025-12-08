import decoration10 from '@/assets/images/elements/saas-decoration/10.png'
import decoration11 from '@/assets/images/elements/saas-decoration/11.png'
import decoration12 from '@/assets/images/elements/saas-decoration/12.png'
import decoration13 from '@/assets/images/services/valve.jpg'
import decoration14 from '@/assets/images/services/skid.jpg'
import decoration15 from '@/assets/images/services/structure.jpg'
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
                <h3 className="mb-4">Pipe and Valve Systems​</h3>
                <p>
                  We design and fabricate custom pipeline and valve systems for seamless fluid transport and control. Whether for industrial plants, oil and gas facilities, or other onshore applications, our solutions ensure durability, efficiency, and compliance with industry standards.
                  <br></br><br></br><strong>- Customized pipelines for industrial use</strong>
                  <br></br><strong>- Valve systems for fluid control and regulation</strong>
                    
                </p>
              </Col>
            </Row>
            <Row className="g-4 align-items-center mb-6">
              <Col md={6} className="order-2">
                <h3 className="mb-4">Skids​</h3>
                <p>
                  Our skids are modular, pre-fabricated units built to simplify the transportation, installation, and operation of industrial equipment. These are engineered for flexibility and ease of integration, supporting various industries with optimized workflows and cost efficiency.
                  <br></br><br></br><strong>- Pre-fabricated modular units for industrial equipment</strong>
                  <br></br><strong>- Designed for easy transportation and installation</strong>


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
                <h3 className="mb-4">Steel Structures​</h3>
                <p>
                  We specialize in the fabrication of robust steel frameworks, including handrails, platforms, extensions, and support structures. Each product is tailored to suit the specific needs of the project, ensuring safety, stability, and long-term reliability.
                  <br></br><br></br><strong>- Handrails for safety and industrial applications</strong>
                  <br></br><strong>- Structural extensions for existing frameworks</strong>
                  <br></br><strong>- Custom steel platforms for operational efficiency</strong>



                </p>
              </Col>
            </Row>
            <Row className="g-4 align-items-center mb-6">
              <Col md={6} className="order-2">
                <h3 className="mb-4">Containers and Baskets</h3>
                <p>
                  We manufacture durable containers and industrial baskets designed for heavy-duty storage and transport. These are built with precision to handle demanding environments, ensuring secure and efficient operations.



                  <br></br><br></br><strong>- Durable containers for storage and transport</strong>
                  <br></br><strong>- Industrial baskets for heavy-duty applications</strong>


                </p>
              </Col>
              <Col md={6} className="ps-md-7 order-md-2">
                <div className="bg-light p-4 rounded-3">
                  <Image alt="" src={decoration11} />
                </div>
              </Col>
            </Row>
            <Row className="g-4 align-items-center">
              <Col md={6} className="pe-md-7">
                <div className="bg-light p-4 rounded-3">
                  <Image alt="" src={decoration12} />
                </div>
              </Col>
              <Col md={6}>
                <h3 className="mb-4">Custom Fabricated Products​​</h3>
                <p>
                  Our expertise in custom fabrication allows us to design and produce bespoke metal structures to meet unique client specifications. From specialized frameworks to complex components, we provide solutions that align with customer requirements and industry standards.



                  <br></br><br></br><strong>- Engineered solutions tailored to customer specifications</strong>
                  <br></br><strong>- Includes specialized frameworks, racks, and supports</strong>



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
