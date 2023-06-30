import Image from 'next/image';
import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';

register();

declare global {
  namespace JSX {
      interface IntrinsicElements {
          'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
          'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
  }
}

interface items{
    image: string
  }

const CarouselPictures = (data:any) => {
  const swiperElRef = useRef(null);
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

  if(swiperElRef.current){
      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('progress', (e:any) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
      });
  
      swiperElRef.current.addEventListener('slidechange', (e:any) => {
      console.log('slide changed');
      });
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
        <div className='w-[98vw] p-5'>
        <swiper-container
            ref={swiperElRef}
            slides-per-view={dimensions < 770 ?  1 : dimensions < 1385 ? 2 : 3}
            navigation="true"
            pagination="true"
            loop="true"
            autoplay="true"
        >
           {
                reportData.data.map((item : items , index : number) => {
                return (
                    <swiper-slide key={index}>
                        <div key={index} className='w-full h-[300px] flex items-center justify-center relative xl:h-[400px] lg:h-[400px] md:h-[350px]'>
                           <Image src={item.image} alt='' style={{objectFit:"cover"}} fill className='px-3' sizes='100%'/>
                        </div>
                    </swiper-slide>
                )    
                })
            }
        </swiper-container>
        </div>
        );
  }
  else {
    return (
      <div className='w-screen'>Loading ...</div>
    )
  }
};

export default CarouselPictures