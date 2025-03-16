import Link from "next/link";
import Image from "next/image";
export default function Box({ price }) {
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  return (
    <Link
      href="/bid?id=2&name=okennyd"
      className="md:w-1/6 shrink-0 max-md:w-1/2 aspect-square h-auto hover:bg-opacity-10 p-2 max-md:p-1 hover:bg-secondary relative rounded-2xl"
    >
      <Image
        src="/assets/img/surprise.png"
        alt="product img"
        width="100"
        height="100"
        className="aspect-square rounded-xl w-full h-auto"
        priority
      />
      <span className="absolute flex items-center gap-[2px] bg-secondary w-auto h-auto bottom-0 left-0 px-3 text-lg text-white rounded-full ">
      {formatter.format(price)}
      </span>
    </Link>
  );
}  
