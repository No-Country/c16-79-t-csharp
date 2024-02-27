'use client';
import { Carousel } from 'flowbite-react';

import fotoUno from '../Carousel/1.jpg'
import fotoDos from '../Carousel/2.jpg'
import fotoTres from '../Carousel/3.jpg'
import fotoCuatro from '../Carousel/4.jpg'

export const CarouselBanner = () => {
  return (
    <>
    <div className="h-56 sm:h-42">
      <Carousel pauseOnHover>
        <img src={fotoUno} alt="promo1" className="w-full object-contain " />
        <img src={fotoDos} alt="promo2" className="w-full object-contain " />
        <img src={fotoTres} alt="promo3" className='w-full object-contain '/>
        <img src={fotoCuatro} alt="promo4" className='w-full object-contain' />
      </Carousel>
    </div>
    </>
  ) 
}

