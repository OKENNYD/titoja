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
  ratings,
  ratingsCount,
  stock,
  tag,
  sold,
  url,
  src,
  id,
}) {
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  return (
    <div className="relative md:w-1/5 max-md:w-1/2 h-fit box-border duration-200 transition-transform hover:bg-opacity-10  hover:bg-secondary overflow-hidden rounded-xl p-2 border border-white">
        <Link
          className=" "
          href={"item/" + id + "/password=?" + "okennyd_dev"}
        >
            <Image
              src={src}
              alt="product img"
              className="rounded-lg mx-auto aspect-square w-full h-auto"
              priority
            />
          <div className="w-auto p-1">
            <p className="capitalize text-dark text-ellipsis max-lg:text-lg line-clamp-1">
              {title}
            </p>
            <div className="flex gap-1">
              <Rate size={4} rate={ratings} className=" max-md:text-2xl flex text-primary" />
              <span className=" flex items-center text-sm gap-[2px] text-dim">
                {ratings}
              </span>
            </div>
            <div className=" flex w-full h-auto flex-wrap gap-2">
              <span className="text-base text-green-900 -my-2">
                Best seller
              </span>
            </div>
            <div className="price w-full items-baseline flex flex-col ">
              <p className="-my-px font-bold flex items-baseline text-dim text-lg max-md:text-xl">
                {formatter.format(price)}
              </p>
              <h6 className="text-dim -my-2">37 in Stock</h6>
            </div>
          </div>
        </Link>
        <div className=" absolute m-2 bottom-4 right-1">
          <AddCart/>
        </div>
    </div>  
  );
}
