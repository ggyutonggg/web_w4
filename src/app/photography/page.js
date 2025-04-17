import Image from "next/image";

export default function CatePainting() {
  return (
    <div className="w-full h-full bg-gray-900 flex flex-col justify-start items-center rounded-2xl py-12 px-6 overflow-y-auto">
      
      <div className="flex flex-col w-full">
        <h3 className="mb-2 text-sm md:text-base text-gray-100">
          金勇影展投展作品
        </h3>
        <h1 className="text-xl md:text-2xl font-bold mb-4 text-gray-100">
          「呱」
        </h1>
        <h3 className="mt-4 mb-1 text-sm md:text-base text-gray-100">
          本片通過一種近乎靜默的荒謬語彙，重構現代人與制度之間的情慾與勞動關係。
        </h3>
        <h3 className="mt-1 text-sm md:text-base text-gray-100">
          我們借鏡30至60年代歐洲喜劇的節奏與形式，導入台灣本土的信仰象徵與儀式語言，進行一次文化解構的輕盈實驗。
        </h3>
      </div>

      <div className="flex flex-col w-full gap-4 md:gap-6 mt-4 md:mt-6">
        {/* 響應式圖片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-6">
          <div className="w-full h-0 pb-[75%] rounded-2xl relative overflow-hidden">
            <Image 
              src="/導演作品/1/1.png" 
              alt="導演作品1" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full h-0 pb-[75%] rounded-2xl relative overflow-hidden">
            <Image 
              src="/導演作品/1/2.png" 
              alt="導演作品2" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full h-0 pb-[75%] rounded-2xl relative overflow-hidden">
            <Image 
              src="/導演作品/1/3.png" 
              alt="導演作品3" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full h-0 pb-[75%] rounded-2xl relative overflow-hidden">
            <Image 
              src="/導演作品/1/4.png" 
              alt="導演作品4" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full h-0 pb-[75%] rounded-2xl relative overflow-hidden">
            <Image 
              src="/導演作品/1/5.png" 
              alt="導演作品5" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full h-0 pb-[75%] rounded-2xl relative overflow-hidden">
            <Image 
              src="/導演作品/1/6.png" 
              alt="導演作品6" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* 第二個作品 */}
      <div className="flex flex-col w-full mt-8 md:mt-12">
        <h3 className="mb-2 text-sm md:text-base text-gray-100">
          第二屆政大電影節宣傳片
        </h3>
        <h1 className="text-xl md:text-2xl font-bold mb-4 text-gray-100">
          「不安主義宣言」
        </h1>
        <h3 className="mt-4 mb-1 text-sm md:text-base text-gray-100">
          電影應勇敢直面人類的困境，並以真實的影像表現出現代生活中的混亂與不安。
        </h3>
        <h3 className="mt-1 text-sm md:text-base text-gray-100">
          拒絕盲目崇拜文明，將不安視為電影的語法，以此宣告電影與人類不安的緊密關係。
        </h3>
      </div>

      <div className="flex flex-col w-full gap-4 md:gap-6 mt-4 md:mt-6">
        {/* 響應式圖片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-6">
          <div className="w-full h-0 pb-[62.5%] rounded-2xl relative overflow-hidden">
            <Image 
              src="/導演作品/2/1.png" 
              alt="導演作品1" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full h-0 pb-[62.5%] rounded-2xl relative overflow-hidden">
            <Image 
              src="/導演作品/2/2.png" 
              alt="導演作品2" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full h-0 pb-[62.5%] rounded-2xl relative overflow-hidden">
            <Image 
              src="/導演作品/2/3.png" 
              alt="導演作品3" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full h-0 pb-[62.5%] rounded-2xl relative overflow-hidden">
            <Image 
              src="/導演作品/2/4.png" 
              alt="導演作品4" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full h-0 pb-[62.5%] rounded-2xl relative overflow-hidden">
            <Image 
              src="/導演作品/2/5.png" 
              alt="導演作品5" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full h-0 pb-[62.5%] rounded-2xl relative overflow-hidden">
            <Image 
              src="/導演作品/2/6.png" 
              alt="導演作品6" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 