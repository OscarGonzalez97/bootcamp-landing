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
import { IBlog } from "@/helpers/types";
import Loader from "@/components/Loader";
import { showFormattedDate } from "@/helpers/utility";
import { fetchAllBlog } from "@/services/querys";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import urlBuilder from '@sanity/image-url';

const urlFor = (source :any ) => {
  return urlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET!,
  }).image(source);
};

const Page = () => {
  const [blogData, setBlogData] = useState<IBlog[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const data = await fetchAllBlog();
        // console.log("@@@", data?.allBlog?.contentRaw);
        // console.log(data);

        setBlogData(data?.allBlog || []);
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
      <h1 className="text-2xl sm:text-5xl font-bold text-foreground text-center mt-5">
        Blogs
      </h1>
      <hr className="border-accent" />

      {isLoading && (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}

      {blogData &&
        blogData.map((item: IBlog, index: number) => (
          <Card
            key={index}
            className="text-foreground text-center border-none bg-muted mb-5 max-w-[80vw] lg:max-w-3xl"
          >
            <CardHeader>
            {(() => {
              let jsxElements: JSX.Element[] = [];
              item.contentRaw.some((content: any, index: number) => {
                if (content._type === 'image') {
                  jsxElements.push(
                    <Link key={index} href={`/blog/${item.slug.current}`} className='h-80'> 
                      <div className="object-cover object-top w-full h-full">
                        <Image className='object-cover object-top w-full h-full' src={urlFor(content.asset._ref).url()} alt={content.alt} width={1000} height={1000}></Image>
                      </div>
                    </Link>
                  );
                  return true; // Exit the iteration after finding the first image
                }
                return false;
              });
              return <>{jsxElements}</>; // Wrap the JSX elements with a fragment or a parent component
            })()}

              <CardTitle className="text-3xl pt-3 font-bold">
                {item.title}
                
                <hr className="my-3 border-accent" />
              </CardTitle>
              <CardDescription className="flex items-center justify-center">
                <CalendarDays className="me-2" />{" "}
                {showFormattedDate(item.publishedAt.slice(0, 10))}
              </CardDescription>
            </CardHeader>
            <CardContent>
            <p className='px-10 pb-5 break-words'>{item.excerpt}</p>
              
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
                      className="flex flex-col justify-center items-center"
                    >
                      <Avatar>
                        <AvatarImage src={autor.avatar.asset.url} />
                        <AvatarFallback>ICO</AvatarFallback>
                      </Avatar>
                      <span className="mt-1">{autor.nombre}</span>
                    </div>
                  );
                }
              )}
             
               
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href={`/blog/${item.slug.current}`}>
                <Button className="bg-accent text-background hover:bg-orange-400 hover:text-foreground ">
                  Ver más info
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default Page;
