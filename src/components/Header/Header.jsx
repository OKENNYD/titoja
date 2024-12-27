"use client";
import Link from "next/link";
import Image from "next/image"
import Images from "@/_util/constants/images"
import Searchbar from "../SearchBar/Searchbar";
import { IoMenu } from "react-icons/io5";
import Avatar from "../Avatar/Avatar";
import Dropdown from "../Dropdown/Dropdown";
import { useGlobalContext } from "@/_util/constants/context";
import Cart from "../Icon/Cart";
import Country from "../Country/Country";
import Languages from "../Languages/Languages";
import Theme from "../Toggle/Theme";
import Nav from "../Nav/Nav";
import { useTheme } from "next-themes";
import Test from "../test/test";
export default function Header() {
  let { theme } = useTheme();
  const { isMenu, setIsMenu, setIsDropDown } = useGlobalContext();
  return (
    <header className="z-50 sticky left-0 top-0 py-4 px-14 max-md:px-2 w-full h-auto max-md:h-auto bg-white border-b-2 border-gray-100 dark:border-dim dark:bg-dark flex flex-col gap-2">
      <div className=" flex items-center gap-4">
        <div className="w-auto max-md:hidden flex gap-2 items-center ">
          <Link href="/">
            <Image
              src={Images.light}
              alt="@Titoja"
              priority
              className="w-40 max-sm:w-32 h-auto dark:hidden"
            />
            <Image
              src={Images.dark}
              alt="@Titoja"
              priority
              className="hidden dark:block w-40 max-sm:w-32 h-auto"
            />
          </Link>
        </div>
        <div className="w-full flex max-md:flex-col-reverse">
          <Searchbar />
          <div className="w-auto flex max-md:justify-between items-center">
            <div className="hidden max-md:flex max-md:w-auto gap-2 items-center ">
              <IoMenu
                onClick={() => setIsMenu(!isMenu)}
                className="text-4xl sm-hidden"
              />
              <Link href="/">
                <Image
                  src={theme == "light " ? Images.dark : Images.light}
                  alt="@Titoja"
                  priority
                  className="w-24 h-auto"
                />
              </Link>
            </div>
            <div className="px-2 justify-end w-full items-center text-slate-400 flex gap-4">
              <Theme />
              <div className="flex gap-2 max-md:hidden">
                <Country />
                <Languages />
              </div>
              <Link
                className=" text-primary dark:text-secondary fill-primary dark:fill-secondary "
                href="/cart"
              >
                <Cart />
              </Link>
              <div
                onMouseEnter={() => setIsDropDown(true)}
                onMouseLeave={() => setIsDropDown(false)}
                className="relative w-auto flex flex-col"
              >
                <Avatar />
                <Dropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav />
      {/* <Test/> */}
    </header>
  );
}
