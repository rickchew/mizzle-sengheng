import { bulbIcon, robotIcon, technologyIcon, wifiIcon } from '@/assets/data/icons'
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

const CoreValues = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 align-items-center">
          <Col lg={6}>
            <Row className="g-xl-5">
              <Col md={6}>
                <Card className="card-body bg-light p-4 mt-5">
                  <figure className="text-primary mb-3 flex-shrink-0">{robotIcon}</figure>
                  <h6>Safety First</h6>
                  <p className="mb-0">Class-certified vessels and equipment, experienced crew, and 24-hour operational readiness.</p>
                </Card>
                <Card className="card-body bg-light p-4 mt-5">
                  <figure className="text-primary mb-3 flex-shrink-0">{bulbIcon}</figure>
                  <h6>Local Knowledge</h6>
                  <p className="mb-0">Two decades of working in Sarawak, Sabah, Labuan, and Brunei waters — we know the routes, ports, and people.</p>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="card-body bg-light p-4">
                  <figure className="text-primary mb-3 flex-shrink-0">{technologyIcon}</figure>
                  <h6>Integrated Service</h6>
                  <p className="mb-0">Marine operations, forwarding, equipment rental, and engineering support under one roof.</p>
                </Card>
                <Card className="card-body bg-light p-4 mt-5">
                  <figure className="text-primary mb-3 flex-shrink-0">{wifiIcon}</figure>
                  <h6>Reliability</h6>
                  <p className="mb-0">Timely delivery of crew, parts, and documents — keeping client operations moving with minimal downtime.</p>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="ps-xl-7">
            <h2 className="mb-4">Our Core Values</h2>
            <p>
              Seng Heng Shipping has built its reputation on doing the basics right: safe vessels, reliable schedules, and a team that picks up the
              phone when offshore operations need support.
            </p>
            <p>
              From offshore personnel transfer and ship chandler services to customs clearance, warehousing, and equipment rental, our integrated
              capability means clients deal with one trusted partner rather than juggling multiple vendors.
            </p>
            <p className="mb-4">
              That&apos;s how we&apos;ve served Petros, Dialog, Petronas, Dayang DESB, SK Offshore, and others — by treating every shipment, every
              transfer, and every survey vessel charter as mission-critical.
            </p>
            <Link className="btn btn-dark me-3 mb-0" href="/services">
              Explore services
            </Link>
            <Link className="icon-link icon-link-hover" href="/contact">
              Contact our team
              <BsArrowRight className="bi" />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CoreValues
