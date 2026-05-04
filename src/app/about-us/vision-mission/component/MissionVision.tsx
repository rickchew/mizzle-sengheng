import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import { BsBullseye, BsTrophy } from 'react-icons/bs'

const MissionVision = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={11} className="mx-auto">
            <Row className="g-4 g-lg-6">
              <Col xl={5}>
                <h3>
                  A trusted marine and offshore service partner rooted in <span className="text-primary">Miri, Sarawak</span>, serving Borneo and beyond.
                </h3>
              </Col>

              <Col md={6} xl={3}>
                <div className="bg-light rounded p-4 overflow-hidden">
                  <h6 className="mb-5 mb-sm-8">Since</h6>
                  <div className="display-1 text-primary text-end mb-n5 mb-md-n6 me-n4">1998</div>
                </div>
              </Col>

              <Col md={6} xl={4}>
                <h6 className="fw-semibold mb-5">Over 25 years on the water</h6>

                <Accordion defaultActiveKey="0" className="accordion-icon accordion-border-bottom">
                  <AccordionItem eventKey="0" className="mb-3">
                    <AccordionHeader as={'span'}>
                      <BsBullseye className="text-primary me-2" />
                      <span className="fw-semibold"> Our Mission</span>
                    </AccordionHeader>

                    <AccordionBody className="pb-0">
                      To deliver safe, reliable, and integrated marine, offshore, and engineering services that keep our clients&apos; operations
                      moving across Sarawak, Sabah, East &amp; West Malaysia, Labuan, and Brunei — minimizing downtime through experienced crew,
                      class-certified equipment, and round-the-clock readiness.
                    </AccordionBody>
                  </AccordionItem>

                  <AccordionItem eventKey="1" className="mb-3">
                    <AccordionHeader as={'span'}>
                      <BsTrophy className="text-primary fw-semibold me-2" />
                      <span className="fw-semibold">Our Vision</span>
                    </AccordionHeader>

                    <AccordionBody className="pb-0">
                      To be the most trusted marine and offshore service partner in East Malaysia and Borneo — recognized for safety, response
                      readiness, and a one-stop capability that brings marine operations, forwarding, equipment rental, and engineering support
                      under a single roof.
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MissionVision
