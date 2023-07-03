"use client"
import { useEffect, useState } from "react";
import { fetchAllCurso } from "@/services/querys";
import fetchCarouselImages from "@/services/queryCarousel";
import { Cards } from "@/components/Cards";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import Loader from "@/components/Loader";

export async function generateStaticParams() {
  return [<Loader key={"1"} />];
}

export default function Home() {
  const [carouselData, setCarouselData] = useState(null);

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
  }, []);



  return (
    <main className="grid place-items-center h-screen bg-background">
      <Hero />
      <Cards />
      {carouselData && <Carousel data={carouselData} />}
      <Footer />
    </main>
  );
}
