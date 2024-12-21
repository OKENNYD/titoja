"use client"
import Image from "next/image";
import Loader from "../assert/img/salepex.gif";

export default function Loading() {
    return (
      <main className="flex w-full h-screen flex-col items-center justify-between p-24">
        <div className=" w-auto h-auto p-6 rounded-full">
        <Image priority src={Loader} alt="loading..." width={100} height={100} ></Image>
        </div>
      </main>
    );
  }
  