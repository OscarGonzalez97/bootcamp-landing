import Image from 'next/image';
import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import myImage from '../public/pruebaCarousel/1.jpg';

const CarouselPictures = () => {
  return (
    <div className='w-100'>
      <Carousel show={3} slide={3} swiping={true} infinite={true} responsive={true} className='p-5' leftArrow={<ChevronLeft className='flex justify-center items-center h-[100%] text-secondary lg:w-[60px] sm:w-[40px] cursor-pointer hover:text-accent' strokeWidth={'1px'}/>} rightArrow={<ChevronRight className='flex justify-center items-center h-[100%] text-secondary lg:w-[60px] sm:w-[40px] cursor-pointer hover:text-accent' strokeWidth={'1px'}/>}>
          <Image src={myImage} alt='' width={'500'} height={'500'} className='px-5 sm:w-[100%] w-[700px]'/>
          <Image src={myImage} alt='' width={'500'} height={'500'} className='px-5'/>
          <Image src={myImage} alt='' width={'500'} height={'500'} className='px-5'/>
          <Image src={myImage} alt='' width={'500'} height={'500'} className='px-5'/>
          <Image src={myImage} alt='' width={'500'} height={'500'} className='px-5'/>

      </Carousel>
    </div>
  )
}

export default CarouselPictures