"use client";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "./Loader";
import Images from "@/_util/constants/images"
import { Users } from "lucide-react";
export default function Auction({
  name,
  price,
  tag,
  src,
  id,
  status,
  timestamp
}) {
  let users = Math.floor(Math.random()*50);
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN"
  });
  return (
    <div className="h-auto shrink-0 box-border duration-200 transition-transform rounded-xl md:w-1/6 max-md:w-1/2 hover:bg-opacity-10 p-2 hover:bg-secondary ">
      <Suspense fallback={<Loader />}>
        <Link
          className=" "
          href={`"/" + ${id}`}
        >   
          <div className=" w-full relative  rounded-lg overflow-hidden">
            <Image
              src={Images.img_2}
              alt="product img"
              className=" mx-auto aspect-square w-full h-auto"
              priority
            />
            <span className="top-2 absolute bg-secondary w-auto h-auto right-0 pl-2 p-1 text-white text-xs flex items-center rounded-l-full">{new Date(timestamp).toLocaleTimeString('en-US', { hour12: false })}</span>
          </div>
          <div className="w-auto">
            <p className="capitalize text-wrap text-lg text-dark text-ellipsis line-clamp-1">
              {name}
            </p>
            <div className=" -my-1">
              {status == "active" ? <span className="text-blue-500 text-base -my-2">Active</span> : ( status == "won" ? <span className="text-green-500 text-base -my-2">Won</span> : ( status == "lost" ? <span className="text-red-500 text-base -my-2">Lost</span> : ( status == "cancelled" ? <span className="text-orange-500 text-base -my-2">Cancelled</span> : null)))}
            </div>
              <p className="text-lg flex items-baseline text-dim">
                {formatter.format(price)}
              </p>
          </div>
        </Link>
      </Suspense>
    </div>
  );
}
