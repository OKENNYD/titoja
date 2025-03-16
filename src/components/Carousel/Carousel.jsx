"use client";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function Carousel({ interval = 8000 }) {
  const [count, setCount] = useState(0);
  const slides = [
    { id: 0, title: "Slide Topic 1", src: "/assets/img/banner1.webp" },
    { id: 1, title: "Slide Topic 2", src: "/assets/img/banner2.webp" },
    { id: 2, title: "Slide Topic 3", src: "/assets/img/banner3.webp" },
    { id: 3, title: "Slide Topic 4", src: "/assets/img/banner4.webp" }
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
    <div className="w-full h-auto aspect-[21/4] max-md:aspect-[21/9] relative rounded-2xl">
      <div className="slides w-full object-cover flex rounded-2xl overflow-hidden h-full">
        <Image alt="" src={currentSlide.src} className="w-full h-full object-cover aspect-[21/4]" width={100} height={100}/>
        {/* <div >
          <p>{currentSlide.title}</p>
        </div> */}
      </div>
      <div className="controls w-full h-full absolute top-0 left-0">
        <div className="w-full h-[90%] px-2 max-md:px-0 max-md:text-white flex justify-between items-center">
          <span
            className="w-auto h-auto rounded-full p-2 text-4xl text-secondary cursor-pointer"
            onClick={handleLeftClick}
          >
            <ChevronLeft strokeWidth={2} size={35}/>
          </span>
          <span
            className="w-auto h-auto rounded-full p-2 text-4xl text-secondary cursor-pointer"
            onClick={handleRightClick}
          >
            <ChevronRight strokeWidth={2} size={35}/>
          </span>
        </div>
        <div className="w-full h-auto p-2 max-md:p-0 flex gap-2 items-center justify-center">
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
