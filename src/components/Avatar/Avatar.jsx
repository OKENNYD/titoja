"use client"
import Image from "next/image";
import Images from "@/_util/constants/images";
import { IoPerson, IoChevronDown, IoChevronUp} from "react-icons/io5";
import Link from "next/link";
import { useGlobalContext } from "@/_util/constants/context";
import { useSession } from "next-auth/react";
export default function Avatar() {
  var { isLogged, isDropDown } = useGlobalContext();
  let { data: session } = useSession()
  return (
    <div>
      {isLogged ? (
        <div className="w-auto flex cursor-pointer items-center gap-1">
          <Image
            src={Images.avatar}
            alt="avatar_icon"
            className=" w-8 h-8 max-md:w-8 max-md:h-8 rounded-full"
            priority
          ></Image>
            {isDropDown ? (
              <IoChevronUp
                className="max-md:w-5 w-6 text-dim"
              />
            ) : (
              <IoChevronDown
                className="max-md:w-5 w-6 text-dim"
              />
            )}
        </div>
      ) : (
        <Link className=" flex items-center w-auto h-auto" href="/signin">
          <div className="w-auto text-slate-400 h-auto flex items-center gap-1">
            <IoPerson className="text-2xl sm:text-2xl" />
            <IoChevronDown
              className="text-lg fill-dim max-md:w-5  me-2"
            />
          </div>
        </Link>
      )}
    </div>
  );
}
