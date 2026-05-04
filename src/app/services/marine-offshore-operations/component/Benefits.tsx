import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsPatchCheck } from 'react-icons/bs'

const capabilities = [
  '20+ years of offshore personnel transfer experience',
  'Class-certified passenger and pilot boats',
  'Experienced crews familiar with Sarawak & Sabah waters',
  'Secure and timely document and parts delivery',
  'Ship chandler supply throughout East Malaysia',
  'Nearshore survey and shallow water survey vessel support',
  '24-hour operational readiness and on-call response',
]

const Benefits = () => {
  return (
    <section>
      <Container>
        <Row className="g-4 g-lg-7">
          <Col md={6}>
            <h4 className="mb-4">20+ Years Supporting Offshore Operations</h4>
            <p>
              Seng Heng has been providing marine and offshore operational support since 1998. Our team understands the pace and demands of offshore projects — personnel need to move safely, documents need to arrive on time, and vessels need to be provisioned without delay.
            </p>
            <p>
              Operating across Sarawak, Sabah, East and West Malaysia, Labuan, and Brunei, we are positioned to support your operations wherever they take place — with the right vessels, experienced crews, and reliable logistics behind every deployment.
            </p>
          </Col>
          <Col md={6}>
            <Card className="card-body bg-light border p-md-5">
              <h4 className="mb-3">Why Choose Seng Heng</h4>
              <ul className="list-group list-group-borderless border-0">
                {capabilities.map((item, idx) => (
                  <li key={idx} className="list-group-item heading-color d-flex mb-0 icons-center">
                    <BsPatchCheck className="text-primary me-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Benefits
