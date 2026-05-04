import { Col, Container, Row } from 'react-bootstrap'

const steps = [
  {
    stepNumber: '01',
    title: 'Submit Your Enquiry',
    description: 'Contact us with your equipment requirements, operational location, and deployment timeline.',
  },
  {
    stepNumber: '02',
    title: 'Receive a Quotation',
    description: 'We prepare a tailored quotation with equipment specifications, availability, and rental rates.',
  },
  {
    stepNumber: '03',
    title: 'Mobilisation & Delivery',
    description: 'On confirmation, we arrange delivery and mobilisation of certified equipment to your site.',
  },
  {
    stepNumber: '04',
    title: 'On-Site Support & Return',
    description: 'Our team provides on-site support throughout the rental period and handles demobilisation upon completion.',
  },
]

const Steps = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-md-6">
          <h2 className="mb-0">How It Works</h2>
        </div>
        <Row className="g-4 g-lg-7">
          {steps.map((step, idx) => (
            <Col sm={6} md={3} key={idx}>
              <div className="d-flex justify-content-center align-items-center text-center flex-column bg-transparent">
                <div className="icon-lg bg-primary bg-opacity-10 text-primary rounded-3 fw-bold flex-shrink-0 mb-3">{step.stepNumber}</div>
                <h6>{step.title}</h6>
                <p className="small mb-0">{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Steps
