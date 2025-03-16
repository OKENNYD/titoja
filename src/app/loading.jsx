import Image from "next/image";
import loader from "../assert/img/bouncing-circles.svg";

export default function Loading() {
    return (
      <main className="flex w-full h-screen flex-col items-center justify-between p-24">
        <div className=" w-auto h-auto p-6 rounded-full">
        <Image priority src={loader} alt="loading..." width={100} height={100} ></Image>
        </div>
      </main>
    );
  }
  