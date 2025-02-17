"use client";
import { useState, useEffect,useRef } from "react";
import depts from "@/_util/api/departments";
import Selection from "../Selection/SelectionCard"
import SearchDrop from "../Dropdown/Search";
import { Aperture, Search } from "lucide-react";
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
        className="w-full relative flex bg-gray-100 max-md:items-center max-md:justify-center rounded-3xl max-md:mt-2 p-1 bg-opacity-70 items-center h-10 max-md:h-12"
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
          className=" default:hidden marker:hidden w-full ps-2 placeholder:text-dim marker:text-dim max-md:placeholder:text-lg bg-transparent caret-primary text-dim text-lg outline-none"
        />
        <div 
        onMouseEnter={()=>setIsCamera(true)}
        onMouseLeave={()=>setIsCamera(false)}
          className=" text-white my-2 fill-white align-middle relative p-2"
        ><Aperture strokeWidth={1} size={25} className="text-slate-400 max-md:text-4xl"/>
        {isCamera && <div className="bg-gray-100 shadow shadow-gray-400  p-2 z-50 w-72 h-48 absolute rounded-2xl flex justify-center items-center max-md:right-2">
        <div className="w-full h-full flex flex-col gap-2" >
          <div className="bg-white h-full rounded-lg w-full flex flex-col justify-center items-center">
          <p className="font-medium text-base text-dim">Upload Image&nbsp; 
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
          className=" text-white my-2 fill-white aspect-square w-auto h-full justify-center items-center flex p-2 rounded-full bg-primary"
        >
          <Search
          strokeWidth={2}
            size={15}
            className="max-md:text-4xl text-white text-center"
          />
        </button>
      </form>
      <SearchDrop prompt={isprompt} show={isSearch} /> 
    </div>
  );
}
