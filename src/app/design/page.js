'use client';
import Image from "next/image";
import { useAutoScroll } from '../../hooks/useAutoScroll';
import CurvedLoop from '../../components/CurvedLoop';

export default function DesignPage() {
  // 移除自動滾動，避免一進來不是在頂部
  // const containerRef = useAutoScroll(800);
  
  return (
    // 這裡不要 h-full，直接用 flex-1 讓它自動填滿父層高度
    <div className="flex-1 bg-white flex flex-col justify-center items-center rounded-2xl overflow-y-auto">
      <div className="w-full bg-black py-8">
        <CurvedLoop 
          marqueeText="VISUAL DESIGN ✦ VISUAL DESIGN ✦ VISUAL DESIGN ✦ VISUAL DESIGN ✦"
          speed={2}
          curveAmount={500}
          direction="right"
          className="custom-text-style"
        />
      </div>
      <div className="flex flex-col items-center w-full">
        <Image src="/設計作品/design_intro.png" alt="design_intro" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
        <Image src="/設計作品/design_1.png" alt="design_1" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
        <Image src="/計設作品/design_2.png" alt="design_2" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
        <Image src="/設計作品/design_3.png" alt="design_3" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
        <Image src="/設計作品/design_4.png" alt="design_4" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
        <Image src="/設計作品/design_5.png" alt="design_5" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
        <Image src="/設計作品/design_6.png" alt="design_6" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
        <Image src="/設計作品/design_7.png" alt="design_7" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
        <Image src="/設計作品/design_8.png" alt="design_8" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
      </div>
      <div className="w-full bg-black py-8">
        <CurvedLoop 
          marqueeText="VISUAL DESIGN ✦ VISUAL DESIGN ✦ VISUAL DESIGN ✦ VISUAL DESIGN ✦"
          speed={2}
          curveAmount={500}
          direction="right"
          className="custom-text-style"
        />
      </div>
    </div>
  );
} 