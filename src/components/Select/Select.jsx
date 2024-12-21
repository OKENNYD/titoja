"use client"
import { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'
export default function Select({primary, options, style}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(primary);
  return (
    <div className="relative w-fit" onMouseLeave={() => setIsOpen(false)}>
      <input readOnly type="text" name="select" value={selectedOption} className="hidden" />
      <span
        className={`bg-transparent w-auto text-dim dark:text-gray-200 font-normal py-2 capitalize flex items-center text-nowrap ${style}`}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(!isOpen)}
      >
        {selectedOption}&nbsp;
        <IoChevronDown />
      </span>
      {isOpen && (
        <ul className="absolute z-10 w-auto shadow-md shadow-gray-400 text-nowrap h-auto bg-white dark:bg-dim border border-gray-400 rounded-xl overflow-hidden">
          {options?.map((option, i) => (
            <li
              key={i}
              className={`hover:bg-gray-400 hover:text-dim px-2 py-1 ${
                selectedOption === option && "bg-secondary"
              } `}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
