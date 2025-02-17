"use client";
import Link from "next/link";
import Image from "next/image";
import Images from "@/_util/constants/images";
import Avatar from "../Avatar/Avatar";
import Dropdown from "../Dropdown/Dropdown";
import { useGlobalContext } from "@/_util/constants/context";
export default function WalletHeader({ Menu }) {
  const { setIsDropDown, isAcctMenu, setIsAcctMenu } = useGlobalContext();
  return (
    <header className="z-20 sticky left-0 top-0 py-2 px-14 max-md:px-2 w-full h-14 max-md:h-auto bg-white flex items-center justify-between border-b-2 border-gray-100">
      <div className="w-1/5 max-md:w-auto flex gap-2 items-center">
        <Link href="/">
          <Image
            src={Images.light}
            alt="@Titoja"
            priority
            className="w-40 h-auto"
          />
        </Link>
      </div>
      <div className="py-2 justify-end items-center text-slate-400 flex gap-3">
        <div
          onMouseEnter={() => setIsDropDown(true)}
          onMouseLeave={() => setIsDropDown(false)}
          className="relative w-auto flex flex-col"
        >
          <Avatar />
          <Dropdown />
        </div>
      </div>
    </header>
  );
}
