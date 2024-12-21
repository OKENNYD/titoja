"use client";
import { useState, useEffect,useRef } from "react";
import depts from "@/_util/api/departments";
import { IoAperture, IoSearch } from "react-icons/io5";
import Selection from "../Selection/SelectionCard"
import Search from "../Dropdown/Search";
import { useRouter } from "next/navigation";
export default function Searchbar() {
  let [isCamera, setIsCamera] = useState(false)
  let [placeholderVal, setPlaceholderVal] = useState("search");
  let [isSearch,setIsSearch ] = useState(false);
  let [isprompt, setIsPrompt] = useState();
  let searchPrompt = useRef(null)
  let imageVal = useRef(null)
  let router = useRouter()
  useEffect(() => {
    setInterval(() => {
      for (let i = 0; i < depts.length; i++) {
        setPlaceholderVal(
          depts[Math.floor(Math.random() * depts.length)].name
        );
      }
    }, 10000);
  }, []);
  return (
    <div className="w-3/4 max-md:w-full relative">
      <form
        encType="utf-8"
        method="POST"
        action={async(searchParam) => {
          const searchObj = {
            search : searchParam.get("search"),
            category: searchParam.get("category_selection")
          }; router.push("/search?category="+ searchObj.category + "&product=" + searchObj.search)}}
        className="w-full relative flex dark:bg-dim bg-gray-100 max-md:items-center max-md:justify-center rounded-3xl max-md:h-10 max-md:mt-2 p-1 bg-opacity-70 items-center h-10"
      >
        <Selection />
        <input
          type="search"
          name="search"
          id="search"
          onFocus={()=>setIsSearch(true)}
          onBlur={()=>setIsSearch(false)}
          ref={searchPrompt}
          onChange={()=>setIsPrompt(searchPrompt.current.value)}
          placeholder={placeholderVal}
          className=" default:hidden marker:hidden w-full ps-2 placeholder:text-slate-400 placeholder:dark:text-gray-200 marker:text-dim dark:marker:text-white max-md:placeholder:font-medium max-md:placeholder:text-lg bg-transparent caret-primary text-dim dark:text-gray-400 font-normal text-lg outline-none"
        />
        <div 
        onMouseEnter={()=>setIsCamera(true)}
        onMouseLeave={()=>setIsCamera(false)}
          className=" text-white my-2 fill-white align-middle relative p-2"
        ><IoAperture  size={25} className="text-slate-400 dark:text-gray-200"/>
        {isCamera && <div className="bg-gray-100 dark:bg-dark shadow shadow-gray-400 dark:shadow-gray-dim p-2 z-50 w-72 h-48 absolute rounded-2xl flex justify-center items-center">
        <div className="w-full h-full flex flex-col gap-2" >
          <div className="bg-white dark:bg-dim h-full rounded-lg w-full flex flex-col justify-center items-center">
          <p className="font-medium text-base text-dim dark:text-gray-200">Upload Image&nbsp; 
            <label className=" underline" htmlFor="imgUpld">here
            <input ref={imageVal} className=" sr-only" type="file" accept="jpg" name="imgUpld" id="imgUpld" />
          </label>
           </p>
          </div>
          <button onSubmit={(e) => { e.preventdefault(); router.push("/search?image="+ imageVal.current)}} type="submit" className="w-full rounded-full bg-primary text-base py-1 text-white">
            Search
          </button>
        </div>
    </div>}
        </div>
        <button
          type="submit"
          className=" text-white my-2 fill-white align-middle p-2 rounded-full bg-primary"
        >
          <IoSearch
            size={15}
            className=" text-white align-middle"
          />
        </button>
      </form>
      <Search prompt={isprompt} show={isSearch} /> 
    </div>
  );
}
