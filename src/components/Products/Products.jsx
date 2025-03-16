"use client";
import Product from "../Card/Product";
import images from "@/_util/constants/images";
import Link from "next/link";
import Loader from "../Card/Loader";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
export default function Products({params}) {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)})
      },[])
  return (
    <div className="w-full h-auto px-14 max-md:px-1">
      <p className="font-bold text-2xl max-md:text-xl text-gray-600 text-center py-1">
        Just for you
      </p>
      <div className="w-full h-fit flex-wrap flex border-collapse">
        {products?.map((_p, j) => {
          return (
            <Product
              src={_p.image}
              price={_p.offers.price*1000}
              url={_p.url}
              id={_p.id}
              discount={10}
              ratings={_p.rating.rate.toFixed(1)}
              ratingsCount={_p.rating.count}
              title={_p.name}
              card={true}
              key={j}
            />
          );
        }) || <Loader />}
      </div>
      <div className="w-full items-center justify-center gap-2 flex py-4">
        <button name="more" className=" text-base bg-primary dark:bg-secondary rounded-full text-white font-semibold px-4 py-1 flex gap-1 justify-center items-center">
          Show More
          <ChevronDown strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
