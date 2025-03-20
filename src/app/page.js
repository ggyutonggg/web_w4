import Image from "next/image";

import IMG_6654 from "@/../public/IMG_6654.jpg";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center"> 

      <div className="w-[600px] h-[90vh] rounded-2xl bg-white flex justify-start 
       items-center flex-col p-[30px] pt-[80px] overflow-y-auto">

        <Image src={IMG_6654} alt="avatar" className="w-[80px] h-[80px] rounded-full" />
        <h1 className="mt-2">謝雨彤</h1>
        <p className="max-w-[380px] text-center">
          廣電三，興趣攝影繪畫，MBTI是INTP。
        </p>
        
        {/* 社群連結 */}
        <div className="flex gap-2 my-5">
          <a href="https://www.instagram.com/_ytng.o5p/" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
          <a href="https://www.instagram.com/_ytng.o5p/" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
          <a href="https://www.instagram.com/_ytng.o5p/" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
          <a href="https://www.instagram.com/_ytng.o5p/" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
          <a href="https://www.instagram.com/_ytng.o5p/" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
          </a>
        </div>

        {/* 頁面切換 */}
        <div className="w-full flex flex-col gap-2">
          <div className="w-full h-[84px] bg-gray-300 rounded-2xl">學經歷</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類一</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類二</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類三</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類一</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類二</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類三</div>
          <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類一</div>
        
        </div>

      </div>

    </div>
  );
}
