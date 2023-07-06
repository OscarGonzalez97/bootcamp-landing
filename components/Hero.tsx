import React from 'react'
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className='text-secondary text-center container flex flex-col gap-8  px-12 md:px-20'>
      <motion.h1 className='md:text-8xl  text-5xl tracking-tighter leading-relaxed mt-5'
        initial={{ y: '20px', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        transition={{ duration: 0.5 }}>Bootcamps Roshka.</motion.h1>
      <motion.p className='descripcion text-2xl'
        initial={{ y: '20px', opacity: 0 }}
        animate={{ y: '0', opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        ¡Bienvenido a nuestra página de presentación de bootcamps de desarrollo! Impulsa tu carrera en el mundo digital con nuestros programas especializados en desarrollo web, móvil y mucho más.


      </motion.p>
    </div>
  )
}

export default Hero