import Link from "next/link";
import Image from "next/image";
import Images from "@/_util/constants/images";
export default function Box({ title }) {
  return (
    <Link
      href="/bid?id=2&name=okennyd"
      className="w-52 max-2xl:w-48 max-xl:w-48 max-lg:w-1/4 max-md:w-1/4 max-sm:w-1/2 aspect-square h-auto hover:scale-105 relative p-2 bg-white dark:bg-dark rounded-2xl"
    > 
      <Image
        src={Images.img_3}
        alt="product img"
        className="aspect-square rounded-xl w-full h-auto"
        priority
      />
      <span className="absolute flex items-center gap-[2px] bg-secondary w-auto h-auto bottom-0 left-0 ps-3 px-3 text-base max-sm:text-xs max-md:text-sm text-white font-normal rounded-bl-xl rounded-2xl">
        {title}
      </span>
    </Link>
  );
}
