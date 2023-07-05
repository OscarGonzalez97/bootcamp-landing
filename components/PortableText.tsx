import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import Image from 'next/image';

import urlBuilder from '@sanity/image-url';

const urlFor = (source :any ) => {
  return urlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET!,
  }).image(source);
};

import { ReactNode } from 'react';
const myPortableTextComponents: Partial<PortableTextReactComponents>  = {
  types: {
    image: ({ value }: { value: { asset: any; alt: string } }) => <div className='w-full flex justify-center items-center'><Image src={urlFor(value.asset).url()} alt={value.alt} width={1000} height={1000} className='w-2/4 rounded-lg my-10' /></div>,
  },
  block: {
    h1: ({ children }: { children?: ReactNode }) => <h1 className="text-base  ">{children}</h1>,
    p: ({ children }: { children?: ReactNode }) => <p className="text-base ">{children}</p>,
  },
};

const Portable = (props: { value: any }) => {


  return <PortableText value={props.value} components={myPortableTextComponents} />;
};

export default Portable;
