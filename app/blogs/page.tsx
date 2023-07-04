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
import { fetchAllBlog } from '@/services/querys'
import Portable from '@/components/PortableText'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Page = () => {

    const [blogData, setBlogData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBlogsData = async () => {
            try {
                const data = await fetchAllBlog();
                console.log("@@@", data?.allBlog?.contentRaw)
                console.log(data)

                setBlogData(data?.allBlog || []);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBlogsData()
    }, [])


    return (
        <div className='container grid gap-5 lg:px-52'>
            <h1 className="text-2xl sm:text-5xl font-bold text-foreground text-center mt-5">Blogs</h1>
            <hr className='border-accent' />

            {isLoading && <div className='flex justify-center'><Loader /></div>}

            {blogData && blogData.map((item, index) => (
                <Card key={index} className='text-foreground text-center border-none bg-muted mb-5'>
                    <CardHeader>
                            <Portable value={item.contentRaw} />
                        <CardTitle className='text-3xl pt-3 font-bold'>
                            {item.title}
                            <hr className='my-3 border-accent' />
                        </CardTitle>
                        <CardDescription className='flex items-center justify-center'>
                            <CalendarDays className='me-2' /> {showFormattedDate(item.publishedAt.slice(0, 10)) }
                        </CardDescription>
                    </CardHeader>
                    <CardContent >
                        {
                            item.autor.map((autor, index) => {
                                return (
                                    <div key={index} className='flex flex-col justify-center items-center'>
                                        <Avatar>
                                            <AvatarImage src={autor.avatar.asset.url} />
                                            <AvatarFallback>ICO</AvatarFallback>
                                        </Avatar>
                                        <span className='mt-1'>{autor.nombre}</span>
                                    </div>
                                )
                            })
                        }

                    </CardContent>
                    <CardFooter className='flex justify-center'>
                        <Link href={`/blogs/${item._id}`}  >
                            <Button className='bg-accent text-background hover:bg-orange-400 hover:text-foreground '>Ver más info</Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}

        </div>
    )
}

export default Page