"use client";
import { IoMegaphone } from "react-icons/io5";
import { useState, useEffect } from "react";
export default function Announcement({ message }) {
  // const [message, setMessage] = useState("Welcome to Titoja Mall");
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
    <div className="w-full rounded-full h-10 bg-white dark:bg-dark overflow-hidden px-4 flex flex-nowrap items-center gap-4">
      <IoMegaphone className="text-secondary animate-pulse text-2xl" />
      <span
        className={`text-lg text-nowrap pe-4 text-dim dark:text-gray-400 font-normal opacity-60 ease-out`}
      >
        count down to launch {}
      </span>
    </div>
  );
}