"use client";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Rate from "../Rate/Rate";
import { toast } from 'react-toastify';
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
  const notify = () => toast.info("check out your order");
  return (
    <div className="relative hover:scale-105  max-xl:w-1/6 max-lg:w-1/4 max-md:w-1/4 max-sm:w-1/2 h-fit box-border duration-200 transition-transform hover:bg-opacity-90  sm:hover:bg-white overflow-hidden rounded-xl hover:p-2 p-1">
      <Suspense fallback={<Loader />}>
        <Image
          src={src}
          alt="product img"
          className="rounded-lg mx-auto aspect-square w-full h-auto"
          priority
        />
        <div className="w-auto p-1">
          <p className="capitalize text-dark text-ellipsis max-lg:text-lg max-md:text-base max-sm:text-base line-clamp-1">
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
          onClick={() => {
            setIsPopup(true);
            setId(id);
            notify;
          }}
          className="w-full bg-secondary font-semibold rounded-lg text-base p-1 text-white"
        >
          Order
        </button>
      </Suspense>
    </div>
  );
}
