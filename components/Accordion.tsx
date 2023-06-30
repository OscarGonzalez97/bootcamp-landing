import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import Image from "next/image"

const bootcampDetail = {
  bootcamp: { title: "Bootcamp React", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.', date_from: '12/04/2023', date_to: '07/07/2023', image: 'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
  projects: [
      { title: "Proyecto 1", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.', image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' },
      { title: "Proyecto 2", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium maxime ex libero ratione distinctio minus excepturi error incidunt facere, a dolore, vitae, vero reprehenderit perferendis culpa sunt dolores odio.', image: 'https://images.unsplash.com/photo-1573495611745-41a6963351ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80' },
  ]
}

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible  className='grid gap-7'>
    {bootcampDetail.projects.map((item, index) => (
        <AccordionItem value={'item-' + index} key={index} className='bg-muted hover:bg-secondary-foreground shadow-md text-muted-foreground rounded-xl border-b-0'>
            <AccordionTrigger className='rounded-xl text-xl sm:text-2xl  hover:no-underline px-5'>
                {item.title}
            </AccordionTrigger>
            <AccordionContent className='bg-muted-dark border-muted border-2 border-t-0 rounded-b-xl'>
                <div className='p-5 '>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-5'>
                        <Image className='w-full h-auto' src={item.image} alt={item.title} width={300} height={100}></Image>
                        <p className='text-foreground text-xl col-span-2'>{item.description}</p>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    ))}
</Accordion>
  )
}
