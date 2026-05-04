'use client'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'

const stats = [
  { end: 25, suffix: '+', label: 'Years of Operations' },
  { end: 24, suffix: '/7', label: 'On-Call Marine Response' },
  { end: 30, suffix: 'k sqft', label: 'CCTV-Monitored Warehouse' },
  { end: 10, suffix: '', label: 'Class-Certified Vessels' },
]

const Stats = () => {
  return (
    <section className="bg-light">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <h2 className="mb-0">By the Numbers</h2>
        </div>
        <Row className="g-4 g-lg-5">
          {stats.map((stat, idx) => (
            <Col sm={6} md={3} key={idx}>
              <div className="text-center">
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <h2 className="mb-0 text-primary">
                    <CountUp end={stat.end} delay={0.3} />
                  </h2>
                  {stat.suffix && <span className="h2 text-primary mb-0">{stat.suffix}</span>}
                </div>
                <p className="heading-color mb-0">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Stats
