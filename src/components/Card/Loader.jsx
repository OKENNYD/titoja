import Image from 'next/image'
import images from "@/_util/constants/images"
export default function Loader() {
  return (
    <div className="max-2xl:w-1/6 max-xl:w-1/6 max-lg:w-1/4 max-md:w-1/4 max-sm:w-1/2 h-fit transition-shadow sm:hover:bg-opacity-90 rounded-xl sm:hover:p-2  p-1">
      <div className=" w-full relative  rounded-xl overflow-hidden">
        <div className="mx-auto aspect-square w-full h-auto p-10 bg-gray-200 animate-pulse">
          <Image
            src={images.loader}
            alt="loading"
            className="Imgfilter opacity-20"
          />
        </div>
      </div>
      <div className=" w-auto p-1 flex flex-col gap-1 ">
        <span className="w-full h-5 rounded-lg bg-gray-200 animate-pulse"></span>
        <span className="w-36 h-5 rounded-lg bg-gray-200 animate-pulse"></span>
        <span className="w-28 h-6 rounded-lg bg-gray-200 animate-pulse"></span>
        <span className="w-20 h-5 rounded-lg bg-gray-200 animate-pulse"></span>
      </div>
    </div>
  );
}
