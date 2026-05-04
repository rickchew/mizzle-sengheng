import { Col, Container, Row } from 'react-bootstrap'

const steps = [
  {
    stepNumber: '01',
    title: 'Defect Report & Survey',
    description: 'We conduct an initial vessel inspection and defect survey to scope the repair works and identify all technical requirements.',
  },
  {
    stepNumber: '02',
    title: 'Engineering & Quotation',
    description: 'Our engineers prepare repair procedures, drawings if required, and a detailed cost and timeline quotation for your approval.',
  },
  {
    stepNumber: '03',
    title: 'Repair & Fabrication',
    description: 'Certified welders and technicians carry out all works to classification standards, with progress updates throughout.',
  },
  {
    stepNumber: '04',
    title: 'Inspection & Handover',
    description: 'Completed works are inspected and tested before handover with full documentation, including class certificates where applicable.',
  },
]

const Steps = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-md-6">
          <h2 className="mb-0">Our Repair Process</h2>
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
