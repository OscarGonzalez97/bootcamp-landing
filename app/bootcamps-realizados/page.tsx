"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { CalendarDays } from "lucide-react"
import Link from 'next/link'
import { fetchAllBootcampRealizado } from '@/services/querysBootcampsRealizados'
import { IBootcampRealizado } from '@/helpers/types'
import Loader from '@/components/Loader'
import { showFormattedDate } from '@/helpers/utility'


const Page = () => {

    const emptyImageUrl = "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
    const [bootcampsData, setBootcampsData] = useState<IBootcampRealizado[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCursoData = async () => {
            try {
                const data = await fetchAllBootcampRealizado();
                // console.log(data)
                setBootcampsData(data?.allBootcampRealizado || []);
            } catch (error) {
                console.error("Error fetching curso data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCursoData()
    }, [])


    return (
        <div className='container grid gap-5 lg:px-52'>
            <h1 className="text-2xl sm:text-5xl font-bold text-foreground text-center mt-5">Bootcamps Realizados</h1>
            <hr className='border-accent' />

            {isLoading && <div className='flex justify-center'><Loader /></div>}

            {bootcampsData && bootcampsData.map((item, index) => (
                <Card key={index} className='text-foreground text-center border-none bg-muted mb-5'>
                    <CardHeader>
                        <Link href={`/bootcamps-realizados/${item._id}`} className='h-80' style={{background:'#cbcbcb'}}>
                            {item.imagen?.asset?.url
                                ? <Image className='object-cover object-top w-full h-full' src={item.imagen.asset.url} alt={item.curso.titulo} width={1000} height={1000}></Image>
                                : <Image className='object-contain w-full h-full' src={emptyImageUrl} alt={item.curso.titulo} width={1000} height={1000}></Image>
                            }
                        </Link>
                        <CardTitle className='text-3xl pt-3 font-bold'>
                            {item.curso.titulo}
                            <hr className='my-3 border-accent' />
                        </CardTitle>
                        <CardDescription className='flex items-center justify-center'>
                            <CalendarDays className='me-2' /> {showFormattedDate(item.fechaDesde)} a {showFormattedDate(item.fechaHasta)}
                        </CardDescription>
                    </CardHeader>
                    <CardContent >

                        <p className='px-10'>{item.curso.descripcion}</p>

                    </CardContent>
                    <CardFooter className='flex justify-center'>
                        <Link href={`/bootcamps-realizados/${item._id}`}  >
                            <Button className='bg-accent text-background hover:bg-orange-400 hover:text-foreground '>Ver más info</Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}

        </div>
    )
}

export default Page