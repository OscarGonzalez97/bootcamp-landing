import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'

import { Calendar } from "lucide-react"



function page() {

    const listaBootcamps = [
        { title: "Bootcamp React", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.', date_from: '12/04/2023', date_to: '07/07/2023', picture: 'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
        { title: "Bootcamp React", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.', date_from: '12/04/2023', date_to: '07/07/2023', picture: 'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
        { title: "Bootcamp React", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.', date_from: '12/04/2023', date_to: '07/07/2023', picture: 'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }
    ]

    return (
        <div className='container  grid gap-10 px-52'>
            <h1 className="text-2xl sm:text-5xl font-bold text-foreground text-center mb-5">Bootcamps realizados</h1>

            {listaBootcamps && listaBootcamps.map((item, index) => (
                <Card key={index} className='bg-transparent text-foreground text-center '>
                    <CardHeader>
                        <div className='h-80'>
                            <Image className='object-cover object-top w-full h-full' src={item.picture} alt={item.title} width={1000} height={1000}></Image>
                        </div>
                        <CardTitle className='text-3xl py-5 font-bold'>{item.title}</CardTitle>
                        <CardDescription className='flex items-center justify-center'>
                            <Calendar /> {item.date_from} a {item.date_to}</CardDescription>
                    </CardHeader>
                    <CardContent >

                        <p className='px-10'>{item.description}</p>

                    </CardContent>
                    <CardFooter className='flex justify-center'>
                        <Button className='bg-accent hover:bg-orange-500' >Ver más info</Button>
                    </CardFooter>
                </Card>
            ))}

        </div>
    )
}

export default page