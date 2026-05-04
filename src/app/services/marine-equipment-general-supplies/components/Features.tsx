import { BsArrowRight, BsBox2, BsLifePreserver, BsLightningCharge, BsArrowsMove } from 'react-icons/bs'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const equipmentItems = [
  {
    icon: <BsLightningCharge size={28} />,
    title: 'Power Generation',
    description:
      'Class-certified diesel generators from 10KVA to 35KVA and DNV-certified power packs, fully maintained and ready for immediate offshore deployment.',
  },
  {
    icon: <BsArrowsMove size={28} />,
    title: 'Lifting & Deck Equipment',
    description:
      'Hydraulic A-Frame systems, tugger winches, and open-tray deck equipment for lifting and material handling on platforms and support vessels.',
  },
  {
    icon: <BsBox2 size={28} />,
    title: 'DNV Containers & Offshore Baskets',
    description:
      'DNV 2.7-1 certified dry containers, reefer containers, and offshore cargo baskets for compliant storage and crane-lift transportation between sites.',
  },
  {
    icon: <BsLifePreserver size={28} />,
    title: 'Safety & Waste Management Equipment',
    description:
      'Garbage skid units and offshore rescue boats built to MARPOL and offshore safety standards — supporting compliance and emergency preparedness on every operation.',
  },
]

const Features = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">Equipment Categories</span>
          <h2 className="mt-4 mb-0">What We Supply</h2>
        </div>
        <Row className="g-4 g-lg-5">
          {equipmentItems.map((item, idx) => (
            <Col md={6} key={idx}>
              <Card className="card-body card-hover-shadow border d-flex flex-row p-4 h-100">
                <figure className="text-primary mb-0 flex-shrink-0">{item.icon}</figure>
                <div className="d-flex flex-column ms-4">
                  <h5 className="mb-3">{item.title}</h5>
                  <p className="mb-3">{item.description}</p>
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

export default Features
