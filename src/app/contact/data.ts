import { BsFacebook } from 'react-icons/bs'
import type { FollowUsType, LocationType, WorkType } from './types'
import marineImg from '@/assets/images/services/01.jpg'
import logisticsImg from '@/assets/images/services/02.jpg'
import equipmentImg from '@/assets/images/services/structure.jpg'
import logoIcon from '@/assets/images/logo-icon.svg'

export const followUsIcons: FollowUsType[] = [
  {
    icon: BsFacebook,
    variant: 'text-facebook',
  },
]

export const works: WorkType[] = [
  {
    image: marineImg,
    title: 'Marine & Offshore Operations',
    description: 'Crew transfer, pilot boats, ship chandler, and offshore support.',
  },
  {
    image: logisticsImg,
    title: 'Shipping & Forwarding',
    description: 'Customs clearance, freight, warehousing, and inland transport.',
  },
  {
    image: equipmentImg,
    title: 'Equipment Rental & Engineering',
    description: 'Generators, lifting frames, fabrication, and ship repair services.',
  },
]

export const locations: LocationType[] = [
  {
    countryName: 'Miri Headquarters',
    address: 'Miri, Sarawak, Malaysia',
    number: 'Available on request',
    image: logoIcon,
  },
]
