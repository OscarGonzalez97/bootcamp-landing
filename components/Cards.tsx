import { ChevronDown, Circle, Plus, Star } from "lucide-react"

import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Separator } from "./ui/separator"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAndroid, faJava, faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { color } from "framer-motion"
import Link from "next/link"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export function Cards() {

  const bootcamps = [
    { title: 'React', description: 'Da tus primeros pasos en el mundo de la programación aprendiendo sus estructuras fundamentales y la lógica funcional detrás de cada línea de código.', icon: faReact, color: '#2ea4ff' },
    { title: 'Java', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam maiores quae nihil harum, blanditiis, cupiditate ipsa, inventore neque libero iusto veritatis fugit explicabo doloribus veniam vitae fugiat repudiandae non', icon: faJava, color: '#407add' },
    { title: 'Android', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam maiores quae nihil harum, blanditiis, cupiditate ipsa, inventore neque libero iusto veritatis fugit explicabo doloribus veniam vitae fugiat repudiandae non', icon: faAndroid, color: '#24e027' },
    { title: 'JavaScript', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam maiores quae nihil harum, blanditiis, cupiditate ipsa, inventore neque libero iusto veritatis fugit explicabo doloribus veniam vitae fugiat repudiandae non', icon: faJsSquare, color: '#f7e51d' }
  ]
  return (
    <>

      <div className=" w-full grid place-items-center container px-20">
        <div className=" cartacont p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 h-full">
          {bootcamps.map((item, index: number) => (
            <Card key={index}>
              <CardHeader className="h-1/5">
                <div className="flex justify-start items-center text-2xl">
                  <FontAwesomeIcon icon={item.icon} style={{ color: item.color }} className="me-2" />
                  <CardTitle>{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-justify opacity-60 h-4/5 flex flex-col justify-between">
                <span>{item.description}</span>
                <Button variant="link" className="text-xs flex justify-start"><Link href={''} className="me-1">Ver Más <FontAwesomeIcon icon={faArrowRight} /></Link></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </>
  )
}