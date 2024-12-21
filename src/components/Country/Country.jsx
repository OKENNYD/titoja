"use client";
import { useState } from "react";
import Image from "next/image"
import World from "world-directory";
import { IoChevronDown } from "react-icons/io5";
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default function Country() {
  let [_c, set_c] = useState(
    World.getCountries()?.filter((_c) => _c.shortName == "NG")
  );
  return (
    <div className="w-fit flex gap-1 dark:text-gray-200 text-dark font-normal items-center">
      <span className={`fi fi-${_c[0].shortName.toLowerCase()}`}></span>
      {_c[0].shortName}
      <IoChevronDown />
      {/* <Image src="public/img/flags/ad.svg" alt="country flag" width={10} height={10}/> */}
    </div>
  );
}
