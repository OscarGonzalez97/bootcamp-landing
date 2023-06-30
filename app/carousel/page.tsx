"use client"
import React, { useEffect, useState } from 'react'
import CarouselPictures from '@/components/Carousel'

const page = () => {
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
    <div>
      <CarouselPictures data={data}/>
    </div>
  )
}

export default page
