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
  // console.log(data)
  // console.log(dimensions)
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
      <div className="w-[98vw] flex justify-center items-center p-5">        
        <Carousel show={dimensions < 770 ?  1 : dimensions < 1385 ? 2 : 3} slide={dimensions < 770 ?  1 : dimensions < 1385 ? 2 : 3} swiping={true} infinite={true} responsive={true} dynamic={true} leftArrow={<ChevronLeft className='flex justify-center items-center h-[100%] text-secondary lg:w-[60px] sm:w-[40px] cursor-pointer hover:text-accent' strokeWidth={'1px'}/>} rightArrow={<ChevronRight className='flex justify-center items-center h-[100%] text-secondary lg:w-[60px] sm:w-[40px] cursor-pointer hover:text-accent' strokeWidth={'1px'}/>}>
          {
            reportData.data.map((item : items , index : number) => {
              return (
                <div key={index} className='w-full h-[300px] flex items-center justify-center relative xl:h-[400px] lg:h-[400px] md:h-[350px]'>
                  <Image src={item.image} alt='' style={{objectFit:"cover"}} fill className='px-3' sizes='100%'/>
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