"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Images from "@/_util/constants/images";
import { Trash, Gift, Bookmark, BookmarkPlus} from "lucide-react";
export default function CartCard(
  {
    price,
    name,
    stock,
    url,
    id }
) {
  let [liked, setLiked] = useState(false)
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  return (
    <div className="transition-shadow w-full h-36 max-md:h-[120px] h- rounded-xl box-border p-2 max-md:p-1 bg-white flex gap-2 items-center"
      >
        <Image
          src={Images.img_4}
          alt="product img"
          className="aspect-square rounded-xl h-full w-auto"
          priority
        />
        <div className="w-full">
          <Link href={"item/" + id + "/" + name}>
            <p className="text-ellipsis text-lg max-md:text-base text-dark line-clamp-1">
              {name}
            </p>
          </Link>
          <div className=" w-full flex justify-between items-center">
            <div className="">
              <div className="add_ons pt-1 w-auto h-full flex gap-2 text-sm max-md:text-xs text-gray-100">
                <span className="block bg-secondary rounded-full px-2 py-1">
                  cotton
                </span>
              </div>
              <div className="price">
                <p className=" text-xl font-semibold flex items-baseline max-md:text-lg text-dark">
                  {formatter.format(price)}
                </p>
              </div>
              <div className="w-full flex gap-2 justify-between items-center">
                <div className="flex items-center gap-1">
                <p>Quantity:</p>
                <span>{stock}</span>
              </div>
              <div className="gap-2 flex items-center">
                <span
                  onClick={() => setLiked(!liked)}
                  className="text-3xl max-md:text-lg"
                  title="Add to mylist"
                >
                  {liked ? (
                    <Bookmark className="fill-secondary text-transparent" strokeWidth={1} />
                  ) : (
                    <BookmarkPlus strokeWidth={1} className="text-dim" />
                  )}
                </span>
                  <Trash strokeWidth={1} className="text-2xl text-red-400" title="Remove from mylist" />
                  <Gift className="text-secondary" size={25} strokeWidth={1.5} title="Customize package for delivery"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );

}
