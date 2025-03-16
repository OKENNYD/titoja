import images from "@/_util/constants/images";
import Image from "next/image"
import Link from "next/link"
import { ChevroRight } from "lucide-react"
export default function Bid() {
  return (
    <div className="px-12 py-4">
      <div className="w-full h-fit p-2 max-md:p-2 rounded-2xl flex gap-2 max-md:gap-2 max-md:flex-col bg-white">
        <div className="w-4/6 relative h-auto">
          <span className="absolute flex items-center gap-[2px] bg-secondary w-auto h-auto ps-3 px-3 text-base max-sm:text-xs max-md:text-sm text-white font-normal rounded-bl-xl rounded-2xl">
            15:30
          </span>
          <Image  
            src={images.dimension}
            alt="image"
            className="w-full h-auto aspect-video max-md:aspect-square  rounded-xl"
          />
        </div>
        <div className="w-2/6 max-md:w-full h-auto flex flex-col gap-2">
          <div className="w-full h-auto aspect-square rounded-xl bg-gray-100 flex gap-2 justify-around items-center text-dim">
            chart for the bid
          </div>
          <form className="rounded-xl ps-2 w-full h-full bg-gray-100 p-1 flex items-center gap-1">
            <input
              className="w-full outline-none border-none h-8 max-md:h-10 bg-transparent text-lg text-dim"
              placeholder="Enter Price"
              type="number"
              name="bid-price"
            />
            <button
            name="bid"
              className="w-auto h-full text-white rounded-lg px-3 bg-primary"
              type="submit"
            >
              Bid
            </button>
          </form>
        </div>
      </div>
      <div className="w-full h-fit flex gap-2 max-md:flex-col py-2 max-md:p-0 ">
        <div className="description w-4/6 max-md:w-full h-auto bg-white rounded-2xl px-4 py-2">
          <h2 className="text-dark text-lg font-bold">
            Description
          </h2>
          <div className="w-fill h-auto text-dim">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              necessitatibus recusandae doloremque? Iusto at quae exercitationem
              maxime voluptas autem perspiciatis non. Laboriosam quia sequi
              nisi, dolorum quam corporis nostrum obcaecati.
            </p>
          </div>
        </div>
        <div className="seller w-2/6 max-md:w-full h-auto rounded-2xl bg-white p-2">
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
                className=" font-bold text-dark text-base"
              >
                Seller Name
              </Link>
            </div>
            <ChevroRight strokeWidth={1} className=" text-dark text-xl" />
          </div>
          <h1 className=" font-medium text-base ps-2 text-dark">
            About shop owner
          </h1>
          <p className=" text-sm text-dim ps-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur nihil ea eligendi repellendus est quos corporis
            similique odit quis impedit error qui iste ratione,...
          </p>
        </div>
      </div>
    </div>
  );
}
