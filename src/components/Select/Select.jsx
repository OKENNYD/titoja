"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function Select({primary, options, style}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(primary);
  return (
    <div className="relative w-fit" onMouseLeave={() => setIsOpen(false)}>
      <input
        readOnly
        type="text" 
        name="select"
        value={selectedOption}
        className="hidden"
      />
      <span
        className={`bg-transparent w-auto text-dim py-2 capitalize flex items-center text-nowrap ${style}`}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(!isOpen)}
      >
        {selectedOption}&nbsp;
        <ChevronDown strokeWidth={1.5} />
      </span>
      {isOpen && (
        <ul className="absolute z-10 w-auto shadow-md shadow-gray-400 text-nowrap h-auto bg-white border border-gray-400 rounded-xl overflow-hidden">
          {options?.map((option, i) => (
            <li
              key={i}
              className={`hover:text-dim px-2 py-1 ${
                selectedOption === option.value ? "bg-secondary bg-opacity-60" : "hover:bg-gray-400"
              } `}
              onClick={() => {
                setSelectedOption(option.value);
                setIsOpen(false);
              }}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
