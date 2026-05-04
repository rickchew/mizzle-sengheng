import { Col, Container, Row } from 'react-bootstrap'

const steps = [
  {
    stepNumber: '01',
    title: 'Submit Your Enquiry',
    description: 'Contact us with your operational requirements — personnel count, route, vessel type needed, and deployment dates.',
  },
  {
    stepNumber: '02',
    title: 'Vessel & Crew Assignment',
    description: 'We match the right vessel and experienced crew to your requirements, confirming availability and mobilisation plan.',
  },
  {
    stepNumber: '03',
    title: 'Deployment & Operations',
    description: 'Our vessels depart on schedule. Crew transfers, deliveries, and chandler supplies are carried out safely and efficiently.',
  },
  {
    stepNumber: '04',
    title: 'Completion & Reporting',
    description: 'On completion, we provide full operational records and are ready to support your next deployment or ongoing requirements.',
  },
]

const Steps = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-md-6">
          <h2 className="mb-0">How We Support Your Operations</h2>
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
