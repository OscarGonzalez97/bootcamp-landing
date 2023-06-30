import React from 'react'
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className='text-secondary text-center w-3/4 flex flex-col gap-8'>
      <motion.h1 className='md:text-8xl  text-5xl tracking-tighter leading-relaxed'
        initial={{ y: '20px', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        transition={{ duration: 0.5 }}>Prueba.</motion.h1>
      <motion.p className='descripcion text-2xl'
        initial={{ y: '20px', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </motion.p>
    </div>
  )
}

export default Hero