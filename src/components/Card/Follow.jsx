import images from "@/_util/constants/images"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users } from "lucide-react"
export default function Follow() {
  return (
    <div className="w-full h-auto rounded-xl hover:scale-105 hover:bg-opacity-90 hover:bg-white  hover:p-2 p-2">
        <Link href={"shop"+"kidet"}></Link>
      <Image src={images.icon} alt="image" className="w-full h-auto aspect-square" />
      <div className="">
        <p className=" text-center text-dark font-bold text-lg line-clamp-1">Kidet stores</p>
        <div className="w-full justify-center gap-4 flex text-dim">
            <div className="flex flex-col items-center justify-center">
              <Heart strokeWidth={1} size={20}/>
              <p className=" font-semibold text-sm">123</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Users strokeWidth={1} size={20}/>
              <p className=" font-semibold text-sm">123</p>
            </div>
        </div>
      </div>
    </div>
  )
}
