'use client'
import { useState, useEffect } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
export default function Carousel({interval=10000}) {
    let [count,setCount] = useState(0)
    let slides = [{"id" : 1,"title": "slide topics 1", "src" : "url"},
        {"id" : 2,"title": "slide topics 2", "src" : "url"},
        {"id" : 3,"title": "slide topics 3", "src" : "url"},
        {"id" : 4,"title": "slide topics 4", "src" : "url"},
        {"id" : 5,"title": "slide topics 5", "src" : "url"},
        {"id" : 6,"title": "slide topics 6", "src" : "url"}]
    useEffect(() => {
       let intervalId = setInterval(handleRightClick,interval)
       return () => clearInterval(intervalId);
    })
    const handleRightClick = (e) => { 
        setCount((NextValue)=>(NextValue+1))
        if (count == slides.length-1) {
            setCount(0)
        }
    }
    let currentSlide = slides.filter(slide => slide.id == count);
    //"w-[980px] h-[416px]
  return (
    
    <div className="w-full h-auto relative rounded-2xl bg-white">
      <div className="slides w-full object-cover flex rounded-2xl overflow-hidden h-full ">
        {currentSlide.map((_s, i) => (
          <div
            key={i}
            className="w-full h-full flex justify-center items-center text-white max-md:h-auto text-3xl font-extrabold bg-secondary object-cover"
          >
            <p>{_s.title}</p>
          </div>
        ))}
      </div>
      <div className="controls w-full h-full absolute top-0 left-0">
        <div className="w-full h-[90%] px-2 flex justify-between items-center">
          <span className=" w-auto h-auto rounded-full p-2 text-4xl text-primary">
            <IoChevronBackOutline
              onClick={(e) => {
                setCount(count--);
                if(count == 0){
                    setCount(slides.length-1)
                }}}
            />
          </span>
          <span className=" w-auto h-auto rounded-full p-2 text-4xl text-primary">
            <IoChevronForwardOutline
              onClick={(e) => {
                setCount(count++);
                if (count == slides.length) {
                    setCount(0)
                }}}
            />
          </span>
        </div>
        <div className="w-full h-auto p-2 flex gap-2 items-center justify-center">
          {slides.map((_p, j) => (
            <span
              key={j}
              onClick={() => setCount(_p.id)}
              className={
                count == _p.id
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