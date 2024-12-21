"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Images from "@/_util/constants/images";
import { IoAdd, IoHeart, IoRemove, IoClose, IoChevronForward, IoHeartOutline, IoTrashBinOutline, IoTrashOutline } from "react-icons/io5";
import { useGlobalContext } from "@/_util/constants/context";
export default function List(
  {
    price,
    discount,
    ratings,
    stock,
    sold,
    url,
    id }
) {
  const { currencyCode } = useGlobalContext();
  let [stockCount, setStockCount] = useState(0)
  let [liked, setLiked] = useState(false)
  let [discountedPrice, setDiscountedPrice] = useState();
  let title = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi"
  useEffect(() => {
    setDiscountedPrice((price - (discount / 100) * price).toFixed(2));
  }, [])
  return (
    <div className="relative flex items-center ">
      <div className="transition-shadow w-full h-36 max-md:h-24 rounded-xl box-border p-2 dark:bg-dark bg-white flex gap-2 items-center" >
        <Image
          src={Images.dimension}
          alt="product img"
          className="aspect-square rounded-xl h-full w-auto"
          priority
        />
        <div className="h-full w-full flex flex-col ">
          <Link href={"item/"+id+"/"+title}>
            <p className="sm:hidden capitalize font-semibold text-lg max-md:text-sm max-md:font-bold text-dim dark:text-gray-200 text-ellipsis ">{title.length > 20 ? title.slice(0, 20) + "..." : title}</p>
            <p className="max-md:hidden capitalize font-bold text-xl max-md:text-sm max-md:font-bold text-dim dark:text-gray-200 text-ellipsis ">{title.length > 20 ? title.slice(0, 25) + "..." : title}</p>
          </Link>  
          <div className=" w-full flex justify-between items-center">
            <div className="">
              <div className="add_ons w-auto h-full flex gap-2 text-sm max-md:text-xs text-slate-400">
                <div className=" bg-red-800 rounded-full px-2 w-auto h-full aspect-square"></div>
                <div className=" bg-gray-200 rounded-full px-2 flex justify-center items-center">cotton</div>
                <div className=" bg-gray-200 rounded-full px-2 flex justify-center items-center">42&quot;</div>
              </div>
              <div className="h-full font-medium text-gray-400 text-xs py-1 max-md:hidden">
                <span>234+ sold</span>
              </div>
              <div className="price">
                <p className=" text-xl font-bold flex items-baseline max-md:text-lg text-dim dark:text-gray-200">
                  <span className=" text-sm">{currencyCode}</span>
                  {discountedPrice}
                </p>
              </div>
              <a href="store/name" className="store_owner flex items-center text-gray-400 font-semibold max-md:text-sm text-sm ">
                <p>Lakeys stores</p>
                <IoChevronForward />
              </a>
            </div>
            <div className=" gap-2 max-md:gap-1 flex justify-between me-4 max-md:me-2 items-center">
              <span onClick={()=>setLiked(!liked)} className=" text-3xl max-md:text-xl text-red-600 rounded-full">
                {liked ? <IoHeart /> : <IoHeartOutline className="text-gray-400" />}
              </span>
              <div className=" p-1 w-5/6 gap-2 max-md:gap-1 flex text-dim items-center text-xl max-md:text-sm outline-0 border-0 cursor-pointer ">
                <button onClick={(e) => {e.currentTarget.disabled = true; setStockCount(stockCount--)}} className=" text-2xl text-white bg-primary dark:bg-secondary rounded-full" >
                  <IoRemove />
                </button>
                <span className=" w-full border-0 outline-0 text-center bg-transparent">{stockCount}
                </span>
                <button onClick={()=>setStockCount(stockCount++)} className=" text-2xl text-white bg-primary dark:bg-secondary rounded-full" >
                  <IoAdd />
                </button>
              </div>
              <IoTrashOutline className="text-2xl text-red-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
