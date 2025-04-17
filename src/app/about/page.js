import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center rounded-2xl relative overflow-y-auto">
      {/* 第一張背景圖片 */}
      <div className="w-full relative">
        <Image 
          src="/about/1.jpg" 
          alt="背景1" 
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
        
        {/* 第一張圖片左側文字 */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-10 max-w-[45%]">
          <div className="text-red-500 text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">u scroll, u linger,</h2>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">u zoom in.</h2>
            <p className="text-2xl md:text-3xl ">r u really into me?</p>
            <p className="text-2xl md:text-3xl ">or u just curious abt me?</p>
          </div>
        </div>
      </div>
      
      {/* 第二張背景圖片 */}
      <div className="w-full relative">
        <Image 
          src="/about/2.jpg" 
          alt="背景2" 
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
        
        {/* 第二張圖片右側文字 */}
        <div className="absolute top-1/4 right-8 transform -translate-y-1/2 z-10 max-w-[60%]">
          <div className="text-green-700 text-right">
            <p className="text-lg md:text-xl mb-2">is it curiosity or consumption?</p>
            <p className="text-lg md:text-xl mb-2">Am I a mind to be met, or just a mood to momentarily fill you?</p>
            <p className="text-lg md:text-xl mb-2">This portfolio is not a display—</p>
            <p className="text-lg md:text-xl mb-1">it's a mirror, a question,</p>
            <p className="text-lg md:text-xl mb-2">a trap disguised as design.</p>
            <p className="text-lg md:text-xl mb-2">So look closer.</p>
            <p className="text-lg md:text-xl mb-1">Do you see me?</p>
            <p className="text-lg md:text-xl">Or just something you want?</p>
          </div>
        </div>
      </div>
      
      {/* 第三張背景圖片 */}
      <div className="w-full relative">
        <Image 
          src="/about/about 22.jpg" 
          alt="背景3" 
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
        
        {/* 左上角文字 - 綠色 */}
        <div className="absolute top-8 left-8 z-10 max-w-[45%]">
          <div className="text-green-500 text-sm md:text-base leading-relaxed text-left">
            <p>「對影像語言本質的探索」。一種「存在的抵抗」</p>
            <p>試圖打破敘事的邏輯框架，重新建構觀眾與影像之間的關係。發出對時間流動性的挑戰。</p>
            <p>其實這是一種無法避免的創作衝動，</p>
            <p>一個內在聲音一直告訴我：「你不拍，它就不/存在。」</p>
          </div>
        </div>
        
        {/* 右下角文字 - 紅色 */}
        <div className="absolute bottom-8 right-8 z-10 max-w-[45%]">
          <div className="text-red-500 text-sm md:text-base leading-relaxed text-right">
            <p>設計回應了人與物之間潛在但被忽視的情感張力。</p>
            <p>形狀的解構並不是為了否定傳統語彙，</p>
            <p>而是重新詮釋使用者與空間之間的流動關係。</p>
            <p>設計不該只是視覺的衝擊，而是一種關於存在的對話。</p>
            <p>我們為什麼需要設計？</p>
            <p>我們真的理解我們所處的物質世界嗎？</p>
          </div>
        </div>
        
        {/* 中間位置 - 兩個圓形 icon 和文字 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center w-full max-w-4xl gap-60">
          {/* 左側 icon - 導演作品 */}
          <div className="flex flex-col items-center">
            <Link href="/photography">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 cursor-pointer">
                <Image 
                  src="/about/about icon 2.JPG" 
                  alt="導演作品" 
                  width={128} 
                  height={128} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-green-500 text-xl font-bold text-center w-32">導演作品</div>
            </Link>
          </div>
          
          {/* 右側 icon - 設計作品 */}
          <div className="flex flex-col items-center">
            <Link href="/design">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 cursor-pointer">
                <Image 
                  src="/about/about icon 3.JPG" 
                  alt="設計作品" 
                  width={128} 
                  height={128} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-red-500 text-xl font-bold text-center w-32">設計作品</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
