import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsShieldCheck, BsClock, BsPersonCheck, BsBoxSeam, BsCameraVideo, BsFileEarmarkText } from 'react-icons/bs'

const practices = [
  {
    icon: <BsShieldCheck size={20} />,
    title: 'Class Certification',
    description: 'Vessels and rental equipment held to class standards, with Ship Particulars and inspections kept current.',
  },
  {
    icon: <BsPersonCheck size={20} />,
    title: 'Experienced Crew',
    description: 'Long-serving captains, engineers, and deck crew with offshore industry exposure and local sea knowledge.',
  },
  {
    icon: <BsClock size={20} />,
    title: '24-Hour Response',
    description: 'On-call shuttling, supply boat services, and crew transfers — ready when client operations need them.',
  },
  {
    icon: <BsCameraVideo size={20} />,
    title: 'Secured Warehousing',
    description: '30,000 sqft+ of warehouse space in Miri monitored by CCTV and manned around the clock by security guards.',
  },
  {
    icon: <BsBoxSeam size={20} />,
    title: 'Safe Cargo Handling',
    description: 'Packing, lashing, and inland transport handled with care for general, hazardous, and oversized cargo.',
  },
  {
    icon: <BsFileEarmarkText size={20} />,
    title: 'Regulatory Compliance',
    description: 'Royal Customs authorised forwarding, vessel clearance, crew sign on/off, work permits, and seafarer documentation.',
  },
]

const Practices = () => {
  return (
    <section>
      <Container>
        <Row className="g-4 g-lg-7">
          <Col md={5}>
            <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2 mb-4 d-inline-block">Daily Practices</span>
            <h3 className="mb-4">The Habits Behind Safe, Reliable Operations</h3>
            <p>
              Good HSE outcomes don&apos;t come from a single policy document — they come from daily habits across the fleet, the warehouse, the office, and every crew member on shift. The practices below are how Seng Heng has kept operations running safely for major operators in East Malaysia for more than 25 years.
            </p>
            <p>
              We continuously align with each client&apos;s HSE requirements and welcome audits, joint briefings, and operational reviews to keep standards sharp.
            </p>
          </Col>
          <Col md={7}>
            <Row className="g-4">
              {practices.map((item, idx) => (
                <Col sm={6} key={idx}>
                  <Card className="card-body border h-100 p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-md bg-primary bg-opacity-10 text-primary rounded-3 flex-shrink-0 me-3">
                        {item.icon}
                      </div>
                      <h6 className="mb-0">{item.title}</h6>
                    </div>
                    <p className="mb-0 small">{item.description}</p>
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

export default Practices
