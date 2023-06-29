import { AccordionDemo } from "@/components/Accordion";

export default function Home() {
  return (
    <main className="text-secondary justify-center bg-red-400 h-screen  flex ">
        <div className="flex flex-col justify-center items-center gap-4 w-full  bg-background ">
           
                <h1 className="text-4xl font-bold text-center">Course Title</h1>
                <p className="text-xl text-center">Course description</p>
        
          
            <div className="w-9/12  flex flex-col justify-center items-center border-2 border-secondary-foreground rounded-lg p-4">
                <h1 className=" self-start text-xl font-bold">Modulos</h1>
                <h1 className=" self-start">X Cursos</h1>
                <AccordionDemo/>
            </div>
        </div>
       



     
      
    </main>
  );
}