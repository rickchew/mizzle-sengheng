import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsShieldCheck, BsClock, BsGeoAlt, BsPeople, BsTools, BsAward } from 'react-icons/bs'

const values = [
  {
    icon: <BsShieldCheck size={20} />,
    title: 'Safety First',
    description: 'Class-certified vessels and trained crews — safety is non-negotiable on every operation.',
  },
  {
    icon: <BsClock size={20} />,
    title: 'Operational Readiness',
    description: '24-hour on-call response — we move when our clients need us to move.',
  },
  {
    icon: <BsGeoAlt size={20} />,
    title: 'Local Expertise',
    description: 'Two decades of experience in Sarawak and Sabah waters — we know the routes, the conditions, and the requirements.',
  },
  {
    icon: <BsPeople size={20} />,
    title: 'Experienced Crew',
    description: 'Seasoned captains, engineers, and technicians with deep offshore industry knowledge.',
  },
  {
    icon: <BsTools size={20} />,
    title: 'Integrated Services',
    description: 'Marine operations, forwarding, equipment, and fabrication — all under one group.',
  },
  {
    icon: <BsAward size={20} />,
    title: 'Trusted by Industry Leaders',
    description: 'Working with Petros, Petronas, Dialog, Dayang DESB, and other major operators.',
  },
]

const Values = () => {
  return (
    <section>
      <Container>
        <Row className="g-4 g-lg-7">
          <Col md={5}>
            <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2 mb-4 d-inline-block">Why Choose Seng Heng</span>
            <h3 className="mb-4">Built on Trust, Driven by Marine Expertise</h3>
            <p>
              Seng Heng has earned its reputation by doing the basics consistently well — putting the right vessel and crew in the right place, on time, every time. Our clients return to us because we understand that offshore and marine operations leave no room for delay or compromise.
            </p>
            <p>
              From our base in Miri, we offer a complete service ecosystem — so a single point of contact connects you to vessels, customs clearance, equipment, warehousing, and engineering support whenever your operation needs it.
            </p>
          </Col>
          <Col md={7}>
            <Row className="g-4">
              {values.map((value, idx) => (
                <Col sm={6} key={idx}>
                  <Card className="card-body border h-100 p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-md bg-primary bg-opacity-10 text-primary rounded-3 flex-shrink-0 me-3">
                        {value.icon}
                      </div>
                      <h6 className="mb-0">{value.title}</h6>
                    </div>
                    <p className="mb-0 small">{value.description}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Values
