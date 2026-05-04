import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="pt-lg-8 pt-xl-9 pb-3">
      <Container className="pt-4 pt-lg-0">
        <div className="inner-container-small text-center mb-4 mb-lg-6">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2 mb-4 d-inline-block">Company Profile</span>
          <h1 className="mb-4">Two Decades of Marine & Offshore Service in Sarawak</h1>
          <p>
            Founded in 1998 in Miri, Sarawak, Seng Heng has grown from a speedboat transportation business into an integrated marine, shipping, and engineering services group — supporting offshore operations, customs forwarding, equipment supply, and fabrication across East Malaysia, Labuan, and Brunei.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Hero
