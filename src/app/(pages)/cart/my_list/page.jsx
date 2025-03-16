"use client";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Product from "@/components/Card/Product";
import images from "@/_util/constants/images";
import Loader from "@/components/Card/Loader";
export default function My_List() {
  let [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.filter(good => good.id <= 15))})})
  return (
    <div className="w-full h-auto pt-2 max-md:pt-0">
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
              card={true}
            />
          );
        }) || <Loader />}
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
  );
}
