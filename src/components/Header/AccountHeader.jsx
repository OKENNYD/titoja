"use client";
import Link from "next/link";
import Image from "next/image"
import Images from "@/_util/constants/images"
import { IoMenu, IoClose } from "react-icons/io5";
import Avatar from "../Avatar/Avatar";
import Dropdown from "../Dropdown/Dropdown";
import { useGlobalContext } from "@/_util/constants/context";
import Theme from "../Toggle/Theme";
import { useTheme } from 'next-themes'
export default function AccountHeader() {
  let { theme } = useTheme();
  const { setIsDropDown, isAcctMenu, setIsAcctMenu } =
    useGlobalContext();
  return (
    <header className="z-20 sticky left-0 top-0 py-2 px-14 max-md:px-2 w-full h-14 max-md:h-auto bg-white dark:bg-dark flex items-center justify-between border-b-2 border-gray-100 dark:border-dim">
      <div className="w-1/5 max-md:w-auto flex gap-2 items-center">
        {isAcctMenu ? (
          <IoClose
            onClick={() => setIsAcctMenu(!isAcctMenu)}
            className=" text-4xl sm:hidden flex text-dim dark:text-gray-200 gap-2"
          />
        ) : (
          <IoMenu
            onClick={() => setIsAcctMenu(!isAcctMenu)}
            className=" text-4xl sm:hidden flex text-dim dark:text-gray-200 gap-2"
          />
        )}
        <Link href="/">
          <Image
            src={theme == "light " ? Images.light : Images.dark}
            alt="@Titoja"
            priority
            className="w-40 h-auto"
          />
        </Link>
      </div>
      <div className="py-2 justify-end items-center text-slate-400 flex gap-3">
        <Theme />
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
