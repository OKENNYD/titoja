"use client";
import Select from "@/components/Select/Select";
import data from "@/_util/api/departments";
import goods from "@/_util/api/goods";
import images from "@/_util/constants/images";
import Food from "@/components/Card/Food";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import Image from "next/image";
export default function Foods() {
  let opts = data.map((val) => val.name);
  let [goodsCount, setGoodsCount] = useState(35);
  let filteredGoods = goods.filter((good) => good.id <= goodsCount);
  return (
    <section>
      <div className="banner w-full h-auto relative flex justify-center items-center">
        <Image alt="dish" className="w-full h-[450px]" src={images.dish}/>
        <form className="w-3/5 absolute bg-white h-12 flex p-2 rounded-full gap-2 text-lg">
          <Select
            primary={opts[1]}
            options={opts}
            style={
              "bg-primary rounded-full p-2 h-full w-auto relative box-border"
            }
          />
          <input
            type="search"
            name="search"
            placeholder="Search dish..."
            className="w-full marker:text-black h-full bg-transparent outline-none caret-secondary"
          />
        </form>
      </div>
      <div className="px-10 py-4 flex flex-col gap-2">
        <p className="font-semibold text-2xl border-l-2 border-primary p-2">Dishes</p>
        <div className="flex gap-2">
        <div className="w-full h-auto flex flex-wrap">
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
          onClick={() => setGoodsCount(goodsCount + 18)}
          className=" text-base bg-primary dark:bg-secondary rounded-full text-white font-semibold px-4 py-1 flex gap-1 justify-center items-center"
        >
          Show More
          <IoChevronDown />
        </button>
      </div>
    </section>
  );
}
