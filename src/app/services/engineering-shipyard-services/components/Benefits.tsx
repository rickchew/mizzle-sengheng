import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsPatchCheck } from 'react-icons/bs'

const capabilities = [
  'Class-certified welding and fabrication works',
  'Hull and structural repairs for offshore vessels',
  'Engine and mechanical overhaul services',
  'Docking, dry-docking, and afloat repairs',
  'CAD-designed custom engineering solutions',
  'FEM structural analysis for load-critical components',
  'Hydraulic A-Frame design and fabrication',
  'Aluminium and steel structure fabrication',
]

const Benefits = () => {
  return (
    <section>
      <Container>
        <Row className="g-4 g-lg-7">
          <Col md={6}>
            <h4 className="mb-4">Our Engineering Approach</h4>
            <p>
              Seng Heng's shipyard and engineering team works across the full lifecycle of a vessel — from new construction to ongoing maintenance and emergency repair. Every project is handled by experienced marine engineers and certified welders who understand the demands of offshore operations.
            </p>
            <p>
              We combine hands-on shipyard capability with engineering design tools including CAD and FEM analysis, ensuring that structural and mechanical solutions are not only practical but certified and compliant with classification society requirements.
            </p>
          </Col>
          <Col md={6}>
            <Card className="card-body bg-light border p-md-5">
              <h4 className="mb-3">Our Capabilities</h4>
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
