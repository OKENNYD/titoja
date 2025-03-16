"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Rate from "../Rate/Rate";
import AddCart from "../Icon/AddCart";
export default function Product({
  title,
  price,
  ratings,
  stock,
  tag,
  sold,
  url,
  src,
  id,
  card
}) { 
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",   
  });
  return (
    <div className={`relative ${card ? "md:w-1/6" : "md:w-1/4"} max-md:w-1/2 box-border duration-200 transition-transform hover:bg-opacity-5  hover:bg-secondary overflow-hidden rounded-xl p-2 max-md:p-1`}>
        <Link
          className="relative"
          href={"item/" + id}
        >
            <Image
              src={src}
              alt="product img"
              className="rounded-lg mx-auto aspect-square w-full h-auto"
              width={100}
              height={100}
              priority
            />
          <div className="w-auto p-1">
            <div className="flex items-center gap-1">
              <span className="bg-red-400 w-3.5 h-3.5 rounded-full"></span>
              <span className="bg-blue-400 w-3.5 h-3.5 rounded-full"></span>
              <span className="bg-green-400 w-3.5 h-3.5 rounded-full"></span>
              <span className="bg-gray-400 w-3.5 h-3.5 rounded-full"></span>
            </div>
            <p className="capitalize text-dark text-ellipsis text-lg max-md:text-base line-clamp-1">
              {title}
            </p>
            <div className="flex items-center">
              <Rate size={20} rate={ratings} className=" max-md:text-2xl flex text-primary" />
              <span className=" flex items-center text-sm gap-[2px] text-dim max-md:text-xs">
                {ratings}
              </span>
            </div>
            <div className=" flex w-full h-auto flex-wrap gap-2">
              <span className="text-base max-md:text-sm text-green-600 -my-1">
                Best seller
              </span>
            </div>
            <div className="price w-full items-baseline flex flex-col ">
              <p className="-my-px font-semibold flex items-baseline text-dim text-lg">
                {formatter.format(price)}
              </p>
              <h6 className="text-dim block text-sm -mt-1">37 in Stock</h6>
            </div>
          </div>
          <div className="absolute top-2 right-0 bg-secondary text-sm pr-1 pl-2 text-white rounded-l-full">20%</div>
        </Link>
        <div className="absolute bottom-4 right-4">
          <AddCart/>
        </div>
    </div>  
  );
}
