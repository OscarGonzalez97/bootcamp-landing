import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import Image from "next/image";

export type Modulo = {
  titulo: string;
  duracion: number;
  contenidos: {
    descripcion: string;
  }[];
};

interface AccordionBtcProps {
  modulos: Modulo[];
}

export function AccordionBtc({ modulos }: AccordionBtcProps) {
  return (
    <Accordion type="single" collapsible className="grid gap-7 w-full" defaultValue="item-0">
      {modulos && modulos.map((modulo, index) => (
        <AccordionItem value={"item-" + index} key={index} className="bg-muted hover:bg-secondary-foreground shadow-md text-muted-foreground rounded-xl border-b-0">
          <AccordionTrigger className="rounded-xl text-xl sm:text-2xl  hover:no-underline px-5">
            {modulo.titulo}
          </AccordionTrigger>
          <AccordionContent className="bg-muted-dark border-muted border-2 border-t-0 rounded-b-xl">
            <div className="grid gap-5 p-5 text-xl">
              {/* Duración */}
              <p className="font-bold underline underline-offset-8 decoration-accent">Duración:</p>
              <p className="text-foreground text-lg text-gray-300">{modulo.duracion} horas</p>
              {/* Contenidos */}
              <p className="font-bold underline underline-offset-8 decoration-accent">Contenidos:</p>
              <ul>
                {modulo.contenidos && modulo.contenidos.map((contenido, index) => (
                  <li key={index}>{contenido.descripcion}</li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
