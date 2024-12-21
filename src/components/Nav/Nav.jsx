"use client";
import Link from "next/link";
import departments from "@/_util/api/departments";
import { useState, useEffect } from "react"
import { FaAlignLeft, FaChevronDown } from "react-icons/fa6";
export default function Nav() {
  let [activeDepartment, setActiveDepartment] = useState(null)
  return (
    <nav className="w-full max-md:hidden">
      <ul className="w-full overflow-x-scroll scroll-none flex gap-0 box-border">
        <li>
          <Link
            href="/"
            className="text-nowrap hover:bg-gray-100 hover:dark:bg-dim px-3 py-1 whitespace-nowrap rounded-full text-dim dark:text-gray-400 text-lg inline-flex gap-1 justify-center items-center"
          >
            <FaAlignLeft className=" text-base" />
            All Categories
          </Link>
        </li>
        {departments?.map((_d, i) => (
          <li
            onMouseEnter={() => setActiveDepartment(_d.id)}
            onMouseLeave={() => setActiveDepartment(null)}
            key={i}
            className="cursor-pointer w-auto"
          >
            <span className="text-nowrap hover:bg-gray-100 hover:dark:bg-dim px-3 py-1 whitespace-nowrap rounded-full font-normal text-dim dark:text-gray-400 text-lg inline-flex gap-1 justify-center items-center">
              {_d.name}
              <FaChevronDown className=" text-base" />
            </span>
            <ul
              id="category"
              className={
                activeDepartment === _d.id
                  ? "place-content-around absolute dark:bg-dark bg-white shadow-sm shadow-slate-400 dark:shadow-dim p-4 mt-2 rounded-lg w-auto text-lg flex gap-4 text-nowrap font-normal text-dark"
                  : "hidden"
              }
            >
              {_d.categories?.map((_c, j) => (
                <li key={j} className="relative">
                  <p className="font-medium text-lg dark:text-gray-200">
                    {_c.name}
                  </p>
                  <ul className="ml-2">
                    {_c.segments?.map((_s, k) => (
                      <li key={k} className="text-base font medium">
                        <Link
                          className="font-normal text-dim dark:text-gray-400 text-lg hover:text-primary dark:hover:text-secondary"
                          href={
                            "/departments?" +
                            "department=" +
                            _d.name +
                            "&" +
                            "category=" +
                            _c.name +
                            "&" +
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
          </li>
        ))}
      </ul>
    </nav>
  );
}