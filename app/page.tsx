"use client"
import Image from "next/image";
import Payment from "@/components/Payment";
import { InputCoso } from "@/components/Input";
import { ButtonDemo } from "@/components/Button";
import { delay, motion } from "framer-motion";

export default function Home() {
  return (
    <main className=" flex justify-center items-center h-screen bg-background">
      <Payment/>
     
      
    </main>
  );
}
