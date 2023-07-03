"use client";
import React, { useEffect, useState } from 'react'
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import { CalendarDays } from "lucide-react"
import { AccordionDemo } from '@/components/Accordion'
import { IBootcampRealizado } from '@/helpers/types'
import { fetchBootcampRealizadoBySlug } from '@/services/querys';
import Loader from '@/components/Loader';
import { showFormattedDate } from '@/helpers/utility';

interface parametros {
    params: {
        slug: string
    }
}

const Page = ({ params }: parametros) => {

    const slug = params.slug;

    const [bootcampDetail, setBootcampDetail] = useState<IBootcampRealizado | null>(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCursoData = async () => {
            try {
                const data = await fetchBootcampRealizadoBySlug(slug);
                console.log(data)
                setBootcampDetail(data?.BootcampRealizado || []);
            } catch (error) {
                console.error("Error fetching bootcampDetail realizado by slug:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCursoData()
    }, [slug])

    return (
        <div className='container grid gap-10 mt-4'>

            {isLoading && <div className='flex justify-center'><Loader /></div>}

            {bootcampDetail && <Card className='grid gap-10 bg-muted-dark border-muted shadow-xl shadow-muted p-7 mb-10'>
                {/* Detalle bootcampDetail */}
                <div className='text-foreground grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 '>
                    <div className=''>
                        {bootcampDetail.imagen?.asset?.url && <Image className='object-cover w-full h-auto object-top rounded-xl' src={bootcampDetail.imagen?.asset?.url} alt={bootcampDetail.curso.titulo} width={1000} height={1000}></Image>}
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-5xl font-bold text-foreground ">{bootcampDetail.curso.titulo}</h2>
                        <hr className='my-5 border-accent' />
                        <p className='flex text-xl mb-10 items-center'>
                            <CalendarDays className='text-accent me-2' />
                            <span>
                                Desde:  {showFormattedDate(bootcampDetail.fechaDesde)} hasta {showFormattedDate(bootcampDetail.fechaHasta)}
                            </span>
                        </p>

                        <p className='text-xl'>{bootcampDetail.curso.descripcion} </p>

                    </div>
                </div>

                {/* Lista proyectos */}
                {bootcampDetail?.proyectos &&
                    <div className='grid pt-10'>
                        <div className='grid gap-5'>

                            <div className='text-center'>
                                <h2 className="text-xl sm:text-4xl text-foreground inline border-accent border-b px-5">Proyectos realizados</h2>
                            </div>

                            <div>
                                <AccordionDemo proyectos={bootcampDetail.proyectos}></AccordionDemo>
                            </div>
                        </div>
                    </div>
                }
            </Card>}
        </div >
    )
}

export default Page
