"use client";
import Link from "next/link";
import Image from "next/image";
import Images from "@/_util/constants/images";
import Avatar from "../Avatar/Avatar";
import Dropdown from "../Dropdown/Dropdown";
import Theme from "../Toggle/Theme";
import { useGlobalContext } from "@/_util/constants/context";
import { useTheme } from "next-themes";
export default function AccountHeader({ Menu }) {
  let { theme } = useTheme();
  const { setIsDropDown, isAcctMenu, setIsAcctMenu } = useGlobalContext();
  return (
    <header className="z-20 sticky left-0 top-0 py-2 px-14 max-md:px-2 w-full h-14 max-md:h-auto bg-white dark:bg-dark flex items-center justify-between border-b-2 border-gray-100 dark:border-dim">
      <div className="w-1/5 max-md:w-auto flex gap-2 items-center">
        <Link href="/">
          <Image
            src={theme == "light " ? Images.light : Images.dark}
            alt="@Titoja"
            priority
            className="w-40 h-auto"
          />
        </Link>
      </div>
      <form className="w-5/6 bg-dim rounded-full flex justify-center items-center h-10 p-1 pe-10">
        <select
          name="food"
          className="bg-primary rounded-full font-semibold outline-none px-2"
        >
          <option value="snack">Snack</option>
          <option value="dish">dish</option>
        </select>
        <input
          type="search"
          name="search"
          placeholder="Search dish..."
          className="w-full marker:text-black h-full bg-transparent outline-none"
        />
      </form>
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
