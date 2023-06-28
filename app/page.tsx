"use client"
import Image from "next/image";
import Payment from "@/components/Payment";
import { InputCoso } from "@/components/Input";
import { ButtonDemo } from "@/components/Button";
import { delay, motion } from "framer-motion";

export default function Home() {
  return (
    <main className=" flex justify-center items-center h-screen">
      <div className="bg-gray-300 p-8 flex flex-col gap-4 rounded-lg shadow-lg">
      <h1> sadasdsad</h1>
        <p>asdsaddsa</p>
        <InputCoso type="text" placeholder="hola" />
          <InputCoso type="text" placeholder="hola" />
        <div className=" flex gap-4">
          
          <motion.div
          //make a while hover animation that make make the butotn color birghter
          
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{duration: 1.5,  repeat: Infinity, repeatType: "reverse" }}
            
          >
            <ButtonDemo />
          </motion.div>
          <ButtonDemo />
        </div>
     
      </div>
    </main>
  );
}
