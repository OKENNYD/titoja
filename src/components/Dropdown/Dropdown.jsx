import Image from "next/image";
import Link from "next/link"
import { signOut } from "next-auth/react"
import { useGlobalContext } from "@/_util/constants/context";
import Images from "@/_util/constants/images"
import Logo from "../Icon/Logo";
import { ChevronLeft, Tickets, Users, Bookmark, ChevronRight } from "lucide-react"
export default function Dropdown() {
  const { isDropDown, setIsDropDown,  } = useGlobalContext();
  return (
    <div
      className={
        isDropDown
          ? "bg-white trans-3 shadow-gray-400 shadow-sm max-md:shadow-none z-50 absolute w-72 right-0 top-6 max-md:top-0 max-md:w-full max-md:bg-white rounded-2xl h-auto max-md:h-full max-md:fixed transition-opacity pb-2"
          : "hidden"
      }
    >
      <div className="h-auto w-full sticky top-0 left-0 gap-2 p-2 hidden max-md:flex justify-start items-center font-semibold">
        <span onClick={() => setIsDropDown(false)}>
          <ChevronLeft strokeWidth={1} className=" text-xl " />
        </span>
        <div>
          <Logo />
          <p className=" -my-2 ms-8 text-slate-600 text-base">Account</p>
        </div>
      </div>
      <div className="flex max-md:flex-row max-md:gap-2 font-semibold max-md:text-base text-sm  max-md:px-6 max-md:py-4 p-4 flex-col text-slate-600 items-center">
        <Image
          src={Images.avatar}
          alt="avatar_icon"
          className=" w-20 max-md:w-16 rounded-full"
        ></Image>
        <p className="flex flex-col sm:text-center text-dim text-base">
          Oyetade kehinde
          <span className=" max-md:text-xs text-dim text-sm">
            kehindeoyetade67@gmail.com
          </span>
        </p>
      </div>
      <div className=" flex justify-around text-dim max-md:border-y-[1px] px-6 py-1 max-md:py-3">
        <Link
          href="/cart/my_list"
          className="flex hover:text-primary flex-col items-center "
        >
          <Bookmark strokeWidth={1} className="text-2xl " />
          <p className=" text-xs">My list</p>
        </Link>
        <Link
          href="/account/following"
          className="flex hover:text-primary flex-col items-center"
        >
          <Users strokeWidth={1} className="text-2xl " />
          <p className=" text-xs">Following</p>
        </Link>
        <Link
          href="/account/coupons"
          className="flex hover:text-primary flex-col items-center"
        >
          <Tickets strokeWidth={1} className="text-2xl " />
          <p className=" text-xs">Coupons</p>
        </Link>
      </div>
      <ul className=" w-full cursor-pointer px-2">
        <li>
          <Link
            className=" w-full px-4 py-2 text-lg hover:bg-gray-400 text-dim inline-flex justify-between rounded-md hover:text-white font-normal items-center gap-2"
            href="/account/my_orders"
          >
            <p>My Orders</p>
            <ChevronRight strokeWidth={1} />
          </Link>
        </li>
        <li className=" w-full px-4 py-2 text-lg hover:bg-gray-400 text-dim inline-flex justify-between rounded-md hover:text-white items-center gap-2">
          <p>Coupons</p>
          <ChevronRight strokeWidth={1} />
        </li>
        <li>
          <Link
            className=" w-full px-4 py-2 text-lg hover:bg-gray-400 text-dim inline-flex justify-between rounded-md hover:text-white items-center gap-2"
            href="/account/help_center"
          >
            <p>Help Center</p>
            <ChevronRight strokeWidth={1} />
          </Link>
        </li>
        <li>
          <Link
            className=" w-full px-4 py-2 text-lg hover:bg-gray-400 text-dim inline-flex justify-between rounded-md hover:text-white font-normal items-center gap-2"
            href="/account/settings"
          >
            <p>Settings</p>
            <ChevronRight strokeWidth={1} />
          </Link>
        </li>
        <li
          onClick={() => signOut()}
          className=" w-full px-4 py-2 text-lg hover:bg-gray-400 text-dim inline-flex justify-between rounded-md hover:text-white font-normal items-center gap-2"
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
