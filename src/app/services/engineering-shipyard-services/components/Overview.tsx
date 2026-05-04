import { BsGear, BsHammer, BsTools, BsWrench } from 'react-icons/bs'
import { Card, Col, Container, Row } from 'react-bootstrap'

const services = [
  {
    icon: <BsWrench size={32} />,
    title: 'Ship Repairs & Maintenance',
    description:
      'Hull repairs, engine overhauls, docking services, and routine maintenance to keep vessels safe, seaworthy, and operationally ready.',
  },
  {
    icon: <BsHammer size={32} />,
    title: 'Ship Building',
    description:
      'New vessel construction designed and built to classification society standards, tailored for offshore support, survey, and crew transfer operations.',
  },
  {
    icon: <BsGear size={32} />,
    title: 'Custom Engineering Solutions',
    description:
      'Hydraulic A-Frame systems, CAD design, and FEM structural analysis to deliver precise and certified engineering solutions for marine projects.',
  },
  {
    icon: <BsTools size={32} />,
    title: 'Welding & Steel Fabrication',
    description:
      'Certified welding, structural steel and aluminium fabrication for marine applications — handrails, decks, pipe systems, frames, and custom structures.',
  },
]

const Overview = () => {
  return (
    <section className="pb-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">What We Do</span>
          <h2 className="mt-4 mb-0">Integrated Shipyard Capabilities</h2>
        </div>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
          {services.map((service, idx) => (
            <Col key={idx}>
              <Card className="card-body bg-transparent text-center p-0 h-100">
                <span className="text-primary mb-3">{service.icon}</span>
                <h6 className="mb-2">{service.title}</h6>
                <p className="mb-0 small">{service.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Overview
