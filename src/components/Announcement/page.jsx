"use client";
import { Megaphone } from "lucide-react";
import { useState, useEffect } from "react";
export default function Announcement({ message }) {
  const [offset, setOffset] = useState(0);
  const [date, setDate] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 100);
  }, []);
  useEffect(() => {
    let time = new Date().getDate()   
    setDate()
  }, []);
  return (
    <div className="w-full rounded-full h-10 bg-white overflow-hidden px-2 max-md:px-1 flex flex-nowrap items-center gap-2">
      <Megaphone
        strokeWidth={1}
        size={25}
        className="text-primary animate-pulse rotate-[340deg] "
      />
      <div className="w-full h-auto py-2 overflow-hidden">
        <span className="w-full text-lg text-nowrap text-secondary ease-out announceAnimate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa dolorum, quas tempore dicta a quisquam voluptatum aliquid labore reiciendis? Ad minus velit voluptate accusamus nemo esse repellendus rerum eius?
        </span>
      </div>
    </div>
  );
}