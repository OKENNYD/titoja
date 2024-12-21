"use client";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
export default function Test(options) {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState(options[1]);
  return (
    <div
      onMouseLeave={() => {
        isOpen == true && setIsOpen(false);
      }}
      onMouseEnter={() => {
        isOpen == false && setIsOpen(true);
      }}
      className="relative w-fit"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex text-base text-nowrap cursor-pointer gap-1 w-fit items-center h-auto px-2 py-1 bg-primary dark:bg-secondary text-white font-normal rounded-full"
      >
        <span>{select}</span>
        <IoChevronDown />
      </div>
      {isOpen && (
        <ul className="absolute shadow shadow-gray-400 z-[50] text-nowrap w-fit h-fit bg-white dark:bg-dim border border-gray-400 rounded-xl overflow-hidden">
          {select?.map((_, i) => (
            <li
              onClick={() => {
                setIsOpen(!isOpen);
                setSelect(_.name);
              }}
              className={`hover:bg-gray-300 px-2 py-1 ${
                select == _ && bg - gray - 400
              } `}
              key={i}
            >
              {_}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
