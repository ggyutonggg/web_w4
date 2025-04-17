"use client"

import Image from "next/image";
import IMG_6654 from "@/../public/IMG_6654.jpg";
import { useState } from "react";

export default function Home() {
  const [heart, setHeart] = useState(0);

  const addHeart = function(){
    setHeart(heart+1);
  }

  return (
    <div className="flex w-full h-full bg-rose-100 justify-center items-center rounded-2xl">
      
      <div className="cursor-pointer flex flex-col justify-center items-center"
        onClick={addHeart}
      >
        <Image src={IMG_6654} className="w-[68px] h-[68px] rounded-full" alt="photo" />
        <div className="text-2xl text-stone-800"> { heart } </div>
      </div>
      
    </div>
  );
} 