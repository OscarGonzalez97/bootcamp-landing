"use client"
import CarouselPictures from '@/components/CarouselPictures'
import React, { useState, useEffect } from 'react'

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
    <div className="w-full flex justify-center items-center">        
      <CarouselPictures data={data}/>
    </div>
  )
}

export default page