import { BlogType, ClientType, FeatureType, PricingPlanType } from './types'

import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'
import client6 from '@/assets/images/client/06.svg'
import client7 from '@/assets/images/client/07.svg'

import blog1 from '@/assets/images/blog/4by3/01.jpg'
import blog6 from '@/assets/images/blog/4by3/06.jpg'
import blog7 from '@/assets/images/blog/4by3/07.jpg'

import { BsArrowRepeat, BsBarChartSteps, BsBox2, BsBox2Fill, BsCupStraw, BsHourglassBottom, BsLightningChargeFill, BsPatchCheck, BsPersonArmsUp, BsRocketFill } from 'react-icons/bs'

export const clients: ClientType[] = [
  { image: client3 },
  { image: client7 },
  { image: client5 },
  { image: client4 },
  { image: client1 },
  { image: client2 },
  { image: client3 },
  { image: client6 },
]

export const features: FeatureType[] = [
  {
    title: 'Offshore Personnel Transfer',
    description: 'Transport crew and visitors safely and efficiently between shore and offshore vessels.',
    icon: BsPersonArmsUp,
  },
  {
    title: 'Delivery Documents and Parts',
    description: 'Ensure critical documents and essential parts reach vessels on time, every time.',
    icon: BsArrowRepeat,
  },
  {
    title: 'Supply Of Food And Provisions',
    description: 'Provide crews with fresh, reliable provisions to support safe and smooth operations at sea.',
    icon: BsCupStraw,
  },
  {
    title: 'Offshore Logistics Support',
    description: 'Coordinate schedules and handle equipment to keep offshore projects running efficiently.',
    icon: BsBox2,
  },
]

export const pricingData: PricingPlanType = {
  price: 120,
  title: 'Transparent pricing',
  description:
    "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
  url: 'pricing',
  features: [
    { icon: BsPatchCheck, title: 'Up to 05 users monthly' },
    { icon: BsPatchCheck, title: 'Free 5 host & domain' },
    { icon: BsPatchCheck, title: 'Google Docs style editors' },
    { icon: BsPatchCheck, title: 'Support for 30+ languages' },
    { icon: BsPatchCheck, title: '24/7 Dedicated Support' },
  ],
}

export const blogs: BlogType[] = [
  {
    title: '10 things you need to know about Mizzle',
    publishedBy: {
      firstName: 'Bryan',
      lastName: 'Knight',
    },
    category: 'Technology',
    image: blog1,
    url: '/blog/single/v2',
  },
  {
    title: '5 investment doubts you should clarify',
    publishedBy: {
      firstName: 'Amanda',
      lastName: 'Reed',
    },
    category: 'Marketing',
    image: blog6,
    url: '/blog/single/v2',
  },
  {
    title: '10 things you need to know about Mizzle',
    publishedBy: {
      firstName: 'Bryan',
      lastName: 'Knight',
    },
    category: 'Technology',
    image: blog7,
    url: '/blog/single/v2',
  },
]
