import { Col, Container, Row } from 'react-bootstrap'

const steps = [
  {
    stepNumber: '01',
    title: 'Consult & Design',
    description: 'We discuss your requirements, review drawings or specifications, and propose the most suitable fabrication approach for your project.',
  },
  {
    stepNumber: '02',
    title: 'Material & Preparation',
    description: 'Materials are sourced, cut, and prepped to specification — ensuring quality inputs before fabrication work begins.',
  },
  {
    stepNumber: '03',
    title: 'Fabrication & Welding',
    description: 'Our certified fabricators and welders carry out all works to industry standards, with progress tracked throughout the build.',
  },
  {
    stepNumber: '04',
    title: 'Inspection & Delivery',
    description: 'Completed structures are inspected and tested before delivery — with full documentation provided on handover.',
  },
]

const Steps = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-md-6">
          <h2 className="mb-0">Our Fabrication Process</h2>
        </div>
        <Row className="g-4 g-lg-7">
          {steps.map((step, idx) => (
            <Col sm={6} md={3} key={idx}>
              <div className="d-flex justify-content-center align-items-center text-center flex-column">
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
