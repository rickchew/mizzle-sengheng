import { BsAirplane, BsArrowRight, BsBoxes, BsBuilding, BsFileEarmarkCheck, BsTruck, BsWater } from 'react-icons/bs'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const services = [
  {
    icon: <BsFileEarmarkCheck size={28} />,
    title: 'Customs & Immigration Clearance',
    description:
      'As a Malaysia Royal Customs authorized forwarding agent, we handle inward and outward vessel clearance, crew work permits, sign on/off arrangements, seafarer certificate applications, and vessel berthing coordination.',
  },
  {
    icon: <BsAirplane size={28} />,
    title: 'Air & Sea Freight',
    description:
      'We arrange air and sea freight for ship spares, offshore equipment, and general cargo — ensuring your critical parts arrive on time to keep vessels operational.',
  },
  {
    icon: <BsTruck size={28} />,
    title: 'Inland Transport',
    description:
      'Crew transportation, lorry cranes, mobile cranes, trailers, and other inland transport services to move personnel and equipment between shore base, port, and offshore sites.',
  },
  {
    icon: <BsBuilding size={28} />,
    title: 'Warehousing',
    description:
      'Over 30,000 sq ft of warehousing space in Miri, Sarawak for offshore equipment storage. Our facilities are monitored by CCTV and manned 24 hours a day by security personnel.',
  },
  {
    icon: <BsBoxes size={28} />,
    title: 'Packing & Moving',
    description:
      'Complete packing and moving services for equipment and general cargo, combined with freight forwarding — a true one-stop solution from origin to destination.',
  },
  {
    icon: <BsWater size={28} />,
    title: 'Tug & Barge Services',
    description:
      'We own and operate a fleet of tugboats and barges providing cost-efficient sea transportation for general cargo, containers, machinery, heavy equipment, and vehicles between East and West Malaysia, Labuan, and Brunei.',
  },
]

const Services = () => {
  return (
    <section className="pt-5">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">What We Offer</span>
          <h2 className="mt-4 mb-0">Six Core Logistics Capabilities</h2>
        </div>
        <Row className="g-4 g-lg-5">
          {services.map((service, idx) => (
            <Col md={6} key={idx}>
              <Card className="card-body card-hover-shadow border d-flex flex-row p-4 h-100">
                <figure className="text-primary mb-0 flex-shrink-0">{service.icon}</figure>
                <div className="d-flex flex-column ms-4">
                  <h5 className="mb-3">{service.title}</h5>
                  <p className="mb-3">{service.description}</p>
                  <Link className="icon-link icon-link-hover stretched-link mt-auto" href="/contact">
                    Enquire now
                    <BsArrowRight />
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Services
