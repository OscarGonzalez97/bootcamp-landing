"use client"
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import { fetchAllBootcampRealizado } from "@/services/querysBootcampsRealizados";
import {  IBlog } from "@/helpers/types";
import Loader from "@/components/Loader";
import { showFormattedDate } from "@/helpers/utility";
import { fetchAllBlog, fetchBlogBySlug } from "@/services/querys";
import Portable from "@/components/PortableText";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
    params: {
      slug: string;
    };
  }

export default function Page({ params }: Props) {
    const [blog, setBlog] = useState<IBlog | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const slug = params.slug;


  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const data = await fetchBlogBySlug(slug);
        // console.log("@@@", data?.allBlog?.contentRaw);
        // console.log(data);

        setBlog(data?.allBlog || []);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogsData();
  }, []);

  return (
    <div className="container grid gap-5 lg:px-52 place-content-center">
     

      {isLoading && (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}

      {blog &&
        blog.map((item: IBlog, index: number) => (
          <Card
            key={index}
            className="text-foreground  border-none  bg-background mb-5 break-words max-w-[80vw] lg:max-w-3xl"
          >
            <CardHeader>
            
              <CardTitle className="text-5xl pt-3 font-bold">
                {item.title}
                
                <hr className="my-3 border-accent" />
              </CardTitle>
              <CardDescription className="flex items-center justify-center">
           
              
              </CardDescription>
            </CardHeader>
            <CardContent >
                
              
                <div className="grid mt-10 w-full">
                  <div className="overflow-x-auto max-w-full">
                    <Portable value={item.contentRaw} />
                  </div>
                </div>
            </CardContent>
            <CardFooter className="flex ">
            {item.autor.map(
                (
                  autor: {
                    avatar: { asset: { url: string } };
                    nombre: string;
                  },
                  index: number
                ) => {
                  return (
                    <div
                      key={index}
                      className="flex gap-12 "
                    >
                      <div>
                        
                          <span className="mt-1"> Escrito por : {autor.nombre}</span>
                      </div>
                      <div className="flex gap-2">
                          <CalendarDays className="me-2" />{" "}  {showFormattedDate(item.publishedAt)}
                      </div>
                    </div>
                  );
                }
              )}
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};


