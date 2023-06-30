import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { CalendarDays } from "lucide-react"
import Link from 'next/link'


function page() {

    const listaBootcamps = [
        { id: 1, title: "Bootcamp React", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.', date_from: '12/04/2023', date_to: '07/07/2023', picture: 'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
        { id: 2, title: "Bootcamp React", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.', date_from: '12/04/2023', date_to: '07/07/2023', picture: 'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
        { id: 3, title: "Bootcamp React", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.', date_from: '12/04/2023', date_to: '07/07/2023', picture: 'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }
    ]

    return (
        <div className='container grid gap-5 lg:px-52'>
            <h1 className="text-2xl sm:text-5xl font-bold text-foreground text-center mt-5">Bootcamps Realizados</h1>
            <hr className='border-accent'/>
            {listaBootcamps && listaBootcamps.map((item, index) => (
                <Card key={index} className='text-foreground text-center border-none bg-muted mb-5'>
                    <CardHeader>
                        <Link href={`/bootcamps-realizados/${item.id}`} className='h-80'>
                            <Image className='object-cover object-top w-full h-full' src={item.picture} alt={item.title} width={1000} height={1000}></Image>
                        </Link>
                        <CardTitle className='text-3xl pt-3 font-bold'>
                            {item.title}
                            <hr className='my-3 border-accent' />
                        </CardTitle>
                        <CardDescription className='flex items-center justify-center'>
                            <CalendarDays /> {item.date_from} a {item.date_to}</CardDescription>

                    </CardHeader>
                    <CardContent >

                        <p className='px-10'>{item.description}</p>

                    </CardContent>
                    <CardFooter className='flex justify-center'>
                        <Link href={`/bootcamps-realizados/${item.id}`}  >
                            <Button className='bg-accent text-background hover:bg-orange-400 hover:text-foreground '>Ver más info</Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}

        </div>
    )
}

export default page