import GlightBox from '@/components/GlightBox'
import img1 from '@/assets/images/services/01.jpg'
import img2 from '@/assets/images/services/02.jpg'
import img3 from '@/assets/images/services/03.jpg'
import img4 from '@/assets/images/services/04.jpg'
import img5 from '@/assets/images/services/05.jpg'
import img6 from '@/assets/images/services/06.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'

const Gallery = () => {
  return (
    <section className="py-6">
      <Container>
        <Row className="g-4 g-xl-6">
          <Col sm={4}>
            <GlightBox href={img1.src} data-glightbox data-gallery="engineering-gallery">
              <Image src={img1} className="rounded-3 w-100" alt="Engineering & shipyard work 1" />
            </GlightBox>
          </Col>
          <Col sm={4}>
            <GlightBox href={img2.src} data-glightbox data-gallery="engineering-gallery">
              <Image src={img2} className="rounded-3 w-100 mt-sm-6" alt="Engineering & shipyard work 2" />
            </GlightBox>
          </Col>
          <Col sm={4}>
            <GlightBox href={img3.src} data-glightbox data-gallery="engineering-gallery">
              <Image src={img3} className="rounded-3 w-100" alt="Engineering & shipyard work 3" />
            </GlightBox>
          </Col>
          <Col sm={4}>
            <GlightBox href={img4.src} data-glightbox data-gallery="engineering-gallery">
              <Image src={img4} className="rounded-3 w-100" alt="Engineering & shipyard work 4" />
            </GlightBox>
          </Col>
          <Col sm={4}>
            <GlightBox href={img5.src} data-glightbox data-gallery="engineering-gallery">
              <Image src={img5} className="rounded-3 w-100 mt-sm-6" alt="Engineering & shipyard work 5" />
            </GlightBox>
          </Col>
          <Col sm={4}>
            <GlightBox href={img6.src} data-glightbox data-gallery="engineering-gallery">
              <Image src={img6} className="rounded-3 w-100" alt="Engineering & shipyard work 6" />
            </GlightBox>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Gallery
