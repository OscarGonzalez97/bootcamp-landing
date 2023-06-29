import Image from 'next/image';
import { useState, useLayoutEffect } from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { ChevronLeft, ChevronRight, Layout } from 'lucide-react';

interface items{
  image: string
}



const CarouselPictures = (data : any ) => {
  const [dimensions, setDimensions] = useState(0);
	let reportData = data
  console.log(data)
  useLayoutEffect(() => {
    const handleResize = () => {
      setDimensions(
        window.innerWidth,
      );    
    }
    
    if (typeof window !== 'undefined') {
      setDimensions(window.innerWidth)
      window.addEventListener("resize", handleResize, false);
    }

    return () => {

      window.removeEventListener('resize', handleResize);

    };

  }, []);

 
   
  if(reportData?.data != null){
    return (
      <div className='w-11/12 '>
        <Carousel  show={dimensions < 770 ?  1 : dimensions < 1385 ? 2 : 3} slide={dimensions < 770 ?  1 : dimensions < 1385 ? 2 : 3} swiping={true} infinite={true} responsive={true} dynamic={true} leftArrow={<ChevronLeft className='flex justify-center items-center h-[100%] text-secondary lg:w-[60px] sm:w-[40px] cursor-pointer hover:text-accent' strokeWidth={'1px'}/>} rightArrow={<ChevronRight className='flex justify-center items-center h-[100%] text-secondary lg:w-[60px] sm:w-[40px] cursor-pointer hover:text-accent' strokeWidth={'1px'}/>}>
          {
            reportData.data.map((item : items , index : number) => {
              return (
                <div key={index} className='w-full h-[300px]  relative xl:h-[400px] lg:h-[300px] md:h-[200px]'>
                  <Image src={item.image} alt='' style={{objectFit:"cover"}} width={300} height={300}  className='px-5 '/>
                </div>
              )    
            })
          }
        </Carousel>
      </div>
    )
  }
  else {
    return (
      <div className='w-screen'>Loading ...</div>
    )
  }
}

export default CarouselPictures