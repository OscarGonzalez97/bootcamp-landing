"use client"
import Image from "next/image";
// import Payment from "@/components/Payment";
import { InputCoso } from "@/components/Input";
import { ButtonDemo } from "@/components/Button";
import { delay, motion } from "framer-motion";
import { Cards } from "@/components/Cards";
import { DemoTeamMembers } from "@/components/TeamMember";

export default function Home() {
  return (
    <main className=" grid  place-items-center h-screen bg-background">
      <Cards/>
      
    </main>
  );
}
