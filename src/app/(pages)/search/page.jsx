"use client";
import { IoChevronDown } from "react-icons/io5";
import Product from "@/components/Card/Product";
import goods from "@/_util/api/goods";
import { useState } from "react";
import images from "@/_util/constants/images";
import { useSearchParams } from "next/navigation";
import Aside from "@/components/Aside/Aside";
import Filter from "@/components/Nav/Filter";
export default function Search() {
  let searchParams = useSearchParams();
  let [goodsCount, setGoodsCount] = useState(20);
  let filteredGoods = goods.filter((good) => good.id <= goodsCount);
  return (
      <div className="w-full py-2 px-14 max-md:px-2 flex">
        <Aside/>  
        <div className="w-5/6 ps-4 max-md:w-full">
         <Filter/>
          <div className="flex gap-1 items-center text-lg text-dim">
            <p>Search result for &quot;{searchParams.get("product")}&quot;</p>
          </div>
          <div className="w-full h-fit p-2 flex overflow-x-auto gap-1 scroll-none">
            {filteredGoods?.map((_, i) => (
              <Product
                src={images.img_4}
                price={_.price}
                url={_.title}
                id={_.id}
                discount={_.discountPercentage.toFixed(0)}
                discountedPrice={(
                  _.price -
                  (_.discountPercentage / 100) * _.price
                ).toFixed(2)}
                ratings={_.rating}
                ratingsCount={_.stock}
                title={
                  _.title.length > 20 ? _.title.slice(0, 15) + "..." : _.title
                }
                key={i}
              />
            ))}
          </div>
          <div className="w-full items-center justify-center gap-2 flex py-4">
            <button
              onClick={() => setGoodsCount(goodsCount + 12)}
              className=" text-base bg-primary rounded-full text-white font-semibold px-4 py-1 flex gap-1 justify-center items-center"
            >
              Show More
              <IoChevronDown />
            </button>
          </div>
        </div>
      </div>
  );
}
