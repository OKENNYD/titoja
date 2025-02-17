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
    <div className="w-full rounded-full h-10 bg-white overflow-hidden px-4 flex flex-nowrap items-center gap-4">
      <Megaphone
        strokeWidth={2}
        className="text-secondary animate-pulse text-3xl"
      />
      <span className="text-lg text-nowrap pe-4 text-dim opacity-60 ease-out overflow-x-hidden announceAnimate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa dolorum, quas tempore dicta a quisquam voluptatum aliquid labore reiciendis? Ad minus velit voluptate accusamus nemo esse repellendus rerum eius?
      </span>
    </div>
  );
}