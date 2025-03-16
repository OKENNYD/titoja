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
    <div className="transition-shadow w-full h-36 max-md:h-24 rounded-xl box-border p-2 bg-white flex gap-2">
      <Image 
        src={Images.img_3}
        alt="product img"
        className="aspect-square rounded-xl h-full w-auto"
        priority
      />
      <div className=" w-full flex flex-col">
        <p className="text-ellipsis capitalize text-lg max-md:text-sm text-dark line-clamp-1">
          {title}
        </p>
        <div className="w-full flex flex-col gap-2">
            <div className="flex gap-2 text-sm text-dim">
              <div className="h-4 w-auto aspect-square bg-red-800 rounded-full px-2"></div>
              <div className="h-fit w-fit bg-gray-200 rounded-full px-2">
                <p>cotton</p>
              </div>
              <div className="h-fit w-fit bg-gray-200 rounded-full px-2">
                <p>42&quot;</p>
              </div>
            </div>
            <div className="price flex justify-between">
            <div className="text-base flex gap-1 w-fit bg-gray-100 rounded-lg px-2 py-1">
              <p>{quantity}</p>&#120;
              <span>{formatter.format(discountedPrice)}</span>
            </div>
              <p className="text-lg flex items-baseline text-dim mr-2">
                {formatter.format(discountedPrice*quantity)}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
