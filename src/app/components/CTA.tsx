'use client'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { BsEnvelope, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs'

const CTA = () => {
  return (
    <section className="position-relative z-index-2 py-0 mb-n7">
      <Container className="position-relative">
        <div className="bg-primary rounded position-relative overflow-hidden p-4 p-sm-5">
          <Row className="g-4 position-relative">
            <Col lg={6}>
              <h3 className="text-white">Ready to work with a trusted marine partner?</h3>
              <p className="text-white-50 mb-4">
                Whether you need a vessel for offshore operations, customs clearance, equipment rental, or fabrication — our team is ready to support.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Link href="/contact" className="btn btn-dark">
                  Contact Us
                </Link>
                <Link href="/our-fleet" className="btn btn-outline-light">
                  View Our Fleet
                </Link>
              </div>
            </Col>

            <Col lg={5} xl={4} className="ms-auto text-lg-end">
              <ul className="list-group list-group-borderless mb-0">
                <li className="list-group-item mb-0">
                  <Link href="tel:+60" className="text-white fw-normal icons-center">
                    <BsTelephoneFill className="me-2" /> Call Us
                  </Link>
                </li>
                <li className="list-group-item mb-0">
                  <Link href="https://wa.me/60" className="text-white fw-normal icons-center">
                    <BsWhatsapp className="me-2" /> WhatsApp
                  </Link>
                </li>
                <li className="list-group-item mb-0">
                  <Link href="mailto:info@sengheng.com" className="text-white fw-normal icons-center">
                    <BsEnvelope className="me-2" /> info@sengheng.com
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default CTA
