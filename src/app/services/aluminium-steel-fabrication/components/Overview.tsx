import { BsGear, BsLayersHalf, BsBox2, BsWrench } from 'react-icons/bs'
import { Card, Col, Container, Row } from 'react-bootstrap'

const capabilities = [
  {
    icon: <BsWrench size={32} />,
    title: 'Pipe & Valve Systems',
    description:
      'Custom pipeline and valve systems for fluid transport and control — designed for industrial plants, oil and gas facilities, and offshore applications.',
  },
  {
    icon: <BsLayersHalf size={32} />,
    title: 'Steel Structures',
    description:
      'Handrails, platforms, structural extensions, and support frameworks fabricated to suit specific project requirements with long-term reliability.',
  },
  {
    icon: <BsGear size={32} />,
    title: 'Skids & Modular Units',
    description:
      'Pre-fabricated modular skid units engineered for easy transportation, installation, and integration — reducing deployment time and cost.',
  },
  {
    icon: <BsBox2 size={32} />,
    title: 'Containers & Baskets',
    description:
      'Durable containers and industrial baskets built for heavy-duty offshore storage and transport, precision-fabricated to handle demanding environments.',
  },
]

const Overview = () => {
  return (
    <section className="pt-5 pb-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">What We Fabricate</span>
          <h2 className="mt-4 mb-0">Core Fabrication Capabilities</h2>
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
