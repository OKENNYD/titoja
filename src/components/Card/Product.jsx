"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Rate from "../Rate/Rate";
import AddCart from "../Icon/AddCart";
import { IoBus, IoCash, IoMedal } from "react-icons/io5";
export default function Product({
  title,
  price,
  discount,
  ratings,
  ratingsCount,
  stock,
  tag,
  sold,
  url,
  src,
  id,
}) {
  let [discountedPrice, setDiscountedPrice] = useState("");
  useEffect(() => {
    setDiscountedPrice((price - (discount / 100) * price));
  }, []);
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  return (
    <div className="relative sm:hover:scale-105 max-2xl:w-1/6 max-xl:w-1/6 max-lg:w-1/4 max-md:w-1/4 max-sm:w-1/2 h-fit box-border duration-200 transition-transform sm:hover:bg-opacity-90  sm:hover:bg-white sm:hover:dark:bg-dark overflow-hidden rounded-xl sm:hover:p-2 p-1">
        <Link
          className=" "
          href={"item/" + id + "/" + url?.replaceAll(" ", "+")}
        >
          <div className=" w-full relative  rounded-lg overflow-hidden">
            <Image
              src={src}
              alt="product img"
              className=" mx-auto aspect-square w-full h-auto"
              priority
            />
            {!discount == "" ? (
              <span className="top-0 absolute bg-secondary w-auto h-auto right-0 ps-3 px-1 text-white text-sm rounded-bl-full font-medium">
                -{discount}%
              </span>
            ) : null}
          </div>
          <div className="w-auto p-1">
            <p className="capitalize font-medium text-dark dark:text-gray-200 text-ellipsis max-2xl:text-lg max-xl:text-lg max-lg:text-base max-md:text-base max-sm:text-base line-clamp-1">
              {title}
            </p>
            <div className="flex gap-1">
              <Rate size={4} rate={ratings} className=" flex text-primary" />
              <span className=" flex items-center text-xs gap-[2px] font-normal text-dim dark:text-gray-400">
                {ratings}
              </span>
            </div>
            <div className=" flex w-full h-auto flex-wrap gap-3">
              <span className=" text-xs font-medium -my-[2px] flex gap-[2px] items-center text-slate-400 dark:text-400 text-nowrap">
                <IoMedal />
                Best seller
              </span>
              {/* <span className=" text-xs font-medium dark:text-400 -my-1 flex gap-[2px] items-center text-slate-400 text-nowrap"><IoCash/>Best price</span>
          <span className=" text-xs font-medium dark:text-400 -my-1 flex gap-[2px] items-center text-slate-400 text-nowrap"><IoBus/>Best seller</span> */}
            </div>
            <div className="price w-full items-baseline flex flex-col ">
              <p className=" -my-[2px] font-bold flex items-baseline text-dim dark:text-gray-200 text-lg">
                {formatter.format(discountedPrice)}
              </p>
              <p className=" -my-[2px] text-sm max-md:text-lg line-through dark:text-gray-400 flex items-baseline text-dim font-medium">
                {formatter.format(price)}
              </p>
            </div>
          </div>
        </Link>
        <div className=" absolute m-2 bottom-4 right-1">
          <AddCart id={id} />
        </div>
    </div>
  );
}
