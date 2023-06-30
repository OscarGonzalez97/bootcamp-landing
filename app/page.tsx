"use client"
import Image from "next/image";
// import Payment from "@/components/Payment";
import { InputCoso } from "@/components/Input";
import { ButtonDemo } from "@/components/Button";
import { delay, motion } from "framer-motion";
import { Cards } from "@/components/Cards";
import { DemoTeamMembers } from "@/components/TeamMember";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { gql } from "@apollo/client";
import client from "../apollo-client";


export default async function Home() {

  const { data } = await client.query({
    query: gql`
    query{
      allCurso{
        _id
        titulo
      }
    }
    `,
  });

  console.log(data)

  return (
    <main className=" grid  place-items-center h-screen bg-background">
      
   
      <Hero/>
      <Cards/>
      <Footer/>
      
    </main>
  );
}
