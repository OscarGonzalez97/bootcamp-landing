import { ChevronDown, Circle, Plus, Star } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faJava, faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { fetchAllCurso } from "@/services/querys";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface Curso {
  _id: number;
  titulo: string;
  descripcion: string;
  urlIcono: string;
  // add any other properties here
}

export function Cards() {

  const [cursoData, setCursoData] = useState<Curso[] | null>(null);
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

    fetchCursoData();
  }, []);

  const textMotion = {
    hover: {
      x: 20,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  const textMotion2 = {
    hover: {
      color: 'orangered',
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  const lineMotion = {
    hover: {
      stroke: 'orangered',
      strokeDashoffset: 0,
      transition: {
        duration: 1
      }
    }
  };

  const bootcamps = [
    { title: 'React', description: 'Da tus primeros pasos en el mundo de la programación aprendiendo sus estructuras fundamentales y la lógica funcional detrás de cada línea de código.', icon: faReact, color: '#2ea4ff' },
    { title: 'Java', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam maiores quae nihil harum, blanditiis, cupiditate ipsa, inventore neque libero iusto veritatis fugit explicabo doloribus veniam vitae fugiat repudiandae non', icon: faJava, color: '#407add' },
    { title: 'Android', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam maiores quae nihil harum, blanditiis, cupiditate ipsa, inventore neque libero iusto veritatis fugit explicabo doloribus veniam vitae fugiat repudiandae non', icon: faAndroid, color: '#24e027' },
    { title: 'JavaScript', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam maiores quae nihil harum, blanditiis, cupiditate ipsa, inventore neque libero iusto veritatis fugit explicabo doloribus veniam vitae fugiat repudiandae non', icon: faJsSquare, color: '#f7e51d' }
  ];

  const offsetDelay = 0.2


  return (
    <div className="grid place-items-center container px-12 md:px-20">
      {cursoData && (
        <div className="cartacont p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 h-full">
          {
            cursoData.map((curso) => (
              <motion.div key={curso._id} initial={{ x: '100vh', opacity: 0 }}
                animate={{ x: '0', opacity: 1 }}
                transition={{ duration: 0.8, delay: offsetDelay * curso._id }}>
                <Card key={curso._id} className="h-auto md:h-96">
                  <CardHeader className="h-1/4">
                    <div className="flex justify-start items-center">
                      <Avatar>
                        <AvatarImage src={curso.urlIcono} />
                        <AvatarFallback>ICO</AvatarFallback>
                      </Avatar>

                      <CardTitle className="text-xl ms-2">{curso.titulo}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-justify opacity-60 h-3/4 flex flex-col justify-between">
                    <span className="pb-10 md:mb-0">{curso.descripcion}</span>
                    <motion.div
                      whileHover="hover"
                      whileTap="hover"
                      className="flex"
                      variants={textMotion2}
                    >
                      <Link href={''} className="flex">
                        <span >
                          Ver Más
                          <motion.svg xmlns="http://www.w3.org/2000/svg" width="60" height="1">
                            <motion.line
                              x1="0"
                              y1="0"
                              x2="100"
                              y2="0"
                              stroke="black"
                              strokeWidth="20"
                              initial={{ strokeDashoffset: 100, strokeDasharray: 100 }}
                              variants={lineMotion}
                            />
                          </motion.svg>
                        </span>
                        <motion.div
                          variants={textMotion}
                        >
                          <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>
      )}
    </div>
  );
}

