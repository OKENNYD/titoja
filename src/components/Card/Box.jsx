import Link from "next/link";
import Image from "next/image";
import Images from "@/_util/constants/images";
export default function Box({ title }) {
  return (
    <Link
      href="/bid?id=2&name=okennyd"
      className="shrink-0 max-lg:w-1/4 max-md:w-1/2 aspect-square h-auto hover:scale-105 relative p-2 bg-white rounded-2xl"
    >
      <Image
        src="/asserts/img/surprise.png"
        alt="product img"
        width="100"
        height="100"
        className="aspect-square rounded-xl w-full h-auto"
        priority
      />
      <span className="absolute flex items-center gap-[2px] bg-secondary w-auto h-auto bottom-0 left-0 px-3 text-lg text-white rounded-bl-xl rounded-2xl">
        {title}
      </span>
    </Link>
  );
}
