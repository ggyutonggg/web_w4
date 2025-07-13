'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useAutoScroll } from '../hooks/useAutoScroll';
import CurvedLoop from '../components/CurvedLoop';

export default function Home() {
  const [hide, setHide] = useState(false);
  const [startBounce, setStartBounce] = useState(false);
  const overlayRef = useRef(null);
  const [toggle, setToggle] = useState(true);
  
  // 自動滾動效果
  const containerRef = useAutoScroll(800);

  // 切換 about_abtme 2.1.png 和 2.2.png
  useEffect(() => {
    if (!hide) return;
    const interval = setInterval(() => {
      setToggle((prev) => !prev);
    }, 500); // 一秒兩次
    return () => clearInterval(interval);
  }, [hide]);

  // 只在每個新分頁第一次進入網站時顯示動畫（用 sessionStorage）
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('hasSeenHomeAnimation')) {
        setHide(true);
      }
    }
  }, []);

  useEffect(() => {
    if (hide && typeof window !== 'undefined') {
      sessionStorage.setItem('hasSeenHomeAnimation', 'true');
    }
  }, [hide]);

  // 讓右側內容高度和左側欄一致
  // 左側欄高度由 layout 設定為 h-full，外層 flex 容器為 h-screen
  // 右側內容設 h-full 即可

  const handleOverlayClick = (e) => {
    const rect = overlayRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    if (clickY > rect.height * 2 / 3) {
      setStartBounce(true);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!hide && (
          <motion.div
            ref={overlayRef}
            className="fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center bg-black"
            initial={{ y: 0, scale: 1, opacity: 1 }}
            animate={startBounce ? { y: -100, scale: 1.1, transition: { y: { type: 'spring', stiffness: 400, damping: 15 }, scale: { duration: 0.15 } } } : {}}
            exit={{ y: '-100vh', opacity: 0, transition: { duration: 0.5 } }}
            onAnimationComplete={() => {
              if (startBounce) setTimeout(() => setHide(true), 150);
            }}
            onClick={handleOverlayClick}
            style={{ touchAction: 'manipulation', cursor: 'pointer' }}
          >
      <Image 
              src="/about/about_封面.png"
              alt="about 封面"
        fill 
              style={{ objectFit: 'cover', userSelect: 'none' }}
        priority
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* 新內容：右側內容高度和左側欄一致，寬度不變 */}
      {hide && (
        <div ref={containerRef} className="w-full h-full flex flex-col items-stretch justify-start overflow-y-auto">
          <div className="w-full h-full rounded-2xl bg-white flex flex-col p-0 overflow-y-auto">
            <div className="relative w-full">
              <img
                src="/about/about_abtme 1.png"
                alt="about_abtme 1"
                style={{ width: '100%', height: 'auto', display: 'block', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                draggable={false}
              />
            </div>
            <div className="relative w-full">
              <img
                src={toggle ? "/about/about_abtme 2.1.png" : "/about/about_abtme 2.2.png"}
                alt="about_abtme 2"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                draggable={false}
              />
            </div>
            
            {/* 文字跑馬燈 */}
            <div className="w-full bg-black py-8">
              <CurvedLoop 
               marqueeText="OFFER ✦ All-in-One Ability Pack ✦ OFFER ✦ All-in-One Ability Pack ✦ "
               speed={2}
               curveAmount={500}
               direction="right"
               className="custom-text-style"
             />
            </div>
            
            {/* about_abt 4.png */}
            <div className="relative w-full">
              <img
                src="/about/about_abt 4.png"
                alt="about_abt 4"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                draggable={false}
              />
            </div>
            
            {/* 第二個文字跑馬燈 */}
            <div className="w-full bg-black py-8">
              <CurvedLoop 
                marqueeText="OFFER ✦ All-in-One Ability Pack ✦ OFFER ✦ All-in-One Ability Pack ✦ "
                speed={2}
                curveAmount={500}
                direction="right"
                className="custom-text-style"
              />
            </div>
            
            <div className="relative w-full">
              <img
                src="/about/about_abtme 3.png"
                alt="about_abtme 3"
                style={{ width: '100%', height: 'auto', display: 'block', borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}