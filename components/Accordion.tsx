import { IProyectos } from "@/helpers/types"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion"

import Image from "next/image"

export function AccordionDemo({ proyectos }: { proyectos: Array<IProyectos> }) {
	// console.log(projects)
	return (
		<Accordion type="single" collapsible className='grid gap-7' defaultValue='item-0'>
			{proyectos && proyectos.map((proyecto, index) => (
				<AccordionItem value={'item-' + index} key={index} className='bg-muted hover:bg-secondary-foreground shadow-md text-muted-foreground rounded-xl border-b-0'>
					<AccordionTrigger className='rounded-xl text-xl sm:text-2xl  hover:no-underline px-5'>
						{proyecto.titulo}
					</AccordionTrigger>
					<AccordionContent className='bg-muted-dark border-muted border-2 border-t-0 rounded-b-xl'>
						<div className='grid gap-5 p-5 text-xl'>
							{/* Descripcion */}
							{/* <p className="font-bold underline underline-offset-8 decoration-accent">Descripción:</p> */}
							<p className='text-foreground text-lg text-gray-300'>{proyecto.descripcion}</p>
							{/* Imagenes */}
							<p className="font-bold underline underline-offset-8 decoration-accent tracking-wider">Galeria de imagenes:</p>
							<div className='flex flex-wrap gap-5'>
								{proyecto.imagen.map((item, index) => (
									<Image key={index} className='w-auto h-min md:h-80' src={item.asset.url} alt={proyecto.titulo} width={300} height={100}></Image>
								))}
							</div>
						</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
