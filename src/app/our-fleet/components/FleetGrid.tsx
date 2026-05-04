'use client'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { vessels } from '../data'
import { VesselCategory } from '../types'
import VesselCard from './VesselCard'

type FilterOption = VesselCategory | 'all'

const filters: { value: FilterOption; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'offshore', label: 'Offshore Support / Nearshore Survey' },
  { value: 'passenger', label: 'Passenger / Pilot / Survey Boats' },
  { value: 'landing-craft', label: 'Landing Craft' },
]

const FleetGrid = () => {
  const [active, setActive] = useState<FilterOption>('all')

  const filtered = active === 'all' ? vessels : vessels.filter((v) => v.category === active)

  return (
    <section className="pt-0">
      <Container>
        <div className="d-lg-flex justify-content-between align-items-center mb-4 mb-lg-5">
          <h4 className="mb-3 mb-lg-0">Fleet Category</h4>
          <ul className="nav nav-pills gap-1 nav-pills-light flex-wrap">
            {filters.map((f) => (
              <li key={f.value} className="nav-item">
                <button
                  className={`nav-link${active === f.value ? ' active' : ''}`}
                  onClick={() => setActive(f.value)}
                >
                  {f.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Row className="g-4">
          {filtered.map((vessel, idx) => (
            <Col sm={6} lg={4} key={idx}>
              <VesselCard vessel={vessel} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default FleetGrid
