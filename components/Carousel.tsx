import Image from 'next/image';
import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';

interface SwiperContainerProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null;
  pagination?: boolean;
  "slides-per-view"?: number;
  navigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
}

register();

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': SwiperContainerProps;
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface Item {
  imagen: {
    asset: {
      url: string;
    };
  };
}

const CarouselPictures = (data: any) => {
  const swiperElRef = useRef<HTMLDivElement | null>(null);

  const [dimensions, setDimensions] = useState(0);

  let reportData = data.data;

  useLayoutEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth);
    };

    if (swiperElRef.current) {
      swiperElRef.current?.addEventListener('progress', (e: any) => {
        const [swiper, progress] = e.detail;
      });
    }

    if (typeof window !== 'undefined') {
      setDimensions(window.innerWidth);
      window.addEventListener('resize', handleResize, false);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (reportData != null) {
    return (
      <div className='w-[87vw] md:w-[85vw] lg:w-[89vw]  xl:w-[98vw] xl:container xl:px-20  p-5 '>
        <swiper-container
          ref={swiperElRef}
          pagination={true}
          slides-per-view={dimensions < 770 ? 1 : dimensions < 1385 ? 2 : 3}
          navigation={true}
          loop={true}
          autoplay={true}
        >
          {reportData.map((item: Item, index: number) => {
            if (item.imagen) {
              return (
                <swiper-slide key={index}>
                  <div key={index} className='w-full h-[300px] flex items-center justify-center relative xl:h-[400px] lg:h-[400px] md:h-[350px]'>
                    <Image src={item.imagen.asset.url} alt='' style={{ objectFit: 'cover' }} fill className='px-3' sizes='100%' />
                  </div>
                </swiper-slide>
              );
            }
            return null;
          })}
        </swiper-container>
      </div>
    );
  } else {
    return <div className='w-screen'>Loading ...</div>;
  }
};

export default CarouselPictures;
