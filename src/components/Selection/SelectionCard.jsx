'use client'
import departments from "@/_util/api/department";
import { useState, useRef } from "react"
import { IoChevronDown } from "react-icons/io5";
export default function SelectionCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState("All Category")
  return (
    <div
      onMouseLeave={() => {
        isOpen == true && setIsOpen(false);
      }}
      onMouseEnter={() => {
        isOpen == false && setIsOpen(true);
      }}
      className="relative"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex text-base text-nowrap cursor-pointer gap-1 w-auto items-center h-full px-2 py-1 bg-primary text-white font-normal rounded-full"
      >
        <span>{select}</span>
        <IoChevronDown />
      </div>
      {isOpen && (
        <ul className="absolute shadow-sm shadow-dim z-[50] text-nowrap w-auto h-auto bg-white rounded-xl overflow-hidden">
          <li
            onClick={() => {
              setIsOpen(!isOpen);
              setSelect("All Category");
            }}
            className={`hover:bg-gray-100 text-dark px-2 py-1 ${
              select == "All Category" && "bg-secondary"
            } `}
          >
            All Category
          </li>
          {departments?.map((_, i) => (
            <li
              onClick={() => {
                setIsOpen(!isOpen);
                setSelect(_.department);
              }}
              className={`hover:bg-gray-100 text-dark hover:text-dim px-2 py-1 ${
                select == _.department && "bg-secondary"
              } `}
              key={i}
            >
              {_.department}
            </li>
          ))}
        </ul>
      )}
    </div>
  ); 
}
