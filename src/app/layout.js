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
  title: "ggyutonggg_portfolio",
  description: "便宜好用勞力，你值得擁有！",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/頭像.jpg" />
      </head>
      <body
        className={`${notoSansTC.variable} antialiased`}
      >
        
        <div className="w-screen h-screen flex flex-col sm:flex-row gap-5 bg-black p-8">

          <div className="min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-[#081aff] flex 
          justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden">
            
            <div className="flex justify-center items-center">
              <Image src="/頭像.jpg" alt="photo" width={80} height={80} className="rounded-full"/>
            </div>
            <h1 className="mt-2 text-white font-bold">雨彤 ʕʘ̅͜ʘ̅ʔ </h1>
            <p className="max-w-[400px] text-center text-white">
             22y ｜ NCCU RTV ｜ NCCU DCT
            </p>
            <p className="max-w-[400px] text-center text-gray-800">
              🐑 📦 ✨
            </p>
            
            {/* 社群連結 */}
            <div className="flex gap-2 my-5">
              <a href="https://www.instagram.com/_ytng.o5p/" target="_blank">
                <div className="bg-black w-[40px] h-[40px] rounded-full flex items-center justify-center">
                  <Image src="/icons/brand-instagram.svg" alt="Instagram" width={24} height={24} className="invert" />
                </div>
              </a>
              <a href="mailto:yutong.cha@gmail.com">
                <div className="bg-black w-[40px] h-[40px] rounded-full flex items-center justify-center">
                  <Image src="/icons/mail.svg" alt="Email" width={24} height={24} className="invert" />
                </div>
              </a>
              <a href="https://www.facebook.com/may.cha.581/" target="_blank">
                <div className="bg-black w-[40px] h-[40px] rounded-full flex items-center justify-center">
                  <Image src="/icons/brand-facebook.svg" alt="Facebook" width={24} height={24} className="invert" />
                </div>
              </a>
            </div>

            {/* 頁面切換 */}
            <div className="w-full flex flex-col gap-4">
              
              <Link href="/">
                <div className="w-10/12 aspect-[736/500] mx-auto rounded-xl text-white flex items-center justify-center relative overflow-hidden transition-transform duration-200 hover:scale-105 active:scale-105">
                  <Image 
                    src="/側邊欄圖片/btn_1.png" 
                    alt="關於我" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </Link>

              <Link href="/photography">
                <div className="w-10/12 aspect-[736/500] mx-auto rounded-xl text-white flex items-center justify-center relative overflow-hidden transition-transform duration-200 hover:scale-105 active:scale-105">
                  <Image 
                    src="/側邊欄圖片/btn_2.png" 
                    alt="導演作品" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </Link>

              <Link href="/design">
                <div className="w-10/12 aspect-[736/500] mx-auto rounded-xl text-white flex items-center justify-center relative overflow-hidden transition-transform duration-200 hover:scale-105 active:scale-105">
                  <Image 
                    src="/側邊欄圖片/btn_3.png" 
                    alt="設計作品" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </Link>

              <Link href="/coding">
                <div className="w-10/12 aspect-[736/500] mx-auto rounded-xl text-white flex items-center justify-center relative overflow-hidden transition-transform duration-200 hover:scale-105 active:scale-105">
                  <Image 
                    src="/側邊欄圖片/btn_4.png" 
                    alt="Coding" 
                    fill 
                    className="object-cover"
                  />
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
