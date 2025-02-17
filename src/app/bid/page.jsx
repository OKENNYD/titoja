"use client";
import Select from "@/components/Select/Select";
import images from "@/_util/constants/images";
import Image from "next/image";
import Auction from "@/components/Card/Auction";
import { ChevronDown } from "lucide-react";
export default function Bid() {
  return (
    <section className="px-14 max-md:px-2 flex flex-col gap-2">
      <div className="banner w-full h-auto relative flex justify-center items-center">
        <Image alt="dish" className="w-full h-[450px]" src={images.dish}/>
        <form className="w-3/5 absolute bg-white h-12 flex p-2 rounded-full gap-2 text-lg">
          <Select
            primary={opts[1]}
            options={opts}
            style={
              "bg-primary rounded-full p-2 h-full w-auto relative box-border"
            }
          />
          <input
            type="search"
            name="search"
            placeholder="Search dish..."
            className="w-full marker:text-black h-full bg-transparent outline-none caret-secondary"
          />
        </form>
      </div>
        <div className="w-full h-fit flex-wrap gap-1 flex">
          <Auction />
          <Auction />
          <Auction />
          <Auction />
          <Auction />
          <Auction />
          <Auction />
          <Auction />
          <Auction />
          <Auction />
        </div>
        <div className="w-full items-center justify-center gap-2 flex py-4">
        <button
          className=" text-base bg-primary dark:bg-secondary rounded-full text-white font-semibold px-4 py-1 flex gap-1 justify-center items-center"
        >
          Show More
          <ChevronDown strokeWidth={1} />
        </button>
      </div>
    </section>
  );
}
