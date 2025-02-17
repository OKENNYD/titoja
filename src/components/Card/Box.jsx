import Link from "next/link";
import Image from "next/image";
export default function Box({ title }) {
  return (
    <Link
      href="/bid?id=2&name=okennyd"
      className="w-48 max-md:w-1/2 max-md:shrink-0 aspect-square h-auto hover:bg-opacity-10 p-2 hover:bg-secondary relative rounded-2xl border border-white"
    >
      <Image
        src="/assets/img/surprise.png"
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
