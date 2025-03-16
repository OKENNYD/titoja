"use client"
import Image from "next/image";
import Images from "@/_util/constants/images";
import Rate from "@/components/Rate/Rate";
import Product from "@/components/Card/Product";
import { ChevronDown, Phone, Mail, Globe2 } from "lucide-react";
import { useState, useEffect } from "react";
export default function Shop() {
  let [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.filter(good => good.id <= 40))})})
  return (
    <div className="px-14 max-md:px-2 py-2 w-full h-auto">
      <div className="w-full gap-2 flex items-center justify-center">
        <Image
          src={Images.avatar}
          alt="shop logo"
          className="size-16 aspect-square rounded-full"
        />
          <div className="flex flex-col gap-2">
            <p className="text-lg text-dim">
              Grace Oyetade Store
            </p>
            <div className="flex -my-2 items-center">
              <Rate size={18} rate={4.5} />
              <span className="text-sm text-dim">4.5</span>
            </div>
            <ul className="flex gap-4 text-dim">
              <li className="flex flex-col justify-center items-center text-xs">
                  <span>1.5k</span>
                <p>Followers</p>
              </li>
              <li className="flex flex-col justify-center items-center text-xs">
                  <span>200+</span>
                <p>Sales</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-end text-sm md:ml-4">
            <div className="flex gap-2 items-center text-dim">
              <Phone strokeWidth={1} size={15} />
              <a className="hover:text-primary" href="tel:+2349070387981">
                +2349070387981
              </a>
            </div>
            <div className="flex gap-2 items-center text-dim">
              <Mail strokeWidth={1} size={15} />
              <a className="hover:text-primary" href="mailto:info@titaoja.com">
                info@titaoja.com
              </a>
            </div>
            <div className="flex gap-2 items-center text-dim">
              <Globe2 strokeWidth={1} size={15} />
              <address className="hover:text-primary">Abeokuta, Ogun State, Nigeria.</address>
            </div>
        </div>
      </div>
      <div className="w-full h-auto rounded-2xl p-2">
        <h3 className="text-slate-600 ps-2 font-medium text-lg">Store</h3>
        <div className="w-auto flex h-fit flex-wrap">
          {products?.map((_, i) => (
            <Product
              src={Images.img_4}
              price={_.price}
              url={_.title}
              id={_.id}
              card={true}
              discount={_.discountPercentage.toFixed(0)}
              ratings={_.rating.toFixed(1)}
              ratingsCount={_.stock}
              title={_.title}
              key={i}
            />
          ))}
        </div>
        <div className="w-full items-center justify-center gap-2 flex py-4">
          <button
          name="show more"
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
