import { communityLinks, quickLinks, socialMediaLinks } from '@/assets/data/footer-items'
import LogoBox from '@/components/LogoBox'
import DecorationPattern from './components/DecorationPattern'
import CreditWithLanguage from './components/CreditWithLanguage'
import decorationPattern2 from '@/assets/images/elements/decoration-pattern-2.svg'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'

const socialLinks: Record<string, string> = {
  'bg-facebook': 'https://www.facebook.com/senghengshipping',
}

const Footer1 = () => {
  return (
    <footer className="bg-dark position-relative overflow-hidden pt-6" data-bs-theme="dark">
      <DecorationPattern />

      <div className="position-absolute top-0 end-0 mt-n3 me-n4">
        <Image src={decorationPattern2} alt="" style={{ opacity: '0.05' }} />
      </div>

      <Container className="position-relative mt-5">
        <Row className="g-4 justify-content-between">
          <Col lg={3}>
            <LogoBox imageClassName="h-40px" className="me-0" />

            <p className="mt-4 mb-2">
              Discover our journey, core values, and two decades of commitment to excellence in Sarawak’s marine and offshore services sector. We provide pioneering, integrated solutions across port handling, shipping, and vessel maintenance.
            </p>
          </Col>
          <Col lg={8} xxl={7}>
            <Row className="g-4">
              <Col xs={6} md={4}>
                <h3 className="h6 mb-2 mb-md-4">Services</h3>
                <ul className="nav flex-column">
                  {quickLinks.map((item, idx) => (
                    <li key={(item.link ?? '') + idx} className="nav-item">
                      <Link className="nav-link" href={item.link ?? ''}>
                        {item.name}
                        {item.badge && <span className="badge text-bg-danger ms-2">{item.badge}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col xs={6} md={4}>
                <h3 className="h6 mb-2 mb-md-4">Quick Links</h3>
                <ul className="nav flex-column">
                  {communityLinks.map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <li key={(item.link ?? '') + idx} className="nav-item">
                        <Link className="nav-link" href={item.link ?? ''}>
                          {item.name}
                          {Icon && <Icon size={13} className="ms-2" />}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Col>
              <Col md={4}>
                <h3 className="h6 mb-2 mb-md-4">Follow Us</h3>
                <ul className="list-inline mb-0 mt-3">
                  {socialMediaLinks.map((item, idx) => {
                    const Icon = item.icon
                    const href = socialLinks[item.iconClassName] ?? '#'
                    return (
                      <li key={item.iconClassName + idx} className="list-inline-item pe-1">
                        <Link className="btn btn-xs btn-icon btn-light" href={href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                          {Icon && <Icon />}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="mt-4 mb-0" />

        <CreditWithLanguage />
      </Container>
    </footer>
  )
}

export default Footer1
