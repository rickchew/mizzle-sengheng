import { BsWater, BsBoxSeam, BsGear, BsTools, BsWrench } from 'react-icons/bs'

import client1Img from '@/assets/images/client/petros.png'
import client2Img from '@/assets/images/client/dialog.png'
import client3Img from '@/assets/images/client/petronas.png'
import client4Img from '@/assets/images/client/dayang.png'
import client5Img from '@/assets/images/client/enviros.png'
import client6Img from '@/assets/images/client/chemsain.png'
import client7Img from '@/assets/images/client/skom.png'
import client8Img from '@/assets/images/client/hgis.png'
import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'

import { UserType } from '@/types/user'
import { ClientType, ServiceType, TestimonialType } from './types'

export const clientData: ClientType[] = [
  { image: client1Img, name: 'Petros' },
  { image: client2Img, name: 'Dialog' },
  { image: client3Img, name: 'Petronas' },
  { image: client4Img, name: 'Dayang DESB' },
  { image: client5Img, name: 'Enviros' },
  { image: client6Img, name: 'Chemsain' },
  { image: client7Img, name: 'SKOM' },
  { image: client8Img, name: 'HGIS' },
]

export const services: ServiceType[] = [
  {
    title: 'Marine & Offshore Operations',
    description: 'Crew transfer, pilot boats, survey vessels, and ship chandler services across Sarawak, Sabah, Labuan, and Brunei.',
    icon: BsWater,
    url: '/services/marine-offshore-operations',
  },
  {
    title: 'Shipping & Forwarding',
    description: 'Customs clearance, air/sea freight, inland transport, warehousing, and tug & barge services.',
    icon: BsBoxSeam,
    url: '/services/logistics-transport-solutions',
  },
  {
    title: 'Equipment Rental & Supply',
    description: 'Class-certified generators, hydraulic frames, tugger winches, DNV containers, and offshore equipment.',
    icon: BsTools,
    url: '/services/marine-equipment-general-supplies',
  },
  {
    title: 'Ship Repairs',
    description: 'Comprehensive ship repair and maintenance services to keep your fleet operational and seaworthy.',
    icon: BsWrench,
    url: '/services/engineering-shipyard-services',
  },
]

export const userData: UserType[] = [
  {
    id: '1',
    avatar: avatar3,
    firstName: 'Nix',
    lastName: 'Maxwell',
  },
  {
    id: '2',
    avatar: avatar1,
    firstName: 'Dennis',
    lastName: 'Barrett',
  },
  {
    id: '3',
    avatar: avatar2,
    firstName: 'Nix',
    lastName: 'Maxwell',
  },
  {
    id: '4',
    avatar: avatar5,
    firstName: 'Carolyn',
    lastName: 'Ortiz',
  },
]

export const testimonials: TestimonialType[] = [
  {
    user: userData[0],
    comment: "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
    rating: 4.5,
  },
  {
    user: userData[1],
    comment: "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
    rating: 4,
  },

  {
    user: userData[2],
    comment: 'Stackbros helped us create a stunning website that reflects our brand perfectly.',
    rating: 5,
  },
  {
    user: userData[3],
    comment: 'I highly recommend Mizzle to anyone looking for a high-quality Bootstrap theme.',
    rating: 4.5,
  },
]
