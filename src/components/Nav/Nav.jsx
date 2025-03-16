"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AlignLeft, ChevronDown } from "lucide-react";
export default function Nav() {
  let [departments, setDepartments] = useState([])
  useEffect(() => {
    fetch("/api/departments")
      .then((res) => res.json())
      .then((data) => {
        setDepartments(data);
      });
  }, []);
  let [offers, setOffers] = useState([])
  useEffect(() => {
    fetch("/api/offers")
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
      });
  }, []);
  let [isOpen, setIsOpen] = useState(false)
  let [activeDepartment, setActiveDepartment] = useState(null)
  return (
    <nav className="w-full max-md:hidden overflow-x-clip flex gap-2 items-center">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="relative w-auto">
        <div
          className="text-nowrap w-auto hover:bg-gray-100 px-3 py-1 whitespace-nowrap rounded-full text-dim text-base flex gap-1 justify-center items-center"
        >
          <AlignLeft strokeWidth={1.5} size={20} />
          All Categories
        </div>
        {isOpen ? <div className="flex gap-1 absolute bg-white h-[70vh] w-auto shadow-sm shadow-dim rounded-lg">
          <ul className="overflow-y-scroll ">
            {departments?.map((_d, i) => (
              <li
                onMouseEnter={() => setActiveDepartment(_d.id)}
                key={i}
                className="text-nowrap w-full cursor-pointer hover:bg-gray-100 hover:text-secondary px-3 py-1 whitespace-nowrap text-dim text-base">
                {_d.department}
              </li>
            ))}
          </ul>
          {activeDepartment ? <div className="flex flex-col w-max flex-wrap gap-y-2 gap-x-4 p-4">
            {departments[activeDepartment]?.categories.map((_c, j) => (
              <div key={j} className="relative">
                <p className="font-medium text-base">{_c.name}</p>
                <div className="flex flex-col">
                  {_c.segments?.map((_s, k) => (
                    <Link
                      key={k}
                      className="font-normal text-base text-dim hover:text-primary"
                      href={
                        "/departments?" +
                        "department=" +
                        departments[activeDepartment].department +
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
                  ))}
                </div>
              </div>
            ))}
          </div>: null}
        </div> : null}
      </div>
      <ul className="flex gap-2 items-center">
        {offers.map((_,i)=>(
          <li key={i} className="text-nowrap w-fit hover:bg-gray-100 px-3 py-1 whitespace-nowrap rounded-full text-dim text-base flex gap-1 justify-center items-center">{_}</li>
        ))}
      </ul>
    </nav>
  );
}