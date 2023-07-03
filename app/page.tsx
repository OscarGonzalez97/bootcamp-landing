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
  const [loadingCarouselData, setLoadingCarouselData] = useState<Boolean>(false);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const data = await fetchCarouselImages();
        // console.log(data)
        setLoadingCarouselData(true) 
        setCarouselData(data?.allBootcampRealizado || []);
        setLoadingCarouselData(false)
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchCarouselData();
  }, []);

  // {console.log(loadingCarouselData)}

  return (
    <main className="grid place-items-center h-screen bg-background">
      <Hero />
      <Cards />
      {loadingCarouselData ? <Loader/> : <Carousel data={carouselData} />}
      <Footer />
    </main>
  );
}
