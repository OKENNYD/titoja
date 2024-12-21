"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Images from "@/_util/constants/images";
export default function CheckoutCard({
  price,
  title,
  discount,
  quantity
}) {
  let [discountedPrice, setDiscountedPrice] = useState();
  useEffect(() => {
    setDiscountedPrice((price - (discount / 100) * price).toFixed(2));
  }, []);
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  return (
    <div className="transition-shadow w-full h-36 max-md:h-24 rounded-xl box-border p-2 bg-white dark:bg-dark flex gap-2">
      <Image
        src={Images.img_3}
        alt="product img"
        className="aspect-square rounded-xl h-full w-auto"
        priority
      />
      <div className=" w-full flex flex-col">
        <p className="text-ellipsis capitalize text-lg max-md:text-sm dark:text-gray-200 font-medium text-dark">
          {title}
        </p>
        <div className=" w-full">
          <div className="w-full flex justify-between items-center">
            <div className="add_ons pt-1 w-auto h-full flex gap-2 text-sm max-md:text-xs text-gray-400">
              <div className=" bg-red-800 rounded-full px-2 w-auto h-full aspect-square"></div>
              <div className=" bg-gray-200 dark:bg-dim rounded-full px-2 flex justify-center dark:text-gray-200 items-center">
                cotton
              </div>
              <div className=" bg-gray-200 dark:bg-dim rounded-full px-2 flex justify-center dark:text-gray-200 items-center">
                42&quot;
              </div>
            </div>
            <div className="price">
              <p className=" text-xl font-bold flex items-baseline max-md:text-lg text-dark dark:text-gray-200">
                {formatter.format(discountedPrice*quantity)}
              </p>
            </div>
          </div>
          <div className="text-base max-md:text-sm">
            <p>Quantity: {quantity}</p>
            <p>price: {formatter.format(discountedPrice)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
