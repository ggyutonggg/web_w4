'use client';
import CurvedLoop from '../../components/CurvedLoop';
import { useAutoScroll } from '../../hooks/useAutoScroll';

export default function Coding() {
  // 自動滾動效果
  const containerRef = useAutoScroll(800);
  
  return (
    <div ref={containerRef} className="w-full h-full bg-black text-white p-8 overflow-y-auto">
      {/* CurvedLoop component at the top */}
      <div className="mb-8">
        <CurvedLoop 
          marqueeText="CREATIVE ✦ CODING ✦ DESIGN ✦ PUBLISH ✦  "
          speed={3}
          curveAmount={500}
          direction="right"
          className="custom-text-style"
        />
      </div>
      
      {/* Video section */}
      <div className="mb-8">
        <video 
          className="w-full h-auto rounded-lg shadow-lg"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/Animated-iPhone-mockups.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Second CurvedLoop component after video */}
      <div className="mb-8">
        <CurvedLoop 
          marqueeText="CREATIVE ✦ CODING ✦ DESIGN ✦ PUBLISH ✦  "
          speed={3}
          curveAmount={500}
          direction="right"
          className="custom-text-style"
        />
      </div>
      
      {/* Coding project images with links */}
      <div className="space-y-8">
        <div className="mb-8">
          <a 
            href="https://put-the-shot.vercel.app/game/RulesPanel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative group overflow-hidden rounded-lg"
          >
            <img 
              src="/coding/website_1.png" 
              alt="Coding Project 1" 
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="text-center">
                <span className="text-white text-2xl font-bold tracking-wider">view site</span>
                <div className="w-12 h-0.5 bg-white mt-2 mx-auto rounded-full"></div>
              </div>
            </div>
          </a>
        </div>
        
        <div className="mb-8">
          <a 
            href="https://divingbunny.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative group overflow-hidden rounded-lg"
          >
            <img 
              src="/coding/website_2.png" 
              alt="Coding Project 2" 
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="text-center">
                <span className="text-white text-2xl font-bold tracking-wider">view site</span>
                <div className="w-12 h-0.5 bg-white mt-2 mx-auto rounded-full"></div>
              </div>
            </div>
          </a>
        </div>
        
        <div className="mb-8">
          <a 
            href="https://wet-market.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative group overflow-hidden rounded-lg"
          >
            <img 
              src="/coding/website_3.png" 
              alt="Coding Project 3" 
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <div className="text-center">
                <span className="text-white text-2xl font-bold tracking-wider">view site</span>
                <div className="w-12 h-0.5 bg-white mt-2 mx-auto rounded-full"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
} 