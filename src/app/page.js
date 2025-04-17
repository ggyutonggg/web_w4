"use client"

import Image from "next/image";
import 頭像 from "@/../public/頭像.jpg";
import HeartImg from "@/../public/heart.png"
import { useState } from "react";


export default function Home() {

  const [heart, setHeart] = useState(0);

  const addHeart = function(){
    
    setHeart(heart+1);

  }

  return (
    <div className="flex w-full h-full justify-center items-center rounded-2xl relative overflow-hidden">
      <Image 
        src="/untitled-5784.jpg" 
        alt="背景" 
        fill 
        className="object-cover object-bottom"
        priority
      />
      
      <div className="absolute top-8 left-8 right-8 z-10 text-gray-600 text-base leading-relaxed space-y-0.5">
        <p className="text-xl ">雨桐，二十一歲。</p>
        <p>對於沒有接觸過的領域，比起下意識地抗拒，往往會積極地進行嘗試，具有豐富的實驗精神且熱愛冒險。</p>
        <p>喜歡需要創意和創新的工作，不願意被侷限在框架和條例中。</p>
        <p>行事乾脆利落，思維邏輯理性，善於利用小聰明。</p>
        <p>對自己有所要求，清楚目標之後會不顧一切奮力追求，但偶爾不小心會陷入完美主義的漩渦。</p>
      </div>
      
      <div className="cursor-pointer flex flex-col justify-center items-center z-10"
        onClick={addHeart}
      >
        <Image src={頭像} className="w-[68px] h-[68px] rounded-full" alt="photo" />
        <div className="text-2xl text-gray-700 mt-2"> { heart } </div>
      </div>
      
    </div>
  );
}
