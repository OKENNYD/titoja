"use client";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Product from "@/components/Card/Product";
import { useState, useEffect } from "react";
import images from "@/_util/constants/images";
import { useSearchParams } from "next/navigation";
import Filter from "@/components/Aside/Filter";
export default function Search() {
  let searchParams = useSearchParams()
  let [products, setProducts] = useState([]);
      useEffect(() => {
        fetch("/api/products")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data.filter(good => good.id <= 17))})});
  return (
    <div className="w-full py-2 px-14 max-md:px-1 flex">
        <Filter/>
        <div className="w-5/6 ps-4 max-md:ps-0 max-md:w-full">
          <div className="flex gap-1 items-center text-lg text-dim">
            <p>Result for &quot;{searchParams.get("product")}&quot;</p>
          </div>
          <div className="w-full h-fit flex-wrap flex">
            {products?.map((_, i) => (  
              <Product
                src={images.img_4}
                price={_.price}
                url={_.title}
                id={_.id}
                ratings={_.rating}
                ratingsCount={_.stock}
                title={_.title}
                card={false}
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
