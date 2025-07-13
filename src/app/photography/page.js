'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAutoScroll } from '../../hooks/useAutoScroll';

export default function Photography() {
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);
  const images1 = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
  const images2 = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
  
  // 自動滾動效果
  const containerRef = useAutoScroll(800);

  // 自動輪播 - 第一個作品
  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentImageIndex1((prevIndex) => (prevIndex + 1) % images1.length);
    }, 3000);

    return () => clearInterval(interval1);
  }, [images1.length]);

  // 自動輪播 - 第二個作品
  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentImageIndex2((prevIndex) => (prevIndex + 1) % images2.length);
    }, 3000);

    return () => clearInterval(interval2);
  }, [images2.length]);

  // 處理第一個按鈕點擊
  const handleWatchClick1 = () => {
    window.open('https://www.bilibili.com/video/BV1zj411L7bF/', '_blank');
  };

  // 處理第二個按鈕點擊
  const handleWatchClick2 = () => {
    window.open('https://www.instagram.com/reel/C58SaXuSIx0/?utm_source=ig_web_copy_link&igsh=anF4dHQ2d2oxdzVy', '_blank');
  };

  // 處理第四個按鈕點擊
  const handleWatchClick4 = () => {
    window.open('https://www.instagram.com/reel/DIdNYLoT7pH/?utm_source=ig_web_copy_link&igsh=enc0d3p2c3djazRx', '_blank');
  };

  return (
    <div ref={containerRef} className="w-full h-full overflow-y-auto">
      {/* 第三個作品 */}
      <div className="w-full h-full rounded-2xl overflow-hidden relative mb-8">
        {/* 底層：description3.png */}
        <div className="w-full h-full relative">
            <Image 
            src="/導演作品/3/description3.png"
            alt="Description"
              fill 
            style={{ objectFit: 'cover' }}
            priority
            />
          </div>
        
        {/* 上層：YouTube影片 */}
        <div className="absolute inset-0 w-full h-full z-30 flex items-start justify-center pt-8">
          <div className="w-1/2 h-1/2">
            <iframe
              src="https://www.youtube.com/embed/c34nw9xtC48"
              title="YouTube video"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          </div>
          </div>

      {/* 第四個作品 */}
      <div className="w-full h-full rounded-2xl overflow-hidden relative mb-8">
        {/* description4.png */}
        <div className="w-full h-full relative">
            <Image 
            src="/導演作品/description4.png"
            alt="Description"
              fill 
            style={{ objectFit: 'cover' }}
            priority
            />
          </div>
        
        {/* btn_watch 按鈕 - 位置在右邊下方 */}
        <div className="absolute bottom-40 right-12 z-40">
          <button
            onClick={handleWatchClick4}
            className="transition-all duration-300 transform hover:scale-105"
          >
            <Image 
              src="/導演作品/btn_watch.png"
              alt="Watch Video"
              width={200}
              height={20}
              className="drop-shadow-lg"
            />
          </button>
        </div>
      </div>
      
      {/* 第二個作品 */}
      <div className="w-full h-full rounded-2xl overflow-hidden relative mb-8">
        {/* 下層：1.png 到 6.png 輪播（背景） */}
        <div className="w-full h-full relative">
          <Image
            src={`/導演作品/2/${images2[currentImageIndex2]}`}
            alt={`Image ${currentImageIndex2 + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
      </div>

        {/* 上層：description2.png（疊加在上方） */}
        <div className="absolute inset-0 w-full h-full">
            <Image 
            src="/導演作品/2/description2.png"
            alt="Description"
              fill 
            style={{ objectFit: 'cover' }}
            priority
            />
          </div>
        
        {/* btn_watch 按鈕 - 位置在右邊下方 */}
        <div className="absolute bottom-40 right-12 z-40">
          <button
            onClick={handleWatchClick2}
            className="transition-all duration-300 transform hover:scale-105"
          >
            <Image 
              src="/導演作品/btn_watch.png"
              alt="Watch Video"
              width={200}
              height={20}
              className="drop-shadow-lg"
            />
          </button>
          </div>
        
        {/* 輪播指示器 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images2.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex2(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentImageIndex2 ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
          </div>

      {/* 第一個作品 */}
      <div className="w-full h-full rounded-2xl overflow-hidden relative">
        {/* 下層：1.png 到 6.png 輪播（背景） */}
        <div className="w-full h-full relative">
            <Image 
            src={`/導演作品/1/${images1[currentImageIndex1]}`}
            alt={`Image ${currentImageIndex1 + 1}`}
              fill 
            style={{ objectFit: 'cover' }}
            priority
            />
          </div>
        
        {/* 上層：description1.png（疊加在上方） */}
        <div className="absolute inset-0 w-full h-full">
            <Image 
            src="/導演作品/1/description1.png"
            alt="Description"
              fill 
            style={{ objectFit: 'cover' }}
            priority
            />
          </div>
        
        {/* btn_watch 按鈕 - 位置在右邊下方 */}
        <div className="absolute bottom-40 right-12 z-40">
          <button
            onClick={handleWatchClick1}
            className="transition-all duration-300 transform hover:scale-105"
          >
            <Image 
              src="/導演作品/btn_watch.png"
              alt="Watch Video"
              width={200}
              height={20}
              className="drop-shadow-lg"
            />
          </button>
          </div>
        
        {/* 輪播指示器 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images1.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex1(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentImageIndex1 ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 