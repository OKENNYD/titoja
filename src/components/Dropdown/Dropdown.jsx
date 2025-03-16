import Link from "next/link"
import { signOut } from "next-auth/react"
import { useGlobalContext } from "@/_util/constants/context";
import { LogOut, Bolt, User, Boxes, User2, Users, Ticket } from "lucide-react"
export default function Dropdown() {
  const { isDropDown, setIsDropDown,  } = useGlobalContext();
  return (
    <ul
      className={
        isDropDown
          ? "bg-white trans-3 shadow-gray-400 shadow-sm max-md:shadow-none z-50 absolute w-56 right-0 top-6 max-md:top-0 max-md:bg-white rounded-xl h-auto p-1.5"
          : "hidden"
      }
    >
      <li>
          <Link
            className=" w-full p-2 text-base hover:bg-gray-100 text-dim flex rounded-md items-center gap-1"
            href="/account/user_account"
          >
            <User strokeWidth={1} size={16} />
            Profile
          </Link>
        </li>
        <li>
          <Link
            className=" w-full p-2 text-base hover:bg-gray-100 text-dim flex rounded-md items-center gap-1"
            href="/account/following"
          >
            <Users strokeWidth={1} size={16} />
            Following
          </Link>
        </li>
        <li>
          <Link
            className=" w-full p-2 text-base hover:bg-gray-100 text-dim flex rounded-md items-center gap-1"
            href="/account/coupon"
          >
            <Ticket strokeWidth={1} size={16} />
            Coupon
          </Link>
        </li>
        <li>
          <Link
            className=" w-full p-2 text-base hover:bg-gray-100 text-dim flex rounded-md items-center gap-1"
            href="/account/orders"
          >
            <Boxes strokeWidth={1} size={16} />
            Orders
          </Link>
        </li>
        <li>
          <Link
            className=" w-full p-2 text-base hover:bg-gray-100 text-dim flex rounded-md items-center gap-1"
            href="/account/settings"
          >
            <Bolt strokeWidth={1} size={16} />
            Settings
          </Link>
        </li>
        <li
          onClick={() => signOut()}
          className=" w-full p-2 text-base hover:bg-gray-100 text-dim flex rounded-md font-normal items-center gap-1"
        >
          <LogOut strokeWidth={1} size={16} />
          Logout
        </li>
    </ul>
  );
}
