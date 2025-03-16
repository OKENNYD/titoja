"use client";
import Link from "next/link";
import Image from "next/image"
import Searchbar from "../SearchBar/Searchbar";
import Avatar from "../Avatar/Avatar";
import Dropdown from "../Dropdown/Dropdown";
import { useGlobalContext } from "@/_util/constants/context";
import Cart from "../Icon/Cart";
import Country from "../Country/Country";
import Languages from "../Languages/Languages";
import Nav from "../Nav/Nav";
import { Menu } from "lucide-react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Header() {
  const { isMenu, setIsMenu, setIsDropDown } = useGlobalContext();
  const pathname = usePathname()
    useEffect(()=>{
      setIsDropDown(false)
    },[setIsDropDown,pathname])
  
  return (
    <header className="z-50 sticky left-0 top-0 py-2 px-14 max-md:py-1 max-md:px-2 w-full h-auto max-md:h-auto bg-white border-b-2 border-gray-100 flex flex-col gap-2">
      <div className=" flex items-center gap-6">
          <Link href="/" className="max-md:hidden w-auto h-full">
            <Image
              src="/assets/img/logo.png"
              alt="@Titoja"
              priority
              width={150}
              height={70}
              className="w-auto h-full"
            />
          </Link>
        <div className="w-full flex max-md:flex-col-reverse justify-between">
          <Searchbar />
          <div className="w-auto flex max-md:justify-between items-center">
            <div className="md:hidden flex gap-2 items-center">
              <Menu
                size={40}
                strokeWidth={2}
                onClick={() => setIsMenu(!isMenu)}
                className="sm-hidden"
              />
              <Link href="/">
                <Image
                  src="/assets/img/logo.png"
                  alt="@Titoja"
                  priority
                  width={150}
                  height={100}
                  className="w-auto h-auto"
                />
              </Link>  
            </div>
            <div className="pl-2 justify-end w-full items-center text-gray-400 flex gap-2">
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
