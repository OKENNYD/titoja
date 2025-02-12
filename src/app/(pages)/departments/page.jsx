"use client"
import { IoChevronDown, IoChevronForward } from "react-icons/io5";
import Product from "@/components/Card/Product"
import goods from "@/_util/api/goods"
import {useState} from "react"
import images from "@/_util/constants/images";
import { useSearchParams } from "next/navigation";
export default function Slug() {
  let searchParams = useSearchParams()
  let [goodsCount, setGoodsCount] = useState(20)
  let filteredGoods = goods.filter(good => good.id <= goodsCount)
  return (
    <div className="max-md:px-4 px-14">
      <div className="sm:px-8 gap-2 w-full h-auto">
        <div className="flex gap-1 items-center text-lg text-dim">
        {searchParams.get("department")}
        <IoChevronForward/>
        {searchParams.get("category")}
        <IoChevronForward/>
        {searchParams.get("segment")}
        <IoChevronForward/>
      </div>
      <div className="w-full h-fit p-2 flex overflow-x-auto gap-1 scroll-none">
        {filteredGoods?.map((_,i)=>(
          <Product src={images.img_4} price={_.price} url={_.title} id={_.id} discount={_.discountPercentage.toFixed(0)} discountedPrice={(_.price-(_.discountPercentage / 100) * _.price).toFixed(2)} ratings={_.rating.toFixed(1)} ratingsCount={_.stock} title={_.title} key={i} />
        ))}
      </div>
      <div className="w-full items-center justify-center gap-2 flex py-4">
        <button onClick={()=>setGoodsCount(goodsCount + 12)} className=" text-base bg-primary rounded-full text-white font-semibold px-4 py-1 flex gap-1 justify-center items-center">Show More
          <IoChevronDown />
        </button>
      </div>
      </div>
    </div>
  );
}
