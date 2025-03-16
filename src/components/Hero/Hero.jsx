"use client";
import Announcement from "../Announcement/page";
import Brand from "../Brand/Brand";
import Auction from "../Card/Auction";
import Box from "../Card/Box";
import Carosel from "../Carousel/Carousel";
import { useEffect, useState } from "react";
export default function Hero() {
  let [auction, setAuction] = useState([]);
    useEffect(() => {
      fetch("/api/auction")
        .then((res) => res.json())
        .then((data) => {
          setAuction(data)})
        },[]) 
  return (
    <div className="w-full h-fit flex flex-col gap-2 px-14 max-md:px-2 py-2">
      <Announcement />
      <Carosel/>
      <div className="w-full">
      <p className="text-lg text-dim font-medium">Auctions</p>
      <div className="flex snap-start snap-x snap-mandatory scroll-none overflow-x-scroll w-full h-auto">
        {auction.map((_, i) => (
          <Auction key={i} id={_.bidId} status={_.bidStatus}price={_.bidAmount} name={_.name} timestamp={_.bidExpiry}/>
          ))}
        </div>
      </div>
      <Brand />
      <div className="w-full">
        <p className="text-lg text-dim font-medium">Limited Sale</p>
        <div className="flex snap-start snap-x snap-mandatory scroll-none overflow-x-scroll w-full h-auto">
          <Box price={1500.45}/>
          <Box price={1500.45}/>
          <Box price={1500.45}/>
          <Box price={1500.45}/>
          <Box price={1500.45}/>
          <Box price={1500.45}/>
          <Box price={1500.45}/>
          <Box price={1500.45}/>
          <Box price={1500.45}/>
        </div>
      </div>
    </div>
  );
}