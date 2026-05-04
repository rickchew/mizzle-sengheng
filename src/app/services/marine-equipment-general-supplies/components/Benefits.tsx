import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsPatchCheck } from 'react-icons/bs'

const Benefits = () => {
  const benefits = [
    'DNV 2.7-1 and class-certified equipment',
    'Flexible short-term and long-term rental options',
    'Fully maintained and inspection-ready units',
    'Fast mobilisation across East Malaysia, Labuan & Brunei',
    'Experienced team with 20+ years in offshore supply',
    'Competitive rates with transparent pricing',
  ]

  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 g-lg-7">
          <Col md={6}>
            <h4 className="mb-4">Our Approach</h4>
            <p>
              Seng Heng maintains a ready inventory of certified offshore equipment so our clients avoid the delays and costs associated with procurement. Whether you need a single generator for a short mobilisation or a full package of deck equipment for an extended campaign, we can fulfil your requirements quickly.
            </p>
            <p>
              Every piece of equipment in our fleet is regularly inspected, maintained to manufacturer standards, and available with documentation for offshore regulatory compliance. We work closely with clients at the planning stage to ensure the right equipment is on-site when needed.
            </p>
          </Col>
          <Col md={6}>
            <Card className="card-body bg-light border p-md-5">
              <h4 className="mb-3">Why choose Seng Heng</h4>
              <ul className="list-group list-group-borderless border-0">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="list-group-item heading-color d-flex mb-0 icons-center">
                    <BsPatchCheck className="text-primary me-2 flex-shrink-0" />
                    {benefit}
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
