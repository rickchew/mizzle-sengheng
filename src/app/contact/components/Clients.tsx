'use client'
import { defaultSwiperOptions } from '@/states/default-config'
import type { SwiperOptions } from 'swiper/types'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import petros from '@/assets/images/client/petros.png'
import dialog from '@/assets/images/client/dialog.png'
import petronas from '@/assets/images/client/petronas.png'
import dayang from '@/assets/images/client/dayang.png'
import enviros from '@/assets/images/client/enviros.png'
import chemsain from '@/assets/images/client/chemsain.png'
import skom from '@/assets/images/client/skom.png'
import hgis from '@/assets/images/client/hgis.png'
import Image from 'next/image'

const clients = [petros, dialog, petronas, dayang, enviros, chemsain, skom, hgis]

const Clients = () => {
  const swiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    modules: [FreeMode, Autoplay],
    loop: false,
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
    },
  }
  return (
    <Swiper {...swiperOptions} wrapperClass="align-items-center">
      {clients.map((image, idx) => (
        <SwiperSlide key={idx}>
          <Image src={image} alt="client-img" style={{ maxHeight: 50, width: 'auto', objectFit: 'contain' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Clients
