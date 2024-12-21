"use client";
import Link from "next/link"
import {useState} from "react"
import departments from "@/_util/api/departments";
import { useGlobalContext } from "@/_util/constants/context";
import Logo from "../Icon/Logo";
import { IoChevronDown, IoClose } from "react-icons/io5";
export default function Menu() {
  var {isMenu,setIsMenu } = useGlobalContext();
  const [active, setActive] = useState(false);
  return (
    <div className={isMenu ? "bg-gray-400 duration-1000 transition dark:bg-dim z-[100] bg-opacity-50 dark:bg-opacity-30 w-full sm:hidden h-full fixed top-0 left-0 block" : "hidden" }>
      <div className="w-4/5 bg-white dark:bg-dark h-full rounded-tr-xl pb-6 overflow-y-scroll scroll-none ">
        <div className="w-full sticky border-b-2 flex justify-between items-center border-slate-300 p-4">
        <Logo className="h-4"/>
        <IoClose onClick={()=>setIsMenu(!isMenu)} className=" cursor-pointer text-2xl text-slate-400"/>
        </div>
        <ul className="w-full h-full px-4 py-3 overflow-y-scroll">
          <p className="text-base text-slate-800 font-bold capitalize">categories</p>
        {departments?.map((_d,i) => (
          <li className="w-full cursor-pointer" key={i}>
            <span onClick={()=>setActive(_d.id)} className="w-full flex justify-between font-semibold items-center p-1">
              {_d.name}
                <IoChevronDown className=" text-base" />
            </span>
            {active === _d.id && <ul className="">
              {_d.categories?.map((_c,j)=> <li className="ps-4 font-medium" key={j}>
                <p>{_c.name}</p>
                <ul>
                  {_c.segments?.map((_s,k)=> <li className="ps-4" key={k}>
                  <Link className="font-normal text-dim dark:text-gray-200 text-base" href={"/departments?"+"department="+ _d.name +"-"+ "category=" + _c.name +"-"+ "segment="+ _s}>{_s}</Link>
                  </li>)}
                </ul>
              </li>)}
              </ul>}
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}
