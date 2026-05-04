import { BsPersonArmsUp, BsArrowRepeat, BsCompass, BsBoxSeam } from 'react-icons/bs'
import { Card, Col, Container, Row } from 'react-bootstrap'

const services = [
  {
    icon: <BsPersonArmsUp size={32} />,
    title: 'Offshore Personnel Transfer',
    description:
      'Class-certified passenger and pilot boats transporting crew, technicians, and surveyors between shore facilities and offshore vessels — safely and on schedule.',
  },
  {
    icon: <BsArrowRepeat size={32} />,
    title: 'Document & Parts Delivery',
    description:
      'Secure, timely delivery of operational documents, ship spares, tools, and essential equipment to minimise vessel downtime and maintain operational continuity.',
  },
  {
    icon: <BsCompass size={32} />,
    title: 'Marine Vessel Supply',
    description:
      'Nearshore survey vessels and shallow water survey boats with experienced crews — supporting subsea survey, positioning, and offshore support operations.',
  },
  {
    icon: <BsBoxSeam size={32} />,
    title: 'Ship Chandler Services',
    description:
      'Provisions, cabin and deck stores, fuel oils, fresh water, safety equipment, and bonded stores supplied throughout Sarawak and Sabah, Malaysia.',
  },
]

const Overview = () => {
  return (
    <section className="pt-5 pb-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">What We Offer</span>
          <h2 className="mt-4 mb-0">Four Core Offshore Services</h2>
        </div>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
          {services.map((item, idx) => (
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
