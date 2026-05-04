import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="pt-lg-8 pt-xl-9 pb-3">
      <Container className="pt-4 pt-lg-0">
        <div className="inner-container-small text-center mb-4 mb-lg-6">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2 mb-4 d-inline-block">Health, Safety &amp; Environment</span>
          <h1 className="mb-4">HSE Is the Way We Run Every Operation</h1>
          <p>
            For more than two decades, Seng Heng has built its marine and offshore services around one principle — every crew member, every cargo, and every vessel returns safely. Class-certified vessels, experienced crew, secured warehousing, and customs-compliant forwarding form the backbone of how we work across Sarawak, Sabah, Labuan, and Brunei.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Hero
