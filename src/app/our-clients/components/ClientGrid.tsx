import petrosImg from '@/assets/images/client/petros.png'
import chemsainImg from '@/assets/images/client/chemsain.png'
import dialogImg from '@/assets/images/client/dialog.png'
import skomImg from '@/assets/images/client/skom.png'
import petronasImg from '@/assets/images/client/petronas.png'
import hgisImg from '@/assets/images/client/hgis.png'
import dayangImg from '@/assets/images/client/dayang.png'
import envirosImg from '@/assets/images/client/enviros.png'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const clients = [
  { image: petrosImg, name: 'Petros', sector: 'Oil & Gas Operator' },
  { image: dialogImg, name: 'Dialog', sector: 'Integrated Oil Services' },
  { image: petronasImg, name: 'Petronas', sector: 'National Oil Corporation' },
  { image: dayangImg, name: 'Dayang DESB', sector: 'Offshore Hook-Up & Commissioning', imgStyle: { maxHeight: 65, maxWidth: 200, width: 'auto' } },
  { image: envirosImg, name: 'Enviros', sector: 'Environmental Services', imgStyle: { maxHeight: 90, maxWidth: 280, width: 'auto' } },
  { image: chemsainImg, name: 'Chemsain', sector: 'Marine & Offshore' },
  { image: skomImg, name: 'SKOM', sector: 'Offshore Support' },
  { image: hgisImg, name: 'HGIS', sector: 'Oil & Gas Services' },
]

const ClientGrid = () => {
  return (
    <section className="pt-5">
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
                  <Image src={client.image} alt={client.name} className="grayscale" style={client.imgStyle ?? { maxHeight: 45, maxWidth: 150, width: 'auto' }} />
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
