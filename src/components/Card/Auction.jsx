"use client";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "./Loader";
import Images from "@/_util/constants/images"
import { IoPeopleOutline } from "react-icons/io5";
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
    <div className="bg-white hover:scale-105 w-[200px] shrink-0 grow h-auto box-border duration-200 transition-transform hover:bg-gray-100 rounded-xl p-1">
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
            {users && <span className="top-0 absolute bg-secondary w-auto h-auto right-0 ps-3 px-1 text-white text-xs flex items-center rounded-bl-full">
              <IoPeopleOutline className="text-sm"/>
              &nbsp;{users}
              </span>}
          </div>
          <div className="w-auto p-1">
            <p className="capitalize text-wrap text-base max-md:text-lg text-dark text-ellipsis">
              Lorem, ipsum dolor.
            </p>
            <div className="price w-full items-baseline flex flex-col ">
              <p className="text-xl font-extrabold flex items-baseline text-dim">
                {formatter.format(Math.floor(Math.random()*99999))}
              </p>
            </div>
          </div>
        </Link>
      </Suspense>
    </div>
  );
}
