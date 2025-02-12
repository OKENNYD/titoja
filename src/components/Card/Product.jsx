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
    <div className="relative shrink-0 sm:hover:scale-105 max-2xl:w-1/6 max-xl:w-1/6 max-lg:w-1/4 max-md:w-1/4 max-sm:w-1/2 h-fit box-border duration-200 transition-transform hover:bg-opacity-90  hover:bg-white overflow-hidden rounded-xl sm:hover:p-2 p-1">
        <Link
          className=" "
          href={"item/" + id + "/password=?" + "okennyd_dev"}
        >
          <div className=" w-full relative rounded-lg overflow-hidden">
            <Image
              src={src}
              alt="product img"
              className=" mx-auto aspect-square w-full h-auto"
              priority
            />
            {!discount == "" ? (
              <span className="top-0 absolute bg-secondary w-auto h-auto right-0 ps-3 px-1 text-white text-base rounded-bl-full">
                -{discount}%
              </span>
            ) : null}
          </div>
          <div className="w-auto p-1">
            <p className="capitalize text-dark text-ellipsis max-lg:text-lg line-clamp-1">
              {title}
            </p>
            <div className="flex gap-1">
              <Rate size={"10px"} rate={ratings} className=" max-md:text-2xl flex text-primary" />
              <span className=" flex items-center text-sm gap-[2px] text-dim">
                {ratings}
              </span>
            </div>
            <div className=" flex w-full h-auto flex-wrap gap-3">
              <span className=" text-xs font-medium -my-[2px] flex gap-[2px] items-center text-slate-400 text-nowrap">
                <IoMedal />
                Best seller
              </span>
            </div>
            <div className="price w-full items-baseline flex flex-col ">
              <p className="-my-px font-bold flex items-baseline text-dim text-lg max-md:text-xl">
                {formatter.format(discountedPrice)}
              </p>
              <h5 className="text-dim ">37 in Stock</h5>
            </div>
          </div>
        </Link>
        <div className=" absolute m-2 bottom-4 right-1">
          <AddCart id={id} />
        </div>
    </div>
  );
}
