"use client";
import Product from "../Card/Product";
import images from "@/_util/constants/images";
import products from "@/_util/api/products";
import Link from "next/link";
import Loader from "../Card/Loader";
import { ChevronDown } from "lucide-react";
export default function Products() {
  return (
    <div className="w-full h-auto px-14 max-md:px-4">
      <p className="font-bold text-2xl text-gray-600 text-center -py-2">
        Just for you
      </p>
      <ul className="flex gap-2 w-full mb-2 text-dim px-2">
        <li className="flex gap-1 items-center text-lg font-semibold">All</li>
        <li className="flex gap-1 items-center text-lg font-semibold px-2 py-1 rounded-full hover:border-2 border-secondary">
          <Link href="#">Best Seller</Link>
        </li>
      </ul>
      <div className="w-full h-fit flex-wrap flex">
        {products?.map((_p, j) => {
          return (
            <Product
              src={images.img_3}
              price={_p.offers.price}
              url={_p.url}
              id={_p.mpn}
              discount={10}
              ratings={_p.rating.rate}
              ratingsCount={_p.rating.count}
              title={_p.name}
              key={j}
            />
          );
        }) || <Loader />}
      </div>
      <div className="w-full items-center justify-center gap-2 flex py-4">
        <button className=" text-base bg-primary dark:bg-secondary rounded-full text-white font-semibold px-4 py-1 flex gap-1 justify-center items-center">
          Show More
          <ChevronDown strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
