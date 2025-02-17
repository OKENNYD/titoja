"use client";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "./Loader";
import Images from "@/_util/constants/images"
import { Users } from "lucide-react";
export default function Auction({
  title,
  price,
  tag,
  url,
  src,
  id,
}) {
  let users = Math.floor(Math.random()*50);
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  return (
    <div className="h-auto box-border duration-200 transition-transform rounded-xl grow basis-48 border border-white hover:bg-opacity-10 p-2 hover:bg-secondary ">
      <Suspense fallback={<Loader />}>
        <Link
          className=" "
          href={"/"}
        >
          <div className=" w-full relative  rounded-lg overflow-hidden">
            <Image
              src={Images.img_2}
              alt="product img"
              className=" mx-auto aspect-square w-full h-auto"
              priority
            />
            <span className="top-0 absolute bg-secondary w-auto h-auto right-0 ps-3 p-1 text-white text-xs flex items-center rounded-bl-full">
              <Users strokeWidth={1} size={15}/>
              &nbsp;{users}
              </span>
          </div>
          <div className="w-auto pt-2">
            <p className="capitalize text-wrap text-lg text-dark text-ellipsis line-clamp-1">
              Lorem, ipsum dolor.
            </p>
            <div className=" flex w-full h-auto flex-wrap gap-2 items-center justify-between">
              <span className="text-red-500 animate-pulse text-lg -my-2">Live</span>
              <span className="text-base -my-2">01:20:03</span>
            </div>
              <p className="text-xl font-semibold flex items-baseline text-dim">
                {formatter.format(Math.floor(Math.random()*99999))}
              </p>
          </div>
        </Link>
      </Suspense>
    </div>
  );
}
