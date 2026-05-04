import client1Img from '@/assets/images/client/01.svg'
import client2Img from '@/assets/images/client/02.svg'
import client3Img from '@/assets/images/client/03.svg'
import client4Img from '@/assets/images/client/04.svg'
import client5Img from '@/assets/images/client/05.svg'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const clients = [
  { image: client1Img, name: 'Petros', sector: 'Oil & Gas Operator' },
  { image: client2Img, name: 'Dialog', sector: 'Integrated Oil Services' },
  { image: client3Img, name: 'Petronas', sector: 'National Oil Corporation' },
  { image: client4Img, name: 'Dayang DESB', sector: 'Offshore Hook-Up & Commissioning' },
  { image: client5Img, name: 'Enviros', sector: 'Environmental Services' },
  { image: client1Img, name: 'Cheimsain', sector: 'Marine & Offshore' },
  { image: client2Img, name: 'SK Offshore', sector: 'Offshore Support' },
  { image: client3Img, name: 'HGIS', sector: 'Oil & Gas Services' },
]

const ClientGrid = () => {
  return (
    <section>
      <Container>
        <div className="inner-container-small text-center mb-6">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">Our Partners</span>
          <h2 className="mt-4 mb-3">Companies We Work With</h2>
          <p className="mb-0">
            Seng Heng is proud to serve some of the most respected names in the oil &amp; gas and marine sectors across Sarawak, Sabah, Labuan, and Brunei.
          </p>
        </div>
        <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
          {clients.map((client, idx) => (
            <Col key={idx}>
              <div className="card card-body bg-light border-0 text-center p-4 h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="mb-3" style={{ height: 60, display: 'flex', alignItems: 'center' }}>
                  <Image src={client.image} alt={client.name} className="grayscale" style={{ maxHeight: 50, width: 'auto' }} />
                </div>
                <h6 className="mb-1">{client.name}</h6>
                <p className="small text-muted mb-0">{client.sector}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ClientGrid
