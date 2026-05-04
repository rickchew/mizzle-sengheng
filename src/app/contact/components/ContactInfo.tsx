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
                {/* TODO: Confirm actual office address */}
                Miri, Sarawak, Malaysia
              </p>
            </Card>
          </Col>
          <Col>
            <Card className="card-body bg-light border-0 p-sm-4 h-100">
              <div className="mb-4">
                <BsTelephone size={24} className="text-primary" />
              </div>
              <h6 className="mb-3">Call Us</h6>
              <p className="small mb-2 text-muted">Mon – Fri, 8am – 5pm</p>
              <Link href="tel:+60XXXXXXXXXX" className="heading-color text-primary-hover text-decoration-underline small">
                {/* TODO: Confirm actual phone number */}
                +60 XX-XXXX XXXX
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
              <Link href="https://wa.me/60XXXXXXXXXX" className="heading-color text-primary-hover text-decoration-underline small">
                {/* TODO: Confirm WhatsApp number */}
                Message Us
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
              <Link href="mailto:info@sengheng.com" className="heading-color text-primary-hover text-decoration-underline small">
                info@sengheng.com
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactInfo
