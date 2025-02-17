"use client"
import Image from "next/image";
import Images from "@/_util/constants/images";
import Rate from "@/components/Rate/Rate";
import Product from "@/components/Card/Product";
import goods from "@/_util/api/goods";
import { ChevronDown, Call, Mail, Location } from "lucide-react";
import { useState } from "react";
export default function Shop() {
  let [goodsCount, setGoodsCount] = useState(40)
  let filteredGoods = goods.filter(good => good.id <= goodsCount)
  return (
    <div className="px-8 max-md:px-2 py-2 w-full h-auto">
      <div className="w-full px-2 gap-4 flex">
        <Image
          src={Images.avatar}
          alt="shop logo"
          className=" w-32 max-md:w-20 h-auto aspect-square rounded-full"
        />
        <div className="w-full flex justify-between max-md:flex-col py-2">
          <div className="flex flex-col gap-2">
            <p className="font-medium text-3xl text-slate-600">
              Grace Oyetade Store
            </p>
            <div className="flex ps-2 items-center gap-1">
              <Rate size={6} rate={4.5} />
              <span className="text-base text-dim font-normal">4.5</span>
            </div>
            <div className="flex gap-4 text-base text-dim px-2">
              <span>20+ visits</span>
              <span>20+ followers</span>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="flex gap-2 items-center text-dim">
              <Call strokeWidth={1} />
              <a className="hover:text-primary " href="tel:+2349070387981">
                +2349070387981
              </a>
            </div>
            <div className="flex gap-2 items-center text-dim">
              <Mail strokeWidth={1} />
              <a className="hover:text-primary " href="mailto:info@titaoja.com">
                info@titaoja.com
              </a>
            </div>
            <div className="flex gap-2 items-center text-dim">
              <Location strokeWidth={1} />
              <address>FUNAAD Road, Abeokuta, Ogun State, Nigeria.</address>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto rounded-2xl p-2">
        <h3 className="text-slate-600 ps-2 font-medium text-lg">Products</h3>
        <div className="w-auto flex content-center flex-wrap gap-2 justify-evenly items-center">
          {filteredGoods?.map((_, i) => (
            <Product
              src={Images.img_4}
              price={_.price}
              url={_.title}
              id={_.id}
              discount={_.discountPercentage.toFixed(0)}
              ratings={_.rating}
              ratingsCount={_.stock}
              title={_.title}
              key={i}
            />
          ))}
        </div>
        <div className="w-full items-center justify-center gap-2 flex py-4">
          <button
            onClick={() => setGoodsCount(goodsCount + 15)}
            className=" text-base bg-primary rounded-full text-white font-semibold px-4 py-1 flex gap-1 justify-center items-center"
          >
            Show More
            <ChevronDown strokeWidth={1} />
          </button>
        </div>
      </div>
      <div className="">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat natus
          atque dolores in eos aliquam animi sed nemo vero cumque mollitia harum
          ad modi, ea ratione eius eum doloremque hic.
        </p>
      </div>
    </div>
  );
}
