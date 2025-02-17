"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
export default function Country() {
  return (
    <div className="w-fit flex gap-1 text-dark items-center">
      <Image
        src="/assets/img/flags/ng.svg"
        alt="country flag"
        width={20}
        height={10}
      />
      <ChevronDown strokeWidth={1.5} />
    </div>
  );
}