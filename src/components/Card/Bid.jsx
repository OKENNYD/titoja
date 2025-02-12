import Link from "next/link";
import Image from "next/image";
import Images from "@/_util/constants/images";
import { IoDisc, IoPersonOutline } from "react-icons/io5";
export default function Bid({status,name,price}) {
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  return (
    <Link
      href="/bid/1?id=2&name=okennyd"
      className="shrink-0 max-lg:w-1/4 max-md:w-1/2 h-auto flex gap-2 bg-white hover:shadow-2xl hover:shadow-gray-400 rounded-2xl relative p-2 box-border"
    >
      <Image
        src={Images.img_3}
        alt="product img"
        className="aspect-square rounded-xl w-2/5 h-auto"
        priority
      />
      <div className="flex flex-col text-dim gap-1">
        <p className="text-lg font-normal text-nowrap text-clip line-clamp-1">
          Product Name
        </p>
        <div className="flex gap-4 items-center">
          {status ? (
            <span className="flex items-center gap-[2px] bg-[#FF0000] w-fit h-auto px-2 text-sm text-white max-sm:text-xs rounded-2xl animate-pulse">
              <IoDisc />
              Live
            </span>
          ) : (
            <span className="gap-1 bg-[#FF0000] w-fit h-auto px-2 rounded-full">
              <p className="text-sm text-white max-sm:text-xs">
                Ended
              </p>
            </span>
          )}
          <div className="flex gap-1 items-center text-sm">
            <IoPersonOutline />8
          </div>
        </div>
        <span className="text-lg font-bold">{formatter.format(1234.23)}</span>
      </div>
    </Link>
  );
}
