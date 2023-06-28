"use client"
import { AccordionDemo } from '@/components/Accordion'
import { DemoTeamMembers } from '@/components/TeamMember'
import { ButtonDemo } from '@/components/Button'
import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <motion.div className='flex justify-center items-center w-full  h-screen'
    animate={{ x: ["2vw", "20vw", "8vw", "100vw"] }}
    >
      <div className="bg-white p-4 flex flex-col gap-6 rounded-lg shadow-lg shadow-white">
      <div>
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </div>
        <div>
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </div>
        <div>
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </div>
        <div>
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </div>
        <div>
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </div>
        <div>
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </div>
        <div>
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </div>
        <div>
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </div>
        <div>
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </div>
        <div>
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </div>
        <div>
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </div>
        <div>
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </div>
        <div>
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </div>
        <motion.div 
       whileHover={{scale : 2}}
       whileTap={{scale : 2}}
       transition={{ duration : 2, repeat : Infinity, repeatType: "reverse"}}
 
        >
        <h1>asddasad</h1>
        <p>asdasdda</p>
        <ButtonDemo/>
        </motion.div>
      </div>
      
    </motion.div>
  )
}

export default page