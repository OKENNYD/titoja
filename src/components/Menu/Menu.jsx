"use client";
import Link from "next/link"
import {useState} from "react"
import department from "@/_util/api/department";
import { useGlobalContext } from "@/_util/constants/context";
import Logo from "../Icon/Logo";
import { IoChevronDown, IoClose } from "react-icons/io5";
export default function Menu() {
  var {isMenu,setIsMenu } = useGlobalContext();
  const [active, setActive] = useState(false);
  return (
    <div
      className={
        isMenu
          ? "bg-gray-400 duration-1000 transition z-[100] bg-opacity-50 w-full sm:hidden h-full fixed top-0 left-0 block"
          : "hidden"
      }
    >
      <div className="w-4/5 bg-white h-full rounded-tr-xl pb-6 overflow-y-scroll scroll-none ">
        <div className="w-full sticky  flex justify-between items-center p-4">
          <Logo className="h-4" />
          <IoClose
            onClick={() => setIsMenu(!isMenu)}
            className=" cursor-pointer text-2xl text-dim"
          />
        </div>
        <ul className="w-full text-lg h-full px-4 py-3 overflow-y-scroll">
          {department?.map((_d, i) => (
            <li className="w-full cursor-pointer" key={i}>
              <span
                onClick={() => setActive(_d.id)}
                className="w-full flex justify-between items-center p-2"
              >
                {_d.department}
                <IoChevronDown className=" text-lg" />
              </span>
              {active === _d.id && (
                <ul className="">
                  {_d.categories?.map((_c, j) => (
                    <li className="ps-4" key={j}>
                      <p>{_c.name}</p>
                      <ul>
                        {_c.segments?.map((_s, k) => (
                          <li className="ps-4" key={k}>
                            <Link
                              className="text-dim text-lg"
                              href={
                                "/departments?" +
                                "department=" +
                                _d.name +
                                "-" +
                                "category=" +
                                _c.name +
                                "-" +
                                "segment=" +
                                _s
                              }
                            >
                              {_s}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
