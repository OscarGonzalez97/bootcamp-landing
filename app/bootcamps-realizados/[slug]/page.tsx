"use client";
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { CalendarDays } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AccordionDemo } from '@/components/Accordion'
import { IBootcampRealizado } from '@/components/types'

interface parametros {
    params: {
        slug: string
    }
}

const Page = ({ params }: parametros) => {

    console.log(params.slug)

    const bootcampDetail = {
        title: "Bootcamp React",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.',
        date_from: '12/04/2023',
        date_to: '07/07/2023',
        image: 'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        projects: [
            {
                title: "Proyecto 1",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.',
                image: [
                    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
                    'https://images.unsplash.com/photo-1573495611745-41a6963351ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
                    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
                    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
                ]
            },
            {
                title: "Proyecto 2",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.',
                image: [
                    'https://images.unsplash.com/photo-1573495611745-41a6963351ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
                    'https://images.unsplash.com/photo-1573495611745-41a6963351ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
                    'https://images.unsplash.com/photo-1573495611745-41a6963351ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
                ]
            },
        ]

    }

    const [bootcamp, setbootcamp] = useState<IBootcampRealizado>(bootcampDetail)

    return (
        <div className='container grid gap-10 mt-4'>


            <Card className='grid gap-10 bg-muted-dark border-muted shadow-xl shadow-muted p-7'>
                {/* Detalle bootcamp */}
                <div className='text-foreground grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 '>
                    <div className=''>
                        <Image className='object-cover w-full h-auto object-top rounded-xl' src={bootcamp.image} alt={bootcamp.title} width={1000} height={1000}></Image>
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-5xl font-bold text-foreground ">{bootcamp.title}</h2>
                        <hr className='my-5 border-accent' />
                        <p className='flex text-xl mb-10 items-center'>
                            <CalendarDays className='text-accent me-2' />
                            <span>
                                Desde:  {bootcamp.date_from} hasta {bootcamp.date_to}
                            </span>
                        </p>

                        <p className='text-xl'>{bootcamp.description} </p>

                    </div>
                </div>

                {/* Lista proyectos */}
                {bootcampDetail.projects.length > 0 &&
                    <div className='grid pt-10'>
                        <div className='grid gap-5'>

                            <div className='text-center'>
                                <h2 className="text-xl sm:text-4xl text-foreground inline border-accent border-b px-5">Proyectos realizados</h2>
                            </div>

                            <div>
                                <AccordionDemo projects={bootcampDetail.projects}></AccordionDemo>
                            </div>
                        </div>
                    </div>
                }
            </Card>
        </div >
    )
}

export default Page
