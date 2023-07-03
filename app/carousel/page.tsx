"use client"
import React, { useEffect, useState } from 'react'
import Carousel from '@/components/Carousel'
import Hero from '@/components/Hero'
import {Cards} from '@/components/Cards'
import Footer from '@/components/Footer'
import fetchCarouselImages from "@/services/queryCarousel";


const Page = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
      const fetchCarouselData = async () => {
        try {
          const data = await fetchCarouselImages();
          // console.log(data)
          setCarouselData(data?.allBootcampRealizado || []);
        } catch (error) {
          console.error("Error fetching carousel data:", error);
        }
      };
    
      fetchCarouselData();
    }, [])

  return (
    <main className=" grid  place-items-center h-screen bg-background">
    <Hero/>
    <Cards/>
    <Carousel data={carouselData}/>
    <Footer/>
    </main>
  )
}

export default Page
