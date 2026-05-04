import { Col, Container, Row } from 'react-bootstrap'

const steps = [
  {
    stepNumber: '01',
    title: 'Submit Your Enquiry',
    description: 'Contact us with your rental dates, vehicle preference, and any specific requirements such as a driver or airport pick-up.',
  },
  {
    stepNumber: '02',
    title: 'Receive a Quote',
    description: 'We&apos;ll provide a clear, competitive quote based on your rental duration, vehicle type, and any additional services needed.',
  },
  {
    stepNumber: '03',
    title: 'Confirm & Book',
    description: 'Confirm your booking and we&apos;ll arrange the vehicle and any logistics — ready for your required date and time.',
  },
  {
    stepNumber: '04',
    title: 'Pick Up & Go',
    description: 'Collect your vehicle or have it delivered to your location. Our team is on hand throughout the rental period for any support.',
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
