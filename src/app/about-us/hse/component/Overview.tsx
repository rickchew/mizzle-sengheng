import { BsShieldCheck, BsLifePreserver, BsTree, BsClipboardCheck } from 'react-icons/bs'
import { Card, Col, Container, Row } from 'react-bootstrap'

const pillars = [
  {
    icon: <BsLifePreserver size={32} />,
    title: 'People & Crew Safety',
    description:
      'Class-certified passenger and pilot boats, experienced captains and engineers, and trained deck crew transferring personnel safely between shore and offshore vessels.',
  },
  {
    icon: <BsShieldCheck size={32} />,
    title: 'Vessels & Equipment',
    description:
      'Ten vessels with up-to-date Ship Particulars and class certification. Rental equipment — generators, A-frames, winches, DNV containers — is class-certified before deployment.',
  },
  {
    icon: <BsTree size={32} />,
    title: 'Environment & Cargo Care',
    description:
      'Provisions, fuel oil, fresh water, and waste handling delivered with marine-environment care. Cargo is packed, lashed, and shipped with proper handling for hazardous and general goods.',
  },
  {
    icon: <BsClipboardCheck size={32} />,
    title: 'Compliance & Documentation',
    description:
      'Malaysia Royal Customs authorised forwarding agent. Inward/outward vessel clearance, crew sign on/off, work permits, and seafarer renewals handled in line with regulatory requirements.',
  },
]

const Overview = () => {
  return (
    <section className="pt-5 pb-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">Our HSE Pillars</span>
          <h2 className="mt-4 mb-0">Four Pillars Behind Every Operation</h2>
        </div>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 g-lg-5">
          {pillars.map((item, idx) => (
            <Col key={idx}>
              <Card className="card-body bg-transparent text-center p-0 h-100">
                <span className="text-primary mb-3">{item.icon}</span>
                <h6 className="mb-2">{item.title}</h6>
                <p className="mb-0 small">{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Overview
