"use client";
import Link from "next/link";
import Image from "next/image"
import Avatar from "../Avatar/Avatar";
import Dropdown from "../Dropdown/Dropdown";
import { useGlobalContext } from "@/_util/constants/context";
import { Menu, X } from "lucide-react";
export default function AccountHeader() {
  const { setIsDropDown, isAcctMenu, setIsAcctMenu } = useGlobalContext();
  return (
    <header className="z-20 sticky left-0 top-0 py-2 px-14 max-md:px-2 w-full h-14 max-md:h-auto bg-white flex items-center justify-between border-b-2 border-gray-100">
      <div className="w-1/5 max-md:w-auto flex gap-2 items-center">
        {isAcctMenu ? (
          
          <X
            size={30}
            strokeWidth={1.5}
            onClick={() => setIsAcctMenu(!isAcctMenu)}
            className="text-dim"
          />
        ) : (
          <Menu
            size={30}
            strokeWidth={1.5}
            onClick={() => setIsAcctMenu(!isAcctMenu)}
            className=" text-dim"
          />
        )}
        <Link href="/">
          <Image
            src="/assets/img/logo.png"
            alt="@Titoja"
            priority
            width={100}
            height={70}
          />
        </Link>
      </div>
      <div className="py-2 justify-end items-center text-gray-400 flex gap-3">
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