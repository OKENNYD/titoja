"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Images from "@/_util/constants/images";
import { IoAdd, IoRemove, IoChevronForward, IoTrashOutline, IoBookmark, IoBookmarkOutline } from "react-icons/io5";
export default function CartCard(
  {
    price,
    title,
    discount,
    ratings,
    stock,
    sold,
    url,
    id }
) {
  let [stockCount, setStockCount] = useState(1)
  let [liked, setLiked] = useState(false)
  let [discountedPrice, setDiscountedPrice] = useState();
  useEffect(() => {
    setDiscountedPrice((price - (discount / 100) * price).toFixed(2));
  }, [])
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  return (
    <div className="relative flex items-center w-full">
      <input
        type="radio"
        name={"cart " + id}
        id={`cartSelect${id}`}
        className="m-2 accent-secondary w-5 h-5"
      />
      <label
        htmlFor={`cartSelect${id}`}
        className="transition-shadow w-full h-40 max-md:h-24 rounded-xl box-border p-2 bg-white flex gap-2 items-center"
      >
        <Image
          src={Images.img_4}
          alt="product img"
          className="aspect-square rounded-xl h-full w-auto"
          priority
        />
        <div className=" w-full flex flex-col ">
          <Link href={"item/" + id + "/" + title}>
            <p className="text-ellipsis capitalize font-medium text-lg max-md:text-sm text-dark line-clamp-1">
              {title}
            </p>
          </Link>
          <div className=" w-full flex justify-between items-center">
            <div className="">
              <div className="add_ons pt-1 w-auto h-full flex gap-2 text-sm max-md:text-xs text-gray-400">
                <div className=" bg-red-800 rounded-full px-2 w-auto h-full aspect-square"></div>
                <div className=" bg-gray-200 rounded-full px-2 flex justify-center items-center">
                  cotton
                </div>
                <div className=" bg-gray-200 rounded-full px-2 flex justify-center items-center">
                  42&quot;
                </div>
              </div>
              <div className="h-full font-medium text-dim text-xs py-1 max-md:hidden">
                <span>{stock}+ sold</span>
              </div>
              <div className="price">
                <p className=" text-xl font-bold flex items-baseline max-md:text-lg text-dark">
                  {formatter.format(discountedPrice * stockCount)}
                </p>
              </div>
              <div className=" gap-2 max-md:gap-1 flex justify-between me-4 max-md:me-2 items-center ax-md:float-left">
                <span
                  onClick={() => setLiked(!liked)}
                  className=" text-3xl max-md:text-lg text-primary rounded-full"
                >
                  {liked ? (
                    <IoBookmark />
                  ) : (
                    <IoBookmarkOutline className="text-dim" />
                  )}
                </span>
                <div className=" p-1 w-5/6 gap-2 max-md:gap-1 flex text-dim items-center text-xl max-md:text-sm outline-0 border-0 cursor-pointer ">
                  <button
                    onClick={(e) => {
                      e.currentTarget.disabled = true;
                      setStockCount((prev) => prev--);
                    }}
                    className=" text-2xl max-md:text-lg text-white bg-primary rounded-full"
                  >
                    <IoRemove />
                  </button>
                  <span className=" w-full border-0 outline-0 text-center bg-transparent">
                    {stockCount}
                  </span>
                  <button
                    onClick={() => setStockCount((prev) => prev++)}
                    className=" text-2xl max-md:text-lg text-white bg-primary rounded-full"
                  >
                    <IoAdd />
                  </button>
                </div>
                <IoTrashOutline className="text-2xl text-red-400" />
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );

}
