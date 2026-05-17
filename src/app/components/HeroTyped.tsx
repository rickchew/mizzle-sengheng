'use client'
import { ReactTyped } from 'react-typed'

const HeroTyped = () => (
  <ReactTyped
    strings={['Operations', 'Forwarding', 'Equipment Supply', 'Ship Repairs']}
    className="typed"
    typeSpeed={120}
    backSpeed={60}
    loop
  />
)

export default HeroTyped
