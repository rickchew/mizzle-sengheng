import { Col, Container, Row } from 'react-bootstrap'

const stats = [
  { value: '25+', label: 'Years on the Water' },
  { value: '10', label: 'Vessels in Fleet' },
  { value: '5', label: 'Regions Served' },
]

const StatsStrip = () => {
  return (
    <section className="pt-0 pb-5">
      <Container>
        <div className="bg-light rounded-3 p-4 p-md-5">
          <Row className="g-4 text-center">
            {stats.map((stat, idx) => (
              <Col md={4} key={idx}>
                <h2 className="mb-1 heading-color">{stat.value}</h2>
                <p className="mb-0 small">{stat.label}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default StatsStrip
