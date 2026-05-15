import { BsEnvelope, BsGeoAlt, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const ContactInfo = () => {
  return (
    <section className="py-0 mt-6">
      <Container>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          <Col>
            <Card className="card-body bg-light border-0 p-sm-4 h-100">
              <div className="mb-4">
                <BsGeoAlt size={24} className="text-primary" />
              </div>
              <h6 className="mb-3">Office Address</h6>
              <p className="small mb-0 text-muted">
                Lot 674, Ground Floor, Jalan Permaisuri, 98000 Miri, Sarawak
              </p>
            </Card>
          </Col>
          <Col>
            <Card className="card-body bg-light border-0 p-sm-4 h-100">
              <div className="mb-4">
                <BsTelephone size={24} className="text-primary" />
              </div>
              <h6 className="mb-3">Call Us</h6>
              <p className="small mb-2 text-muted">
                Mon – Fri: 8am – 5pm<br />
                Sat: 8am – 12 noon
              </p>
              <Link href="tel:+6085410096" className="heading-color text-primary-hover text-decoration-underline small d-block">
                Office: +6085-410096
              </Link>
              <Link href="tel:+60138680096" className="heading-color text-primary-hover text-decoration-underline small d-block mt-1">
                Sales: +6013-8680096
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="card-body bg-light border-0 p-sm-4 h-100">
              <div className="mb-4">
                <BsWhatsapp size={24} className="text-primary" />
              </div>
              <h6 className="mb-3">WhatsApp</h6>
              <p className="small mb-2 text-muted">Quick enquiries welcome</p>
              <Link href="https://wa.me/60138680096" className="heading-color text-primary-hover text-decoration-underline small">
                +6013-8680096
              </Link>
            </Card>
          </Col>
          <Col>
            <Card className="card-body bg-light border-0 p-sm-4 h-100">
              <div className="mb-4">
                <BsEnvelope size={24} className="text-primary" />
              </div>
              <h6 className="mb-3">Email Us</h6>
              <p className="small mb-2 text-muted">We reply within 1 business day</p>
              <Link href="mailto:senghengshipping@gmail.com" className="heading-color text-primary-hover text-decoration-underline small">
                senghengshipping@gmail.com
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactInfo
