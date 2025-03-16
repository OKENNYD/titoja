"use client";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Rate from "../Rate/Rate";
import Loader from "./Loader";
import { useGlobalContext } from "@/_util/constants/context";
export default function Food({
  title,
  price,
  ratings,
  url,
  src,
  id,
}) {
  const { setIsPopup, setId } = useGlobalContext();
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  return (
    <div className="relative hover:scale-105 h-fit box-border duration-200 transition-transform hover:bg-opacity-90 sm:hover:bg-white overflow-hidden rounded-xl hover:p-2 p-1 md:w-1/5 max-md:1/2 border border-white">
      <Suspense fallback={<Loader />}>
        <Image
          src={src}
          alt="product img"
          className="rounded-lg mx-auto aspect-square w-full h-auto"
          priority
        />
        <div className="w-auto p-1">
          <p className="text-dim text-lg line-clamp-1">
            {title}
          </p>
          <div className="flex gap-1">
            <Rate size={4} rate={ratings} className=" flex text-primary" />
            <span className=" flex items-center text-xs gap-[2px] text-dim">
              {ratings.toFixed(1)}
            </span>
          </div>
          <div className="price w-full items-baseline flex flex-col ">
            <p className=" -my-[2px] font-bold flex items-baseline text-dim text-lg">
              {formatter.format(price)}
            </p>
          </div>
        </div>
        <button
        name="order"
          onClick={() => {
            setIsPopup(true);
            setId(id);
          }}
          className="w-full bg-secondary font-semibold rounded-lg text-base p-1 text-white"
        >
          Order
        </button>
      </Suspense>
    </div>
  );
}
