"use client";
import Auction from "@/components/Card/Auction";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Carousel from "@/components/Carousel/Carousel";
export default function Bid() {
  let [auction, setAuction] = useState([]);
    useEffect(() => {
      fetch("/api/auction")
        .then((res) => res.json())
        .then((data) => {
          setAuction(data)})
        },[]) 
  return (
    <section className="px-14 max-md:px-2 flex mt-2 flex-col gap-2">
      <Carousel/>
      <div className="w-full h-fit flex-wrap flex">
        {auction.map((_, i) => (
          <Auction key={i} id={_.bidId} status={_.bidStatus} price={_.bidAmount} name={_.name} timestamp={_.bidExpiry}/>
        ))}
      </div>
      <div className="w-full items-center justify-center gap-2 flex py-4">
        <button name="show more" className=" text-base bg-primary dark:bg-secondary rounded-full text-white font-semibold px-4 py-1 flex gap-1 justify-center items-center">
          Show More
          <ChevronDown strokeWidth={1} />
        </button>
      </div>
    </section>
  );
}
