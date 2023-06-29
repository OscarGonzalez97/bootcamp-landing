import Image from 'next/image';
import { useEffect, useState, useLayoutEffect } from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { ChevronLeft, ChevronRight, Layout } from 'lucide-react';
import im1 from '../public/pruebaCarousel/1.jpg';
import im2 from '../public/pruebaCarousel/2.jpg';
import im3 from '../public/pruebaCarousel/3.jpg';
import im4 from '../public/pruebaCarousel/4.jpg';
import im5 from '../public/pruebaCarousel/5.jpg';

const CarouselPictures = () => {
  const [dimensions, setDimensions] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      setDimensions(
        window.innerWidth,
      );    
    }
    
    if (typeof window !== 'undefined') {
      setDimensions(window.innerWidth)
      console.log(dimensions);
    window.addEventListener("resize", handleResize, false);
    }

    return () => {

      window.removeEventListener('resize', handleResize);

    };

  }, []);
   
  return (
    <div className='w-[100%]'>
      <Carousel show={dimensions <= 500 ?  1 : dimensions < 1385 ? 2 : 3} slide={dimensions <= 500 ?  1 : dimensions < 1385 ? 2 : 3} swiping={true} infinite={true} responsive={true} className='' leftArrow={<ChevronLeft className='flex justify-center items-center h-[100%] text-secondary lg:w-[60px] sm:w-[40px] cursor-pointer hover:text-accent' strokeWidth={'1px'}/>} rightArrow={<ChevronRight className='flex justify-center items-center h-[100%] text-secondary lg:w-[60px] sm:w-[40px] cursor-pointer hover:text-accent' strokeWidth={'1px'}/>}>
        <div className='w-[100%] h-[200px]  relative xl:h-[400px] lg:h-[300px]'>
          <Image src={im1} alt='' style={{objectFit:"cover"}} fill className='px-5'/>
        </div>
        <div className='w-[100%] h-[200px]  relative xl:h-[400px] lg:h-[300px]'>
          <Image src={im2} alt='' style={{objectFit:"cover"}} fill className='px-5'/>
        </div>
        <div className='w-[100%] h-[200px]  relative xl:h-[400px] lg:h-[300px]'>
          <Image src={im3} alt='' style={{objectFit:"cover"}} fill className='px-5'/>
        </div>
        <div className='w-[100%] h-[200px]  relative xl:h-[400px] lg:h-[300px]'>
          <Image src={im4} alt='' style={{objectFit:"cover"}} fill className='px-5'/>
        </div>
        <div className='w-[100%] h-[200px]  relative xl:h-[400px] lg:h-[300px]'>
          <Image src={im5} alt='' style={{objectFit:"cover"}} fill className='px-5'/>
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselPictures