"use client";
import { useState, useEffect } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function Carousel({ interval = 10000 }) {
  const [count, setCount] = useState(0);
  const slides = [
    { id: 0, title: "Slide Topic 1", src: "/asserts/img/banner1.png" },
    { id: 1, title: "Slide Topic 2", src: "/asserts/img/banner2.png" },
    { id: 2, title: "Slide Topic 3", src: "/asserts/img/banner3.png" },
    { id: 3, title: "Slide Topic 4", src: "url" },
    { id: 4, title: "Slide Topic 5", src: "url" },
    { id: 5, title: "Slide Topic 6", src: "url" },
  ];

  useEffect(() => {
    const intervalId = setInterval(handleRightClick, interval);
    return () => clearInterval(intervalId);
  }, [interval]);

  const handleRightClick = () => {
    setCount((prevCount) => (prevCount + 1) % slides.length);
  };

  const handleLeftClick = () => {
    setCount((prevCount) => (prevCount - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[count];

  return (
    <div className="w-full h-auto relative rounded-2xl bg-white">
      <div className="slides w-full object-cover flex rounded-2xl overflow-hidden h-full">
        <div className="w-full h-full flex justify-center items-center text-white text-3xl font-extrabold bg-secondary object-cover">
          <p>{currentSlide.title}</p>
        </div>
      </div>
      <div className="controls w-full h-full absolute top-0 left-0">
        <div className="w-full h-[90%] px-2 flex justify-between items-center">
          <span
            className="w-auto h-auto rounded-full p-2 text-4xl text-primary cursor-pointer"
            onClick={handleLeftClick}
          >
            <IoChevronBackOutline />
          </span>
          <span
            className="w-auto h-auto rounded-full p-2 text-4xl text-primary cursor-pointer"
            onClick={handleRightClick}
          >
            <IoChevronForwardOutline />
          </span>
        </div>
        <div className="w-full h-auto p-2 flex gap-2 items-center justify-center">
          {slides.map((slide, j) => (
            <span
              key={j}
              onClick={() => setCount(slide.id)}
              className={
                count === slide.id
                  ? "bg-primary w-2 h-2 rounded-full"
                  : "w-auto h-2 aspect-square hover:scale-125 duration-1000 transition-colors rounded-full bg-slate-200"
              }
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
