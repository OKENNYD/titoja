"use client";
import goods from "@/_util/api/goods";
import images from "@/_util/constants/images";
import Food from "@/components/Card/Food";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
export default function Foods() {
  let [goodsCount, setGoodsCount] = useState(35);
  let filteredGoods = goods.filter((good) => good.id <= goodsCount);
  return (
    <section className="px-10">
      <div className="banner w-full h-auto relative flex justify-center items-center">
        <Image alt="dish" className="w-full h-auto aspect-[3/1] rounded-2xl" src={images.dish}/>
        <form encType="utf-8" method="POST" className="w-3/5 absolute bg-white h-12 flex p-2 rounded-full gap-2 text-lg px-4">
          <input
            type="search"
            name="search"
            placeholder="Search dish..."
            className="w-full marker:text-dim h-full bg-transparent outline-none caret-secondary"
          />
        </form>
      </div>
      <div className="py-4 flex flex-col gap-2">
        <p className="font-semibold text-2xl border-l-4 border-primary p-1">Dishes</p>
        <div className="flex gap-2">
        <div className="w-full h-fit flex-wrap flex">
          {filteredGoods?.map((_, i) => (
            <Food
              src={images.food}
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
      </div>
      </div>
      <div className="w-full items-center justify-center gap-2 flex py-4">
        <button
        name="show more"
          onClick={() => setGoodsCount(goodsCount + 18)}
          className=" text-base bg-primary rounded-full text-white font-semibold px-4 py-1 flex gap-1 justify-center items-center"
        >
          Show More
          <ChevronDown strokeWidth={1} />
        </button>
      </div>
    </section>
  );
}
