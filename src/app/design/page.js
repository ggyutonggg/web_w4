'use client';
import Image from "next/image";
import { useAutoScroll } from '../../hooks/useAutoScroll';
import CurvedLoop from '../../components/CurvedLoop';
import { useEffect, useState } from "react";

export default function DesignPage() {
  const containerRef = useAutoScroll(800);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex-1 bg-[#081aff] flex flex-col items-center rounded-2xl overflow-y-auto overflow-x-hidden min-h-0 w-full box-border"
      style={{ boxSizing: 'border-box' }}
    >
      <div className="w-full bg-black py-8 flex-shrink-0">
        <CurvedLoop 
          marqueeText="VISUAL DESIGN ✦ VISUAL DESIGN ✦ VISUAL DESIGN ✦ VISUAL DESIGN ✦"
          speed={2}
          curveAmount={500}
          direction="right"
          className="custom-text-style"
        />
      </div>
      
      <Image
        src="/設計作品/design_intro.png"
        alt="design_intro"
        width={1200}
        height={800}
        style={{
          objectFit: 'cover',
          width: '100%',
          maxWidth: '100%',
          height: 'auto',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        }}
      />
      <Image
        src="/設計作品/design_1.png"
        alt="design_1"
        width={1200}
        height={800}
        style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
      <Image
        src="/設計作品/design_2.png"
        alt="design_2"
        width={1200}
        height={800}
        style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
        {/* 影片區塊：四個 200x200 並排自動播放影片，只在 client 端渲染 */}
        {isClient && (
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', width: '100%', maxWidth: '100%', margin: '24px 0', boxSizing: 'border-box' }}>
            <video
              src="/設計作品/mp4/徵件延長.mp4"
              width={200}
              height={200}
              style={{
                objectFit: 'cover',
                borderRadius: '1rem',
                background: '#000',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              src="/設計作品/mp4/徵件截止2.0.mp4"
              width={200}
              height={200}
              autoPlay loop muted playsInline style={{ objectFit: 'cover', borderRadius: '1rem', background: '#000' }} />
            <video
              src="/設計作品/mp4/徵件開始倒數5天.mp4"
              width={200}
              height={200}
              autoPlay loop muted playsInline style={{ objectFit: 'cover', borderRadius: '1rem', background: '#000' }} />
            <video
              src="/設計作品/mp4/開始徵件.mp4"
              width={200}
              height={200}
              autoPlay loop muted playsInline style={{ objectFit: 'cover', borderRadius: '1rem', background: '#000' }} />
          </div>
        )}
      <Image src="/設計作品/design_3.png" alt="design_3" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
      <Image src="/設計作品/design_4.png" alt="design_4" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
      <Image src="/設計作品/design_5.png" alt="design_5" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
      <Image src="/設計作品/design_6.png" alt="design_6" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
      <Image src="/設計作品/design_7.png" alt="design_7" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
      <Image src="/設計作品/design_8.png" alt="design_8" width={1200} height={800} style={{objectFit:'cover', width:'100%', height:'auto', margin:0, padding:0}} />
      
      <div className="w-full bg-black py-8 flex-shrink-0">
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