import { PortableText, PortableTextReactComponents } from '@portabletext/react';


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
    image: ({ value }: { value: { asset: any } }) => <img src={urlFor(value.asset).url()} />,
  },
  block: {
    h1: ({ children }: { children?: ReactNode }) => <h1 className="text-8xl text-red-600">{children}</h1>,
  },
};

const Portable = (props: { value: any }) => {
  console.log("Dataset:", process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET);
  console.log("Project ID:", process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID);
  console.log("Value:", props.value);

  return <PortableText value={props.value} components={myPortableTextComponents} />;
};

export default Portable;
