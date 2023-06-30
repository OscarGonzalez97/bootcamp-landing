import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

const CarouselPictures = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <div className='w-screen h-[500px] p-5'>
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
    >
      <swiper-slide>
        <div className='w-[500px] h-[500px]'>
        Slide 1
        </div>
    </swiper-slide>
    <swiper-slide>
        <div className='w-[500px] h-[500px]'>
        Slide 1
        </div>
    </swiper-slide>
    <swiper-slide>
        <div className='w-[500px] h-[500px]'>
        Slide 1
        </div>
    </swiper-slide>
    <swiper-slide>
        <div className='w-[500px] h-[500px]'>
        Slide 1
        </div>
    </swiper-slide>
    </swiper-container>
    </div>
  );
};

export default CarouselPictures