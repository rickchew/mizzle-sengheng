import { VesselType } from './types'

import imgMegaMaria from '@/assets/images/fleet/mega-maria.jpg'
import imgMegaHope from '@/assets/images/fleet/mega-hope.jpg'
import imgMegaSuccess from '@/assets/images/fleet/mega-success.jpg'
import imgSengHengAwesome from '@/assets/images/fleet/seng-heng-awesome.jpg'
import imgSengHengElite from '@/assets/images/fleet/seng-heng-elite.jpg'
import imgSengHengGlorious from '@/assets/images/fleet/seng-heng-glorious.jpg'
import imgSengHengProgress from '@/assets/images/fleet/seng-heng-progress.jpg'
import imgPlaceholderNewBoat from '@/assets/images/bg/04.jpg'
import imgPlaceholderBest from '@/assets/images/bg/07.jpg'
import imgEverGlory from '@/assets/images/fleet/ever-glory.jpg'

export const vessels: VesselType[] = [
  {
    name: 'MV. Mega Maria',
    type: 'Offshore Support / Nearshore Survey Vessel',
    loa: '34m',
    description: 'Offshore support and nearshore survey deployment support.',
    category: 'offshore',
    image: imgMegaMaria,
    pdfFile: 'Mega Maria (Updated 23 Jan 2025).pdf',
  },
  {
    name: 'Mega Hope',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '19.1m',
    description: 'Passenger and offshore transfer support.',
    category: 'passenger',
    image: imgMegaHope,
    pdfFile: 'Mega Hope _Ship Particular_updated 04.09.25.pdf',
  },
  {
    name: 'Mega Success',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '18.1m',
    description: 'Crew transfer and pilot/survey support operations.',
    category: 'passenger',
    image: imgMegaSuccess,
    pdfFile: 'Mega Success (Updated 13 March 2024).pdf',
  },
  {
    name: 'New Boat',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '17.5m',
    description: 'Flexible vessel for transfer and survey support assignments.',
    category: 'passenger',
    image: imgPlaceholderNewBoat,
    pdfFile: 'New Boat-Ship Particular (Updated 31 December 2025).pdf',
  },
  {
    name: 'Seng Heng Awesome',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '15.8m',
    description: 'Fast transfer support for offshore crews and logistics.',
    category: 'passenger',
    image: imgSengHengAwesome,
    pdfFile: 'Ship Particular Seng Heng Awesome (updated 06 Sept 2025).pdf',
  },
  {
    name: 'Seng Heng Elite',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '15m',
    description: 'Pilot and personnel movement support.',
    category: 'passenger',
    image: imgSengHengElite,
    pdfFile: 'SengHeng Elite (Updated 10 October 2024).pdf',
  },
  {
    name: 'Seng Heng Best',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '14m',
    description: 'Nearshore crew and light support transfer.',
    category: 'passenger',
    image: imgPlaceholderBest,
    pdfFile: 'Ship Particular Seng Heng Best (updated 06 Sept 2025).pdf',
  },
  {
    name: 'Seng Heng Glorious',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '13.65m',
    description: 'Coastal transfer and operational support.',
    category: 'passenger',
    image: imgSengHengGlorious,
    pdfFile: 'SengHeng Glorious (updated 24 oct 2025).pdf',
  },
  {
    name: 'Ever Glory',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '11.8m',
    description: 'Short-route marine transport support.',
    category: 'passenger',
    image: imgEverGlory,
    pdfFile: 'Ever Glory (updated 04 March 2023).pdf',
  },
  {
    name: 'Seng Heng Progress',
    type: 'Landing Craft',
    loa: '19.5m',
    description: 'Landing craft support for cargo and deployment requirements.',
    category: 'landing-craft',
    image: imgSengHengProgress,
    pdfFile: 'LCT SengHeng Progress (updated 10 Sep 2024).pdf',
  },
]
