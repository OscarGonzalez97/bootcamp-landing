import React from 'react'
import Image from 'next/image'
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='grid grid-cols-1 content-center justify-center md:grid-cols-3 gap-4 bg-secondary-foreground text-secondary w-full h-full py-20 px-5'>
            <div className='footer-col-1 flex flex-col items-center gap-1 mb-4 lg:top-4 sm:mb-16'>

                <Image
                    src="https://res.cloudinary.com/dkqtquwsj/image/upload/v1688062313/logo-standard-fondo-oscuro_fhjqnz.png"
                    width={250}
                    height={64}
                    alt="logo"
                />
                <div className="direccion flex">
                    <p className='pr-2'>Tte. Cusmanich 867 c/ Defensa Nacional</p><Link href="https://g.page/Roshka?share" target='_blank'><MapPin/></Link>
                </div>
                <p>Código postal 1409</p>
                <p>Asunción, Paraguay</p>
            </div>
            <div className='footer-col-2 flex flex-col items-center gap-1 mb-4 mt-20'>
                <h2 className='text-2xl'>Contact</h2>
                <p>+595 21 204 252</p>
                <p>+595 21 214 884</p>
                <div className="contacto flex flex-col items-center gap-2 my-4">
                        <Link className='flex hover:underline' href="mailto:info@roshka.com"><Mail/><p className='pl-2'>Send us an e-mail</p></Link>
                        <Link className='flex hover:underline' href="tel:59521204252"><Phone/><p className='pl-2'>Give us a call</p></Link>
                 
                </div>
                <div className='social flex gap-3'>
                    <Link className='hover:text-primary' href="https://www.facebook.com/roshkadev/" target='_blank'><Facebook/></Link>
                    <Link className='hover:text-primary' href="https://twitter.com/roshkadev" target='_blank'><Twitter/></Link>
                    <Link className='hover:text-primary' href="https://www.instagram.com/roshkapy/" target='_blank'><Instagram/></Link>
                    <Link className='hover:text-primary' href="https://www.linkedin.com/company/roshka/" target='_blank'><Linkedin/></Link>
                </div>    
            </div>
            <div className='footer-col-3 flex flex-col items-center gap-1'>
                <p><Link className='hover:underline' href="https://www.roshka.com/" target='_blank'>Home</Link></p>
                <p><Link className='hover:underline' href="https://www.roshka.com/about/" target='_blank'>About Us</Link></p>
                <p><Link className='hover:underline' href="https://www.roshka.com/jobs/" target='_blank'>Work with us</Link></p>
                <p><Link className='hover:underline' href="https://www.roshka.com/contact/" target='_blank'>Get in trouch</Link></p>
            </div>
        </footer>
    )
}

export default Footer