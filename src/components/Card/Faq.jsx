"use client"
import { useState } from "react";
import { FaPlus, FaQuestion, FaMinus } from 'react-icons/fa6';
export default function Faq() {
  let [isOpen, setIsOpen] = useState(false)
  return (
    <details className="w-full marker:hidden trans-3 bg-slate-200 h-fit rounded-lg ">
      <summary onClick={() => { setIsOpen(!isOpen) }} className="flex h-10 w-full px-3 py-2 justify-between items-center transition-all">
        <div className="flex gap-2 items-center">
          <FaQuestion className="text-lg text-dim" />
          <p className="font-semibold text-dim line-clamp-1">Question Stays Here</p>
        </div>
        {isOpen ? <FaMinus className="text-lg text-dim" /> : <FaPlus className="text-lg text-dim" />}
      </summary>
      <div className="px-3 pb-2">
        <p className="text-dim z-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque! Voluptatem, officia adipisci iure optio voluptates rerum asperiores dignissimos incidunt expedita, praesentium cumque aliquid perferendis beatae sequi, itaque quisquam at!
        </p>
      </div>
    </details>
  )
}
