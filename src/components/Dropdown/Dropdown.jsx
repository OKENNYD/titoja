import Image from "next/image";
import Link from "next/link"
import { signOut } from "next-auth/react"
import { useGlobalContext } from "@/_util/constants/context";
import Images from "@/_util/constants/images"
import Logo from "../Icon/Logo";
import { IoChevronForward, IoTicketOutline, IoPeopleOutline, IoBookmarkOutline, IoChevronBack } from "react-icons/io5"
export default function Dropdown() {
  const { isDropDown, setIsDropDown,  } = useGlobalContext();
  return (
    <div
      className={
        isDropDown
          ? "bg-white dark:bg-dark trans-3 shadow-slate-400 dark:shadow-dim shadow-sm max-md:shadow-none z-50 absolute w-72 right-0 top-6 max-md:top-0 max-md:w-full max-md:bg-white rounded-2xl h-auto max-md:h-full max-md:fixed transition-opacity pb-2"
          : "hidden"
      }
    >
      <div className="h-auto w-full sticky top-0 left-0 gap-2 p-2 hidden max-md:flex justify-start items-center font-semibold">
        <span onClick={() => setIsDropDown(false)}>
          <IoChevronBack className=" text-xl " />
        </span>
        <div>
          <Logo />
          <p className=" -my-2 ms-8 text-slate-600 text-sm font-medium">
            Account
          </p>
        </div>
      </div>
      <div className="flex max-md:flex-row max-md:gap-2 font-semibold max-md:text-base text-sm  max-md:px-6 max-md:py-4 p-4 flex-col text-slate-600 items-center">
        <Image
          src={Images.avatar}
          alt="avatar_icon"
          className=" w-20 max-md:w-16 rounded-full"
        ></Image>
        <p className="flex flex-col sm:text-center text-dark dark:text-gray-200 text-sm">
          Oyetade kehinde
          <span className=" max-md:text-xs text-dim text-sm dark:text-gray-400">
            kehindeoyetade67@gmail.com
          </span>
        </p>
      </div>
      <div className=" flex justify-around text-dim dark:text-gray-200 max-md:border-y-[1px] max-md:dark:border-dim px-6 py-1 max-md:py-3">
        <Link
          href="/account/mylist"
          className="flex hover:text-primary flex-col items-center "
        >
          <IoBookmarkOutline className="text-2xl " />
          <p className=" text-xs">My list</p>
        </Link>
        <Link
          href="/account/following"
          className="flex hover:text-primary flex-col items-center"
        >
          <IoPeopleOutline className="text-2xl " />
          <p className=" text-xs">Following</p>
        </Link>
        <Link
          href="/account/coupons"
          className="flex hover:text-primary flex-col items-center"
        >
          <IoTicketOutline className="text-2xl " />
          <p className=" text-xs">Coupons</p>
        </Link>
      </div>
      <ul className=" w-full cursor-pointer px-2">
        <li>
          <Link
            className=" w-full px-4 py-2 text-lg hover:bg-slate-400 dark:hover:bg-dim text-dim dark:text-gray-200 inline-flex justify-between rounded-md hover:text-white font-normal items-center gap-2"
            href="/account/my_orders"
          >
            <p>My Orders</p>
            <IoChevronForward />
          </Link>
        </li>
        <li>
          <Link
            className=" w-full px-4 py-2 text-lg hover:bg-slate-400 dark:hover:bg-dim text-dim dark:text-gray-200 inline-flex justify-between rounded-md hover:text-white font-normal items-center gap-2"
            href="/account/my_list"
          >
            <p>My List</p>
            <IoChevronForward />
          </Link>
        </li>
        <li className=" w-full px-4 py-2 text-lg hover:bg-slate-400 dark:hover:bg-dim text-dim dark:text-gray-200 inline-flex justify-between rounded-md hover:text-white font-normal items-center gap-2">
          <p>Coupons</p>
          <IoChevronForward />
        </li>
        <li>
          <Link
            className=" w-full px-4 py-2 text-lg hover:bg-slate-400 dark:hover:bg-dim text-dim dark:text-gray-200 inline-flex justify-between rounded-md hover:text-white font-normal items-center gap-2"
            href="/account/help_center"
          >
            <p>Help Center</p>
            <IoChevronForward />
          </Link>
        </li>
        <li>
          <Link
            className=" w-full px-4 py-2 text-lg hover:bg-slate-400 dark:hover:bg-dim text-dim dark:text-gray-200 inline-flex justify-between rounded-md hover:text-white font-normal items-center gap-2"
            href="/account/settings"
          >
            <p>Settings</p>
            <IoChevronForward />
          </Link>
        </li>
        <li
          onClick={() => signOut()}
          className=" w-full px-4 py-2 text-lg hover:bg-slate-400 dark:hover:bg-dim text-dim dark:text-gray-200 inline-flex justify-between rounded-md hover:text-white font-normal items-center gap-2"
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
