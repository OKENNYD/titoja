"use client";
import Link from "next/link";
import departments from "@/_util/api/department";
import { useState, useEffect } from "react";
import { AlignLeft, ChevronDown } from "lucide-react";
export default function Nav() {
  let [activeDepartment, setActiveDepartment] = useState(null)
  return (
    <nav className="w-full max-md:hidden overflow-x-clip">
      <ul className="w-full overflow-x-scroll scroll-none flex gap-0 box-border">
        <li>
          <Link
            href="/"
            className="text-nowrap hover:bg-gray-100 px-3 py-1 whitespace-nowrap rounded-full text-dim text-lg inline-flex gap-1 justify-center items-center"
          >
            <AlignLeft strokeWidth={1.5} className="text-base" />
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
            <span className="text-nowrap hover:bg-gray-100 px-3 py-1 whitespace-nowrap rounded-full font-normal text-dim text-lg inline-flex gap-1 justify-center items-center">
              {_d.department}
              <ChevronDown strokeWidth={1.5} className=" text-base" />
            </span>
            <ul
              id="category"
              className={
                activeDepartment === _d.id
                  ? "place-content-around absolute bg-white shadow-sm shadow-slate-400 p-4 mt-2 mx-auto rounded-lg w-auto text-lg flex gap-4 text-nowrap font-normal text-dark"
                  : "hidden"
              }
            >
              {_d.categories?.map((_c, j) => (
                <li key={j} className="relative">
                  <p className="font-medium text-base">{_c.name}</p>
                  <ul className="ml-2">
                    {_c.segments?.map((_s, k) => (
                      <li key={k} className="text-sm font medium">
                        <Link
                          className="font-normal text-dim text-lg hover:text-primary"
                          href={
                            "/departments?" +
                            "department=" +
                            _d.department +
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
