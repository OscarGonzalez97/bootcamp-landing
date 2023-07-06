"use client"
import React, { useEffect, useState } from "react";
import { AccordionBtc } from "@/components/AccordionBootcamp";
import { fetchCursoBySlug } from "@/services/querys";
import Loader from "@/components/Loader";

interface Curso {
  _id: string;
  titulo: string;
  descripcion: string;
  modulos: Modulo[];
}

export type Modulo = {
  titulo: string;
  duracion: number;
  contenidos: {
    descripcion: string;
  }[];
};


interface Props {
  params: {
    slug: string;
  };
}

export default function Home({ params }: Props) {
  const [curso, setCurso] = useState<Curso | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const slug = params.slug;

  useEffect(() => {
    async function fetchData() {
      const cursoData = await fetchCursoBySlug(slug);
      setCurso(cursoData);
      setIsLoading(false);
    }

    fetchData();
  }, [slug]);

  // if (!curso) {
  //   return <div>Loading...</div>; // or any loading state you want to show
  // }

  return (
    <main className="text-secondary justify-center bg-green-600 h-screen flex">
      <div className={"grid place-items-center gap-4 w-full  bg-background " + ((!isLoading) ? 'place-content-baseline' : '')}>
        {isLoading && <div><Loader /></div>}
        <div className=" w-9/12 grid gap-8 mt-5">

          {/* Header */}
          {curso &&
            <>
              <div className="grid gap-5">
                <h1 className="text-2xl sm:text-5xl font-bold text-foreground text-center">{curso.titulo}</h1>
                <hr className='border-accent' />
                <p className="text-xl ">{curso.descripcion}</p>
              </div>
              <div className="w-full flex flex-col gap-4 justify-center items-center border-2 border-secondary-foreground rounded-lg p-4">
                <h1 className="self-start text-xl font-bold">Modulos</h1>
                <AccordionBtc modulos={curso.modulos} />
              </div>
            </>
          }
        </div>
      </div>
    </main>
  );
}
