"use client"
import React, { useEffect, useState } from 'react'
import Carousel from '@/components/Carousel'
import Hero from '@/components/Hero'
import {Cards} from '@/components/Cards'
import Footer from '@/components/Footer'

const Page = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
      const fetchReportData = async () => {
        try {
          const response = await fetch("https://rickandmortyapi.com/api/character");
          const data = await response.json();
          setData(data.results);
        } catch (error) {
          console.error("Error fetching report data:", error);
        }
      };
    
      fetchReportData();
    }, [])
  return (
    <main className=" grid  place-items-center h-screen bg-background">
    <Hero/>
    <Cards/>
    <Carousel data={data}/>
    <Footer/>
    </main>
  )
}

export default Page
