"use client";
import Image from "next/image";
import goods from "@/_util/api/goods";
import { X } from "lucide-react";
import { useGlobalContext } from "@/_util/constants/context";
export default function Preview() {
  const { isPopup, setIsPopup, id } = useGlobalContext();
  let specificGood = goods.filter((good) => good.id === id)
  return (
    <div
      className={
        isPopup
          ? "fixed shadow-dim shadow-sm bg-slate-400 bg-opacity-30 z-40 w-full h-screen left-0 top-0 justify-center items-center" : "hidden"
      }
    >
      {specificGood.map((stock, index) => (
        <div
          key={index}
          className="rounded-3xl w-4/6 m-auto my-20 h-auto gap-4 flex flex-row bg-white p-4 box-border"
        >
          <X
            onClick={() => setIsPopup(!isPopup)}
            className="absolute z-50 text-dim rounded-full text-4xl "
          />
          <div className="flex w-4/6 max-md:w-full max-md:gap-2 box-border max-md:flex-col">
            <Image
              id="banner"
              src={currentSrc}
              alt="product img"
              className=" mx-auto w-5/6 max-md:w-full rounded-2xl max-md:rounded-xl aspect-square h-auto"
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
}
