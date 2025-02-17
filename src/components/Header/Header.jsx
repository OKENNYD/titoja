"use client";
import Link from "next/link";
import Image from "next/image"
import Images from "@/_util/constants/images"
import Searchbar from "../SearchBar/Searchbar";
import Avatar from "../Avatar/Avatar";
import Dropdown from "../Dropdown/Dropdown";
import { useGlobalContext } from "@/_util/constants/context";
import Cart from "../Icon/Cart";
import Country from "../Country/Country";
import Languages from "../Languages/Languages";
import Nav from "../Nav/Nav";
import { Menu } from "lucide-react";
export default function Header() {
  const { isMenu, setIsMenu, setIsDropDown } = useGlobalContext();
  return (
    <header className="z-50 sticky left-0 top-0 py-4 px-14 max-md:py-1 max-md:px-2 w-full h-auto max-md:h-auto bg-white border-b-2 border-gray-100 flex flex-col gap-2">
      <div className=" flex items-center gap-4">
        <div className="w-auto max-md:hidden flex gap-2 items-center ">
          <Link href="/"><Image
              src="/assets/img/light.png"
              alt="@Titoja"
              priority
              width={150}
              height={70}
            />
          </Link>
        </div>
        <div className="w-full flex max-md:flex-col-reverse">
          <Searchbar />
          <div className="w-auto flex max-md:justify-between items-center">
            <div className="sm:hidden flex gap-2 items-center">
              <Menu
                size={48}
                strokeWidth={1.5}
                onClick={() => setIsMenu(!isMenu)}
                className="sm-hidden"
              />
              <Link href="/">
                <Image
                  src={Images.dark}
                  alt="@Titoja"
                  priority
                  className="w-auto h-"
                />
              </Link>  
            </div>
            <div className="px-2 justify-end w-full items-center text-slate-400 flex gap-4">
              <div className="flex gap-2 ">
                <Country />
                <Languages />
              </div>
              <Link
                className=" text-primary fill-primary"
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
    </header>
  );
}
