import Image from "next/image";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5"
import images from "@/_util/constants/images"
import Auction from "@/components/Card/Auction";
export default function Bid() {
  return (
    <section className="px-14 max-md:px-4 py-4 flex flex-col gap-2 max-md:gap-2 ">
      <div className="w-full h-fit p-2 max-md:p-2 rounded-2xl flex gap-2 max-md:gap-2 max-md:flex-col bg-white dark:bg-dark">
        <Image
          src={images.dimension}
          alt="image"
          className="w-4/6 max-md:w-full h-auto aspect-video max-md:aspect-square  rounded-xl"
        />
        <div className="w-2/6 max-md:w-full h-auto flex flex-col gap-2">
          <div className="w-full h-auto aspect-square rounded-xl bg-gray-100 dark:bg-dim flex gap-2 justify-around items-center text-dim dark:text-gray-400">
            chart for the bid
          </div>
          <form className="rounded-xl ps-2 w-full h-full bg-gray-100 dark:bg-dim p-1 flex items-center gap-1">
            <input
              className="w-full outline-none border-none h-8 max-md:h-10 bg-transparent text-lg text-dim  dark:text-gray-400"
              placeholder="Enter Price"
              type="number"
              name="bid-price"
            />
            <button
              className="w-auto h-full text-white rounded-lg px-3 bg-primary dark:bg-secondary"
              type="submit"
            >
              Bid
            </button>
          </form>
        </div>
      </div>
      <div className="w-full h-fit flex gap-2 max-md:flex-col p-2 max-md:p-0 ">
        <div className="description w-4/6 max-md:w-full h-auto bg-white dark:bg-dark rounded-2xl px-4 py-2">
          <h2 className="text-dark text-lg font-bold dark:text-gray-200">
            Description
          </h2>
          <div className="w-fill h-auto text-dim dark:text-gray-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              necessitatibus recusandae doloremque? Iusto at quae exercitationem
              maxime voluptas autem perspiciatis non. Laboriosam quia sequi
              nisi, dolorum quam corporis nostrum obcaecati.
            </p>
          </div>
        </div>
        <div className="seller w-2/6 max-md:w-full h-auto rounded-2xl dark:bg-dark bg-white p-2">
          <div className=" flex justify-between items-center items">
            <div className="seller-Logo -my-1 flex gap-2 items-center">
              <Image
                src={images.shop}
                alt="user"
                className="h-auto w-10 aspect-square max-md:w-12 rounded-full"
                priority
              />
              <Link
                href={"/shop?shopname="}
                className=" font-bold text-dark dark:text-gray-200 text-base"
              >
                Seller Name
              </Link>
            </div>
            <IoChevronForward className=" text-dark dark:text-gray-200 text-xl" />
          </div>
          <h1 className=" font-medium text-base ps-2 text-dark dark:text-gray-200">
            About shop owner
          </h1>
          <p className=" text-sm text-dim dark:text-gray-400 ps-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur nihil ea eligendi repellendus est quos corporis
            similique odit quis impedit error qui iste ratione,...
          </p>
        </div>
      </div>
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
 