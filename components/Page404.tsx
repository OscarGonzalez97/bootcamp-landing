import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Page404 = ({ url, text }: { url?: string, text?: string }) => {
    return (
        <div className="grid min-h-full place-items-center px-6 py-20 sm:py-32 lg:px-8">
            <div className="text-center text-foreground">
                <p className="text-9xl font-semibold text-gr">404</p>
                <h1 className="mt-4 text-2xl tracking-tight sm:text-4xl">Página no encontrada</h1>
                <p className="mt-6 text-base leading-7 ">Oops... No podemos encontrar la página que andas buscando.</p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href={"/"}  >
                        <Button className='bg-accent text-background hover:bg-orange-400 hover:text-foreground '>Volver al inicio</Button>
                    </Link>
                    {url &&
                        <Link href={url} className="font-semibold">
                            {text} <span aria-hidden="true">&rarr;</span>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Page404