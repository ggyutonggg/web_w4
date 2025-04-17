import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const notoSansTC = Noto_Sans_TC({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-tc',
});

export const metadata = {
  title: "謝雨彤PORTFOLIO",
  description: "便宜好用勞力，你值得擁有！",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${notoSansTC.variable} antialiased`}
      >
        
        <div className="w-screen h-screen overflow-y-auto flex flex-col sm:flex-row gap-5 bg-stone-200 p-8">

          <div className="min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-gray-100 flex 
          justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden">
            
            <div className="flex justify-center items-center">
              <Image src="/頭像.jpg" alt="photo" width={80} height={80} className="rounded-full"/>
            </div>
            <h1 className="mt-2 text-gray-800 font-bold">雨桐 ʕʘ̅͜ʘ̅ʔ </h1>
            <p className="max-w-[400px] text-center text-gray-800">
              🐑 📦 ✨
            </p>
            
            {/* 社群連結 */}
            <div className="flex gap-2 my-5">
              <a href="https://www.instagram.com/_ytng.o5p/" target="_blank">
                <div className="bg-gray-700 w-[40px] h-[40px] rounded-full flex items-center justify-center">
                  <Image src="/icons/brand-instagram.svg" alt="Instagram" width={24} height={24} className="invert" />
                </div>
              </a>
              <a href="mailto:your.email@example.com">
                <div className="bg-gray-700 w-[40px] h-[40px] rounded-full flex items-center justify-center">
                  <Image src="/icons/mail.svg" alt="Email" width={24} height={24} className="invert" />
                </div>
              </a>
              <a href="https://www.facebook.com/may.cha.581/" target="_blank">
                <div className="bg-gray-700 w-[40px] h-[40px] rounded-full flex items-center justify-center">
                  <Image src="/icons/brand-facebook.svg" alt="Facebook" width={24} height={24} className="invert" />
                </div>
              </a>
            </div>

            {/* 頁面切換 */}
            <div className="w-full flex flex-col gap-2">
              
              <Link href="/about">
                <div className="w-full aspect-[736/434] rounded-xl text-white flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src="/側邊欄圖片/1.jpg" 
                    alt="關於我" 
                    fill 
                    className="object-cover"
                  />
                  <span className="relative z-10">關於我</span>
                </div>
              </Link>

              <Link href="/photography">
                <div className="w-full aspect-[736/434] rounded-xl text-white flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src="/側邊欄圖片/2.jpg" 
                    alt="導演作品" 
                    fill 
                    className="object-cover"
                  />
                  <span className="relative z-10">導演作品</span>
                </div>
              </Link>

              <Link href="/design">
                <div className="w-full aspect-[736/434] rounded-xl text-white flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src="/側邊欄圖片/3.jpg" 
                    alt="設計作品" 
                    fill 
                    className="object-cover"
                  />
                  <span className="relative z-10">設計作品</span>
                </div>
              </Link>
              
              <div className="flex justify-center items-center">
                <Image src="/頭像.jpg" alt="photo" width={80} height={80} className="rounded-full"/>
              </div>
              <div className="flex justify-center items-center">
                <Image src="/頭像.jpg" alt="photo" width={80} height={80} className="rounded-full"/>
              </div>
              <div className="flex justify-center items-center">
                <Image src="/頭像.jpg" alt="photo" width={80} height={80} className="rounded-full"/>
              </div>

            </div>

          </div>

          {children}

        </div>

      </body>
    </html>
  );
}
