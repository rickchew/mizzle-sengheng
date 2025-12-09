import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="pt-lg-8 pt-xl-9 pb-3">
      <Container className="pt-4 pt-lg-0">
        <div className="inner-container-small text-center mb-4 mb-lg-6">
          <h1 className="mb-4">Marine & Offshore Operations</h1>
          <p>Safe, reliable transport and operational support for offshore and marine activities, ensuring personnel, supplies, and services are delivered efficiently and on schedule.</p>
        </div>
        {/* <div className="d-flex justify-content-center align-items-center gap-2 gap-sm-4">
          <div className="icon-md text-center shadow-sm bg-white rounded-circle flex-shrink-0 d-none d-md-block">
            <Image alt="" src={gicon} className="w-20px" />
          </div>
          <div className="icon-lg text-center shadow-sm bg-white rounded-circle flex-shrink-0 d-none d-sm-block">
            <Image alt="" src={mailchimp} className="w-30px" />
          </div>
          <div className="icon-xl text-center shadow-sm bg-white rounded-circle flex-shrink-0">
            <Image alt="" src={slack} className="w-50px" />
          </div>
          <div className="icon-xxl text-center shadow-sm bg-white rounded-circle flex-shrink-0 btn-ripple" style={{ lineHeight: '6.8rem' }}>
            <Image alt="" src={logoIcon} className="w-80px" />
          </div>
          <div className="icon-xl text-center shadow-sm bg-white rounded-circle flex-shrink-0">
            <Image alt="" src={dropbox} className="w-50px" />
          </div>
          <div className="icon-lg text-center shadow-sm bg-white rounded-circle flex-shrink-0 d-none d-sm-block">
            <Image alt="" src={webflow} className="w-30px" />
          </div>
          <div className="icon-md text-center shadow-sm bg-white rounded-circle flex-shrink-0 d-none d-md-block">
            <Image alt="" src={reddit} className="w-20px" />
          </div>
        </div> */}
      </Container>
    </section>
  )
}

export default Hero
