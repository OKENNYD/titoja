import { IoChevronForward } from "react-icons/io5";
import Auction from "@/components/Card/Auction";
export default function Bid() {
  return (
    <section className="px-14 max-md:px-4 py-4 flex flex-col gap-2 max-md:gap-2 ">
      
      <div className="w-full h-fit">
        <div className="flex justify-between pb-2 items-center text-lg font-bold text-dim dark:text-gray-400">
          <span className="text-dim dark:text-gray-400 font-semibold text-lg border-l-2 border-primary px-2 m-1">
            live
          </span>
          <IoChevronForward />
        </div>
        <div className="flex gap-2 overflow-x-scroll overflow-y-hidden scroll-none">
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
      </div>
      <div className="w-full h-fit p-2 rounded-2xl bg-white dark:bg-dark">
        <div className="flex justify-between pb-2 items-center text-lg font-bold text-dim dark:text-gray-400">
          <p className=" ">Upcoming</p>
          <IoChevronForward />
        </div>
        <div className="flex gap-2 overflow-x-scroll overflow-y-hidden scroll-none">
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
      </div>
      <div className="w-full h-fit p-2 rounded-2xl bg-white dark:bg-dark">
        <div className="flex justify-between pb-2 items-center text-lg font-bold text-dim dark:text-gray-400">
          <p className=" ">Ended</p>
          <IoChevronForward />
        </div>
        <div className="flex gap-2 overflow-x-scroll overflow-y-hidden scroll-none">
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
      </div>
      <div className="w-full h-fit p-2 rounded-2xl bg-white dark:bg-dark">
        <div className="flex justify-between pb-2 items-center text-lg font-bold text-dim dark:text-gray-400">
          <p className=" ">Suspend</p>
          <IoChevronForward />
        </div>
        <div className="flex gap-2 overflow-x-scroll overflow-y-hidden scroll-none">
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
      </div>
    </section>
  );
}
