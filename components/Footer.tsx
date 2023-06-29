import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='footer'>

                <Image
                    src="https://res.cloudinary.com/dkqtquwsj/image/upload/v1688050597/Logo_Roshka._zm4hkc.png"
                    width={250}
                    height={64}
                    alt="logo"
                />
                
            </div>
            <div>

            </div>
            <div>

            </div>
        </footer>
    )
}

export default Footer