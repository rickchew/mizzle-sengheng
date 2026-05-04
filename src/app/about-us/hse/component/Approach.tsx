import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsPatchCheck } from 'react-icons/bs'

const practices = [
  'Class-certified passenger and pilot boats with regularly updated Ship Particulars',
  'Experienced captains, engineers, and deck crew with offshore-industry exposure',
  '24-hour on-call response — vessels and crew ready when operations need them',
  'Warehousing monitored by CCTV and manned 24 hours a day by security guards',
  'Class-certified rental equipment — DNV containers, generators, A-frames, winches',
  'Malaysia Royal Customs authorised clearance, crewing, and seafarer documentation',
  'Pre-mobilisation checks before crew transfers, deliveries, and equipment dispatch',
]

const Approach = () => {
  return (
    <section>
      <Container>
        <Row className="g-4 g-lg-7">
          <Col md={6}>
            <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2 mb-4 d-inline-block">Our Approach</span>
            <h3 className="mb-4">Safety Built Into the Way We Work, Not Bolted On</h3>
            <p>
              Seng Heng&apos;s approach to HSE is grounded in the realities of marine and offshore operations in East Malaysia — long sea distances, changing weather, and clients whose own teams expect zero compromise on safety. We have shaped our fleet, equipment, warehousing, and forwarding processes to meet those expectations, day in and day out.
            </p>
            <p>
              From the first call to the final delivery, we plan around the people on board, the cargo being moved, the environment we operate in, and the documentation that keeps everything compliant. That is what allows clients like Petros, Petronas, Dialog, Dayang DESB, and SK Offshore to rely on us as a long-term partner.
            </p>
            <p>
              Where formal certifications, audits, or client-specific HSE requirements apply, our team works directly with each client&apos;s HSE department to align documentation, equipment readiness, and crew briefings before mobilisation.
            </p>
          </Col>
          <Col md={6}>
            <Card className="card-body bg-light border p-md-5">
              <h4 className="mb-3">How We Operate Safely</h4>
              <ul className="list-group list-group-borderless border-0">
                {practices.map((item, idx) => (
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

export default Approach
