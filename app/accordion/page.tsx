"use client"
import { AccordionDemo } from '@/components/Accordion'
import { DemoTeamMembers } from '@/components/TeamMember'
import { ButtonDemo } from '@/components/Button'
import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
  return (
   <div className='flex justify-center items-center h-screen'>
      <AccordionDemo />
   </div>
  )
}

export default page