"use client"
import Image from "next/image";
// import Payment from "@/components/Payment";
import { InputCoso } from "@/components/Input";
import { ButtonDemo } from "@/components/Button";
import { delay, motion } from "framer-motion";
import { Cards } from "@/components/Cards";
import { DemoTeamMembers } from "@/components/TeamMember";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import CarouselPictures from '@/components/CarouselPictures'
export default function Home() {

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
    <main className=" grid place-items-center h-screen bg-background"> 
      <Hero/>
      <Cards/>
      <CarouselPictures data={data}/>
      <Footer/>
      
    </main>
  );
}
