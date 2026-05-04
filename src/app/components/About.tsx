import about1 from '@/assets/images/about/01.jpg'
import about2 from '@/assets/images/about/02.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import { BsPatchCheckFill } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <section>
      <Container>
        <Row className="g-4 align-items-xl-center">
          <Col lg={7}>
            <Row className="pe-xl-5">
              <Col sm={6}>
                <Image src={about2} className="rounded" alt="Seng Heng vessel operations" />
                <div className="d-flex mt-4 gap-3">
                  <div className="bg-dark text-white rounded text-center p-3 flex-fill">
                    <span className="h2 text-white">10</span>
                    <p className="mb-0 small">Vessels in Fleet</p>
                  </div>
                  <div className="bg-primary rounded text-center p-3 flex-fill">
                    <span className="h2 text-white">1998</span>
                    <p className="mb-0 text-white small">Established Year</p>
                  </div>
                </div>
              </Col>
              <Col sm={6} className="mt-4 mt-sm-0">
                <Image src={about1} className="rounded" alt="Seng Heng marine equipment" />
              </Col>
            </Row>
          </Col>

          <Col lg={5}>
            <span className="heading-color bg-light small rounded-3 px-3 py-2">🤝 Your integrated marine partner</span>
            <h2 className="my-4">Serving Sarawak&apos;s marine &amp; offshore sector since 1998</h2>
            <p className="mb-4">
              Seng Heng provides end-to-end marine services — from offshore crew transfer and ship chandling to customs clearance, equipment rental, fabrication, and ship repairs — all under one roof in Miri, Sarawak.
            </p>

            <ul className="list-group list-group-borderless mb-4">
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsPatchCheckFill className="text-primary me-2 flex-shrink-0" />
                Class-certified vessels and offshore equipment
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsPatchCheckFill className="text-primary me-2 flex-shrink-0" />
                Serving Petros, Dialog, Petronas, Dayang DESB &amp; more
              </li>
              <li className="list-group-item heading-color d-flex mb-0 icons-center">
                <BsPatchCheckFill className="text-primary me-2 flex-shrink-0" />
                Coverage across East &amp; West Malaysia, Labuan, Brunei
              </li>
            </ul>

            <Link href="/about-us" className="btn btn-dark mb-0">
              About Us
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
