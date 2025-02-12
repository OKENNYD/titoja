"use client";
import { useState } from "react";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
export default function Country() {
  return (
    <div className="w-fit flex gap-1 text-dark items-center">
      {"/asserts/img/flags/ad.svg"}
      <IoChevronDown />
      {/* <Image src="public/img/flags/ad.svg" alt="country flag" width={10} height={10}/> */}
    </div>
  );
}
