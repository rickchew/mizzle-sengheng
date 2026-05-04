import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsPatchCheck } from 'react-icons/bs'

const capabilities = [
  'Sedan, SUV, and MPV options available',
  'Short-term and long-term rental packages',
  'Offshore crew and corporate personnel transport',
  'Airport and port pick-up & drop-off',
  'Experienced and licensed drivers available on request',
  'Vehicles available 24/7 for operational requirements',
  'Competitive rates for bulk or contract bookings',
]

const Benefits = () => {
  return (
    <section>
      <Container>
        <Row className="g-4 g-lg-7">
          <Col md={6}>
            <h4 className="mb-4">Dependable Transport for Every Requirement</h4>
            <p>
              Seng Heng&apos;s car rental service provides reliable transportation for offshore crews, corporate clients, and individuals based in and around Miri, Sarawak. Whether you need a vehicle for a day or an extended project deployment, we have flexible options to match.
            </p>
            <p>
              Our vehicles are well-maintained, fully insured, and available on short notice — ensuring your team stays mobile and on schedule at all times.
            </p>
          </Col>
          <Col md={6}>
            <Card className="card-body bg-light border p-md-5">
              <h4 className="mb-3">What&apos;s Included</h4>
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
