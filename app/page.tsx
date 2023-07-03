"use client"
import { useEffect, useState } from "react";
import { fetchAllCurso } from "@/services/querys";
import { Cards } from "@/components/Cards";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import Loader from "@/components/Loader";

interface Curso {
  _id: string;
  titulo: string;
  // add any other properties here
}

export async function generateStaticParams() {
  return [<Loader key={"1"} />];
}

export default function Home() {
  const [cursoData, setCursoData] = useState<Curso[] | null>(null);
  const [carouselData, setCarouselData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCursoData = async () => {
      try {
        const data = await fetchAllCurso();
        setCursoData(data?.allCurso || []);
      } catch (error) {
        console.error("Error fetching curso data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchCarouselData = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCarouselData(data.results);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };

    fetchCursoData();
    fetchCarouselData();
  }, []);



  return (
    <main className="grid place-items-center h-screen bg-background">
      <Hero />
      <Cards />
      {cursoData && (
        <div className="curso-list">
          {cursoData.map((curso) => (
            <div key={curso._id}>{curso.titulo}</div>
       


          ))}
        </div>
      )}
       {isLoading && <Loader />}
      {carouselData && <Carousel data={carouselData} />}
      <Footer />
    </main>
  );
}
