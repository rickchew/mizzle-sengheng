import { StaticImageData } from 'next/image'

export type VesselCategory = 'offshore' | 'passenger' | 'landing-craft'

export type VesselType = {
  name: string
  type: string
  loa: string
  description: string
  category: VesselCategory
  image: StaticImageData
  pdfFile?: string
}
