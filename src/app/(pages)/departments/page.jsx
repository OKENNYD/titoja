"use client"
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
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
        <div className="flex gap-1 items-center pb-1 text-lg text-dim">
        {searchParams.get("department")}
          <ChevronRight strokeWidth={1} />
        {searchParams.get("category")}
        <ChevronRight strokeWidth={1}/>
        {searchParams.get("segment")}
        <ChevronRight strokeWidth={1}/>
      </div>
      <div className="w-full h-fit flex-wrap gap-1 flex">
        {filteredGoods?.map((_,i)=>(
          <Product src={images.img_4} price={_.price} url={_.title} id={_.id}  ratings={_.rating.toFixed(1)} ratingsCount={_.stock} title={_.title} key={i} />
        ))}
      </div>
      <div className="w-full bg-white rounded-full p-2 h-fit text-lg flex items-center justify-between gap-3 text-dim my-2">
        <ChevronLeft strokeWidth={2} className="text-secondary hover:bg-opacity-70 hover:bg-secondary hover:text-white rounded-full"/>
        <ul className="flex gap-2 text-base font-medium">
          <li className="hover:text-primary">1</li>
          <li className="hover:text-primary">2</li>
          <li className="hover:text-primary">3</li>
          <li className="hover:text-primary">4</li>
          <li className="hover:text-primary">5</li>
        </ul>
        <ChevronRight strokeWidth={2} className="text-secondary hover:bg-opacity-70 hover:bg-secondary hover:text-white rounded-full"/>
      </div>
      </div>
    </div>
  );
}
