import { BsCarFront, BsPeopleFill, BsCalendarCheck, BsShieldCheck } from 'react-icons/bs'
import { Card, Col, Container, Row } from 'react-bootstrap'

const capabilities = [
  {
    icon: <BsCarFront size={32} />,
    title: 'Well-Maintained Fleet',
    description: 'Our vehicles are regularly serviced and inspected to ensure safety, comfort, and reliability for every journey.',
  },
  {
    icon: <BsPeopleFill size={32} />,
    title: 'Crew Transportation',
    description: 'Dedicated transport solutions for offshore crew, site visits, and personnel mobilisation across Miri and East Malaysia.',
  },
  {
    icon: <BsCalendarCheck size={32} />,
    title: 'Flexible Rental Terms',
    description: 'Daily, weekly, and monthly rental options available to suit short-term projects or long-term operational needs.',
  },
  {
    icon: <BsShieldCheck size={32} />,
    title: 'Fully Insured Vehicles',
    description: 'All vehicles are comprehensively insured, giving you peace of mind whether for corporate or personal use.',
  },
]

const Overview = () => {
  return (
    <section className="pt-5 pb-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">What We Offer</span>
          <h2 className="mt-4 mb-0">Our Car Rental Services</h2>
        </div>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
          {capabilities.map((item, idx) => (
            <Col key={idx}>
              <Card className="card-body bg-transparent text-center p-0 h-100">
                <span className="text-primary mb-3">{item.icon}</span>
                <h6 className="mb-2">{item.title}</h6>
                <p className="mb-0 small">{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Overview
