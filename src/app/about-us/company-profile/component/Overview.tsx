import { BsBuilding, BsCompass, BsTruck, BsGlobe } from 'react-icons/bs'
import { Card, Col, Container, Row } from 'react-bootstrap'

const entities = [
  {
    icon: <BsBuilding size={32} />,
    title: 'Seng Heng Shipping (M) Sdn Bhd',
    description:
      'Parent company providing marine and offshore operational support, vessel chartering, ship chandler services, and integrated logistics across Sarawak and Sabah.',
  },
  {
    icon: <BsCompass size={32} />,
    title: 'Seng Heng Speedboat Services',
    description:
      'Wholly-owned subsidiary operating our fleet of passenger, pilot, and survey boats — the foundation of our marine business since 1998.',
  },
  {
    icon: <BsTruck size={32} />,
    title: 'Intrarise Sdn Bhd',
    description:
      'Forwarding and shipping agency established in 2000 — Malaysia Royal Customs authorised agent handling clearance, freight, and inland transport.',
  },
  {
    icon: <BsGlobe size={32} />,
    title: 'Integrated Coverage',
    description:
      'Operating across Sarawak, Sabah, East and West Malaysia, Labuan, and Brunei — with a combined workforce, fleet, and shore base ready to support your operations.',
  },
]

const Overview = () => {
  return (
    <section className="pt-5 pb-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">Group of Companies</span>
          <h2 className="mt-4 mb-0">One Group, Three Operating Entities</h2>
        </div>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
          {entities.map((item, idx) => (
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
