import React from 'react'
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


function page() {

    const bootcampDetail = {
        bootcamp: { title: "Bootcamp React", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.', date_from: '12/04/2023', date_to: '07/07/2023', image: 'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
        projects: [
            { title: "Proyecto 1", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.', image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' },
            { title: "Proyecto 2", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.', image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' },
        ]
    }

    return (
        <div className='container grid gap-10'>

            <h2 className="text-2xl sm:text-5xl font-bold text-foreground text-center">{bootcampDetail.bootcamp.title}</h2>
            <Card className='bg-background shadow-md shadow-accent border-accent'>
                <div className='text-foreground grid grid-cols-1 md:grid-cols-2 gap-20 p-7 '>
                    <div>
                        <Image className='object-cover w-full h-auto object-top' src={bootcampDetail.bootcamp.image} alt={bootcampDetail.bootcamp.title} width={1000} height={1000}></Image>
                    </div>
                    <div>
                        <p className='flex text-xl mb-10 items-center'>
                            <CalendarDays className='me-2' />
                            <span>
                                Desde:  {bootcampDetail.bootcamp.date_from} hasta {bootcampDetail.bootcamp.date_to}
                            </span>
                        </p>

                        <p>{bootcampDetail.bootcamp.description} </p>

                    </div>
                </div>
            </Card>

            {bootcampDetail.projects.length > 0 &&
                <div className='grid'>
                    <div className='grid gap-10'>

                        <h2 className="text-xl sm:text-3xl text-foreground text-center ">Proyectos realizados</h2>

                        <div>
                            <Accordion type="single" collapsible  >
                                {bootcampDetail.projects.map((item, index) => (
                                    <AccordionItem value={'item-' + index} key={index} className='bg-foreground shadow-md text-background rounded-xl mb-7 border-b-0'>
                                        <AccordionTrigger className='rounded-xl text-xl hover:no-underline px-5'>
                                            {item.title}
                                            </AccordionTrigger>
                                        <AccordionContent className='bg-background h-3/5'>
                                            <div className='p-5 border-primary border-2 border-t-0 rounded-b-xl'>
                                                <div className='md:flex'>
                                                    <div className='w-full lg:w-3/5 md:me-10 mb-10 md:mb-0'>
                                                        <Image className='w-full h-auto' src={item.image} alt={item.title} width={300} height={100}></Image>
                                                    </div>
                                                    <p className='text-foreground'>{item.description}</p>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}

export default page