import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsPatchCheck } from 'react-icons/bs'

const capabilities = [
  'Custom aluminium and steel structural fabrication',
  'Pipeline and valve systems for industrial applications',
  'Pre-fabricated modular skid units for easy installation',
  'DNV-standard containers and offshore cargo baskets',
  'Handrails, platforms, and structural extensions',
  'Industrial baskets for heavy-duty storage and transport',
  'Bespoke metal components to exact client specifications',
]

const Benefits = () => {
  return (
    <section>
      <Container>
        <Row className="g-4 g-lg-7">
          <Col md={6}>
            <h4 className="mb-4">Fabrication Built for Offshore Demands</h4>
            <p>
              Seng Heng&apos;s fabrication team delivers precision-built steel and aluminium structures for offshore support, industrial plants, and marine operations. Each component is designed and built to withstand the demands of East Malaysia&apos;s offshore environment.
            </p>
            <p>
              From custom pipeline systems to structural extensions and DNV-certified cargo baskets, we fabricate to specification — ensuring every product is fit for purpose, compliant with industry standards, and ready for immediate deployment.
            </p>
          </Col>
          <Col md={6}>
            <Card className="card-body bg-light border p-md-5">
              <h4 className="mb-3">Our Fabrication Capabilities</h4>
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
