import Image from "next/image";

export default function DesignPage() {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6 overflow-y-auto">
      
      {/* 文字敘述 */}
      <div className="flex flex-col w-full">
        <h3 className="mt-4 mb-1 text-sm md:text-base text-gray-700">
          擅長使用 Photoshop、Illustrator 與 InDesign 等設計軟體，熟悉數位與印刷視覺的轉換與應用。
        </h3>
        <h3 className="mt-1 text-sm md:text-base text-gray-700">
          曾參與多場活動視覺設計，根據不同主題與需求調整風格，兼顧視覺美感與實用性。
        </h3>
        <h3 className="mt-1 text-sm md:text-base text-gray-700">
          設計對我而言不只是美的表達，更是一種溝通與實驗的過程。樂於與不同領域的夥伴合作，從討論中找到視覺語言的新可能。
        </h3>
      </div>

      {/* 圖標行 */}
      <div className="flex flex-row justify-between w-full mt-8 md:mt-12">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 2.JPG" 
            alt="圖標1" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 3.JPG" 
            alt="圖標2" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 2.JPG" 
            alt="圖標3" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 3.JPG" 
            alt="圖標4" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 2.JPG" 
            alt="圖標5" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 3.JPG" 
            alt="圖標6" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 2.JPG" 
            alt="圖標7" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 3.JPG" 
            alt="圖標8" 
            fill 
            className="object-cover"
          />
        </div>
      </div>

      {/* 設計作品圖片 - 一排一個圖片，調整高度 */}
      <div className="flex flex-col w-full mt-8 md:mt-12">
        {/* 第一張圖片 */}
        <div className="w-full h-0 pb-[50%] relative">
          <Image 
            src="/設計作品/Screenshot 2025-04-13 at 4.30.01 PM.png" 
            alt="設計作品1" 
            fill 
            className="object-contain"
          />
        </div>
        
        {/* 第二張圖片 */}
        <div className="w-full h-0 pb-[50%] relative">
          <Image 
            src="/設計作品/Screenshot 2025-04-13 at 4.30.10 PM.png" 
            alt="設計作品2" 
            fill 
            className="object-contain"
          />
        </div>
        
        {/* 第三張圖片 */}
        <div className="w-full h-0 pb-[50%] relative">
          <Image 
            src="/設計作品/Screenshot 2025-04-13 at 4.30.21 PM.png" 
            alt="設計作品3" 
            fill 
            className="object-contain"
          />
        </div>
        
        {/* 第四張圖片 */}
        <div className="w-full h-0 pb-[50%] relative">
          <Image 
            src="/設計作品/Screenshot 2025-04-13 at 4.30.29 PM.png" 
            alt="設計作品4" 
            fill 
            className="object-contain"
          />
        </div>
        
        {/* 第五張圖片 */}
        <div className="w-full h-0 pb-[50%] relative">
          <Image 
            src="/設計作品/Screenshot 2025-04-13 at 4.30.55 PM.png" 
            alt="設計作品5" 
            fill 
            className="object-contain"
          />
        </div>
        
        {/* 第六張圖片 */}
        <div className="w-full h-0 pb-[50%] relative">
          <Image 
            src="/設計作品/Screenshot 2025-04-13 at 4.31.03 PM.png" 
            alt="設計作品6" 
            fill 
            className="object-contain"
          />
        </div>
        
        {/* 第七張圖片 */}
        <div className="w-full h-0 pb-[50%] relative">
          <Image 
            src="/設計作品/Screenshot 2025-04-13 at 4.31.16 PM.png" 
            alt="設計作品7" 
            fill 
            className="object-contain"
          />
        </div>
      </div>

      {/* 底部圖標行 */}
      <div className="flex flex-row justify-between w-full mt-8 md:mt-12">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 2.JPG" 
            alt="圖標1" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 3.JPG" 
            alt="圖標2" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 2.JPG" 
            alt="圖標3" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 3.JPG" 
            alt="圖標4" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 2.JPG" 
            alt="圖標5" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 3.JPG" 
            alt="圖標6" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 2.JPG" 
            alt="圖標7" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
          <Image 
            src="/about/about icon 3.JPG" 
            alt="圖標8" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
} 