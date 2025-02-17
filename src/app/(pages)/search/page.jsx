"use client";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Product from "@/components/Card/Product";
import goods from "@/_util/api/goods";
import { useState } from "react";
import images from "@/_util/constants/images";
import { useSearchParams } from "next/navigation";
import Filter from "@/components/Aside/Filter";
import FilterPopUp from "@/components/popup/Filter";
export default function Search() {
  let searchParams = useSearchParams();
  let [goodsCount, setGoodsCount] = useState(21);
  let filteredGoods = goods.filter((good) => good.id <= goodsCount);
  return (
    <div className="w-full py-2 px-14 max-md:px-2 flex">
        <FilterPopUp/>
        <Filter/>
        <div className="w-5/6 ps-4 max-md:w-full">
          <div className="flex gap-1 items-center text-lg text-dim pb-2">
            <p>Result for &quot;{searchParams.get("product")}&quot;</p>
          </div>
          <div className="w-full h-fit flex-wrap gap-1 flex">
            {filteredGoods?.map((_, i) => (  
              <Product
                src={images.img_4}
                price={_.price}
                url={_.title}
                id={_.id}
                ratings={_.rating}
                ratingsCount={_.stock}
                title={_.title}
                key={i}
              />
            ))}
          </div>
          <div className="w-full bg-white rounded-full p-2 h-fit text-lg flex items-center justify-between gap-3 text-dim my-2">
        <ChevronLeft strokeWidth={2} className="text-secondary hover:bg-opacity-70 hover:bg-secondary hover:text-white rounded-full"/>
        <ul className="flex gap-2 text-base font-medium">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <ChevronRight strokeWidth={2} className="text-secondary hover:bg-opacity-70 hover:bg-secondary hover:text-white rounded-full"/>
      </div>
        </div>
      </div>
  );
}
