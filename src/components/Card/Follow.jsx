import images from "@/_util/constants/images"
import Image from "next/image"
import Link from "next/link"
import Rating from "../Rate/Rate"
export default function Follow() {
  let ratings = Math.floor(Math.random()*5)
  return (
    <div className="w-1/5 max-md:w-full h-auto p-2">
        <Link href={"shop"+"kidet"} className=" flex flex-col items-center">
        <Image src={images.icon} alt="image" className="w-full h-auto aspect-square" />
        <p className=" text-center text-dim text-lg line-clamp-1">Kidet stores</p>
          <Rating rate={ratings} size={20}/>
        <div className="w-full justify-center gap-2 text-base flex text-dim">
            <div className="flex flex-col items-center justify-center">
              <span>12k</span>
              <p className="-my-0.5 font-medium text-sm">Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span>300+</span>
              <p className="-my-0.5 font-medium text-sm">Reviews</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span>{ratings}</span>
              <p className="-my-0.5 font-medium text-sm">Rating</p>
            </div>
        </div>
        <div className="flex gap-2 pt-2">
          <div className="bg-secondary rounded-full w-1/2 text-white text-nowrap h-auto px-2 py-0.5">Unfollow</div>
          <div className="w-1/2 text-dim hover:text-secondary hover:underline text-nowrap h-auto px-2 py-0.5">Visit store</div>
        </div>
        </Link>
    </div>
  )
}  
