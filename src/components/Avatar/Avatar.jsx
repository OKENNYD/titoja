"use client"
import Image from "next/image";
import Images from "@/_util/constants/images";
import { ChevronDown, ChevronUp, User } from "lucide-react";
import Link from "next/link";
import { useGlobalContext } from "@/_util/constants/context";
export default function Avatar() {
  var { isLogged, isDropDown } = useGlobalContext();
  return (
    <div>
      {isLogged ? (
        <div className="w-auto flex cursor-pointer items-center gap-1">
          <Image
            src={Images.avatar}
            alt="avatar_icon"
            className=" w-8 h-8 rounded-full"
            priority
            width={100}
            height={100}
          />
          {isDropDown ? (
            <ChevronUp strokeWidth={1.5} size={30} className="text-dim" />
          ) : (
            <ChevronDown strokeWidth={1.5} size={30} className="text-dim" />
          )}
        </div>
      ) : (
        <Link className=" flex items-center w-auto h-auto" href="/signin">
          <div className="w-auto text-gray-400 h-auto flex items-center gap-1">
            <User size={35}/>
            <ChevronDown strokeWidth={1.5} className="text-lg fill-dim max-md:w-5" />
          </div>
        </Link>
      )}
    </div>
  );
}
