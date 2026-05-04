import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsPatchCheck } from 'react-icons/bs'

const milestones = [
  '1998 — Established as Seng Heng Speedboat Services in Miri, Sarawak',
  '2000 — Intrarise Sdn Bhd founded as a forwarding and shipping agency',
  'Early 2000s — Became a key sea transport partner for timber and shipping companies',
  'Expanded into offshore personnel transfer for the oil and gas sector',
  'Grew fleet to include passenger, pilot, survey, and landing craft vessels',
  'Built integrated services: marine ops, forwarding, equipment, and fabrication',
  'Today — Trusted by Petros, Petronas, Dialog, Dayang, and other major operators',
]

const Story = () => {
  return (
    <section>
      <Container>
        <Row className="g-4 g-lg-7">
          <Col md={6}>
            <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2 mb-4 d-inline-block">Our Story</span>
            <h3 className="mb-4">From Speedboats in Miri to an Integrated Marine Services Group</h3>
            <p>
              Seng Heng was founded in 1998 by Mr Ho Hui Seng and Ms Ting Leh Ling as a speedboat transportation company in Miri, Sarawak. From the start, the focus was on safe, reliable sea transport — initially serving the timber and plywood industries that drove Sarawak&apos;s coastal economy.
            </p>
            <p>
              In 2000, the group expanded with the launch of Intrarise Sdn Bhd — a Malaysia Royal Customs authorised forwarding and shipping agency — adding clearance, freight, and inland transport to the offering.
            </p>
            <p>
              Over the years, Seng Heng has grown to support offshore oil and gas operations, with a modern fleet of passenger, pilot, survey, and landing craft vessels, alongside warehousing, equipment rental, fabrication, and engineering services. Today, the group operates as one of Miri&apos;s most established marine and offshore services partners.
            </p>
          </Col>
          <Col md={6}>
            <Card className="card-body bg-light border p-md-5">
              <h4 className="mb-3">Key Milestones</h4>
              <ul className="list-group list-group-borderless border-0">
                {milestones.map((item, idx) => (
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

export default Story
