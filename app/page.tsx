"use client"
import { useEffect, useState } from "react";
import { fetchAllCurso } from "@/services/querys";

import { Cards } from "@/components/Cards";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import Loader from "@/components/Loader";



interface Curso {
  _id: number;
  titulo: string;
  descripcion: string;
  urlIcono: string;
  slug: {
    current: string;
  };
  // add any other properties here
}

export async function generateStaticParams() {
  return [<Loader key={"1"} />];
}

export default function Home() {
  const [carouselData, setCarouselData] = useState(null);
  const [loadingCarouselData, setLoadingCarouselData] = useState<Boolean>(false);

  const [cursoData, setCursoData] = useState<Curso[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    const fetchCursoData = async () => {
      try {
        const data = await fetchAllCurso();
        setLoadingCarouselData(true);
        setCursoData(data?.allCurso || []);
        setCarouselData(data?.allBootcampRealizado || []);
        setLoadingCarouselData(false);
        console.log(data)
      } catch (error) {
        console.error("Error fetching curso data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCursoData();
  }, []);


 

  return (
    <main className="grid place-items-center h-screen bg-background gap-10">
      <Hero />
      <Cards cursoData={cursoData} />
      {loadingCarouselData ? <Loader /> : <Carousel data={carouselData} />}
      <Footer />
    </main>
  );
}
