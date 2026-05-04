import { VesselType } from './types'

import img01 from '@/assets/images/bg/01.jpg'
import img02 from '@/assets/images/bg/02.jpg'
import img03 from '@/assets/images/bg/03.jpg'
import img04 from '@/assets/images/bg/04.jpg'
import img05 from '@/assets/images/bg/05.jpg'
import img06 from '@/assets/images/bg/06.jpg'
import img07 from '@/assets/images/bg/07.jpg'
import img08 from '@/assets/images/bg/08.jpg'
import img09 from '@/assets/images/bg/09.jpg'
import img10 from '@/assets/images/bg/10.jpg'

export const vessels: VesselType[] = [
  {
    name: 'MV. Mega Maria',
    type: 'Offshore Support / Nearshore Survey Vessel',
    loa: '34m',
    description: 'Offshore support and nearshore survey deployment support.',
    category: 'offshore',
    image: img01,
    pdfFile: 'Mega Maria (Updated 23 Jan 2025).pdf',
  },
  {
    name: 'Mega Hope',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '19.1m',
    description: 'Passenger and offshore transfer support.',
    category: 'passenger',
    image: img02,
    pdfFile: 'Mega Hope _Ship Particular_updated 04.09.25.pdf',
  },
  {
    name: 'Mega Success',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '18.1m',
    description: 'Crew transfer and pilot/survey support operations.',
    category: 'passenger',
    image: img03,
    pdfFile: 'Mega Success (Updated 13 March 2024).pdf',
  },
  {
    name: 'New Boat',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '17.5m',
    description: 'Flexible vessel for transfer and survey support assignments.',
    category: 'passenger',
    image: img04,
    pdfFile: 'New Boat-Ship Particular (Updated 31 December 2025).pdf',
  },
  {
    name: 'Seng Heng Awesome',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '15.8m',
    description: 'Fast transfer support for offshore crews and logistics.',
    category: 'passenger',
    image: img05,
    pdfFile: 'Ship Particular Seng Heng Awesome (updated 06 Sept 2025).pdf',
  },
  {
    name: 'Seng Heng Elite',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '15m',
    description: 'Pilot and personnel movement support.',
    category: 'passenger',
    image: img06,
    pdfFile: 'SengHeng Elite (Updated 10 October 2024).pdf',
  },
  {
    name: 'Seng Heng Best',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '14m',
    description: 'Nearshore crew and light support transfer.',
    category: 'passenger',
    image: img07,
    pdfFile: 'Ship Particular Seng Heng Best (updated 06 Sept 2025).pdf',
  },
  {
    name: 'Seng Heng Glorious',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '13.65m',
    description: 'Coastal transfer and operational support.',
    category: 'passenger',
    image: img08,
    pdfFile: 'SengHeng Glorious (updated 24 oct 2025).pdf',
  },
  {
    name: 'Ever Glory',
    type: 'Passenger / Pilot / Survey Boat',
    loa: '11.8m',
    description: 'Short-route marine transport support.',
    category: 'passenger',
    image: img09,
    pdfFile: 'Ever Glory (updated 04 March 2023).pdf',
  },
  {
    name: 'Seng Heng Progress',
    type: 'Landing Craft',
    loa: '19.5m',
    description: 'Landing craft support for cargo and deployment requirements.',
    category: 'landing-craft',
    image: img10,
    pdfFile: 'LCT SengHeng Progress (updated 10 Sep 2024).pdf',
  },
]
