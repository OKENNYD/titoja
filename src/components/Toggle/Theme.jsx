'use client'
import { useState } from "react" 
export default function Theme() {
  let [toggle, setToggle] = useState(true)
  return (
    <div
      onClick={() => toggle ? setToggle(false) : setToggle(true)}
      className="w-10 box-border h-5 rounded-full flex bg-dim dark:bg-gray-400 transition-colors duration-700"
    >
      <div
        className={`size-5 aspect-square rounded-full bg-gray-200 duration-700 transition-transform p-[2px] ${
          toggle ? "translate-x-0" : "translate-x-full"
        } flex justify-center items-center`}
      >
      </div>
    </div>
  );
}
