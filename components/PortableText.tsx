import {PortableText} from '@portabletext/react'
// import client from './sanityClient'
import client from "../apollo-client";
import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source)
}

const myPortableTextComponents = {
    types: {
      image: ({value}) => <img src={value.imageUrl} />,
    },
        block: {
          // Ex. 1: customizing common block types
          h1: ({children}) => <h1 className="text-2xl">{children}</h1>,
          blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
      
          // Ex. 2: rendering custom styles
          customHeading: ({children}) => (
            <h2 className="text-lg text-primary text-purple-700">{children}</h2>
          ),
        },
  }
  
  const Portable = (props) => {
    console.log(props)
    return <PortableText value={props.value} components={myPortableTextComponents} />
  }
  
  export default Portable