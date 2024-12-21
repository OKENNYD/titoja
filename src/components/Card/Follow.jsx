import images from "@/_util/constants/images"
import Image from "next/image"
import Link from "next/link"
import { IoHeartOutline, IoPeopleOutline } from "react-icons/io5"
export default function Follow() {
  return (
    <div className="w-full h-auto rounded-xl sm:hover:scale-105 sm:hover:bg-opacity-90 dark:hover:bg-dark hover:bg-white  sm:hover:p-2 p-2">
        <Link href={"shop"+"kidet"}></Link>
      <Image src={images.icon} alt="image" className="w-full h-auto aspect-square" />
      <div className="">
        <p className=" text-center text-dark dark:text-gray-200 font-bold text-lg">Kidet stores</p>
        <div className="w-full justify-center gap-4 flex text-dim dark:text-gray-400">
            <div className="flex flex-col items-center justify-center">
              <IoHeartOutline size={20}/>
              <p className=" font-semibold text-sm">123</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <IoPeopleOutline size={20}/>
              <p className=" font-semibold text-sm">123</p>
            </div>
        </div>
      </div>
    </div>
  )
}
