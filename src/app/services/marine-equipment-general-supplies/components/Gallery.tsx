'use client'
import { useEffect } from 'react'
import { initIsotope } from '@/helpers/init-isotope'
import img1 from '@/assets/images/equipment/01.jpg'
import img3 from '@/assets/images/equipment/03.jpg'
import img4 from '@/assets/images/equipment/04.jpg'
import img5 from '@/assets/images/equipment/05.jpg'
import img6 from '@/assets/images/equipment/06.jpg'
import { Card, CardText, Container, Row } from 'react-bootstrap'
import Image from 'next/image'

const galleryItems = [
  { image: img1, title: 'Genset Skid Unit', subtitle: '104 KW diesel generator on certified lifting skid' },
  { image: img3, title: 'Hydraulic Power Pack', subtitle: 'DNV-certified container with 3.0 MT SWL rating' },
  { image: img4, title: 'Tugger Winch', subtitle: 'Heavy-duty wire rope winch for deck operations' },
  { image: img5, title: 'Equipment Mobilisation', subtitle: 'Doosan generator loaded for port delivery' },
  { image: img6, title: 'Hydraulic Power Pack (Side)', subtitle: 'Certified container unit with control panel access' },
]

const Gallery = () => {
  useEffect(() => {
    initIsotope()
  }, [])

  return (
    <section className="pt-6 pb-8">
      <Container>
        <Row className="g-4 filter-container" data-isotope='{"layoutMode": "masonry"}'>
          {galleryItems.map((item, idx) => (
            <div key={idx} className="col-sm-6 col-lg-4 grid-item">
              <Card className="card-element-hover card-metro-hover">
                <Image src={item.image} alt={item.title} />
                <div className="card-img-overlay hover-element d-flex">
                  <CardText as="div" className="mt-auto">
                    <h6 className="mb-0 text-white">{item.title}</h6>
                    <small className="text-white">{item.subtitle}</small>
                  </CardText>
                </div>
              </Card>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Gallery
