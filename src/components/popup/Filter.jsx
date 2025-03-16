"use client";
import departments from "@/_util/api/department";
import { ArrowDownWideNarrow } from "lucide-react";
export default function FilterPopUp() {
  let sizes = [
    { range: "0-12" },
    { range: "13-24" },
    { range: "25-36" },
    { range: "37-48" },
  ];
  let prices = [
    { range: "0-12" },
    { range: "13-24" },
    { range: "25-36" },
    { range: "37-48" },
  ];
  let materials = [
    { type: "silk" },
    { type: "cotton" },
    { type: "linen" },
    { type: "leather" },
  ];
  let plugs = [
    { type: "UK" },
    { type: "USA" },
    { type: "INDIAN" },
    { type: "Chinese" },
  ];
  let colors = [
    { range: "0-12" },
    { range: "13-24" },
    { range: "25-36" },
    { range: "37-48" },
  ];
  return (
    <aside className="w-full md:hidden h-full flex justify-center items-center absolute top-0 left-0 z-50 py-8 bg-opacity-20 bg-gray-100">
      <form
        encType="utf-8"
        method="POST"
        className="p-4 my-14 h-fit w-3/5 rounded-2xl bg-white cursor-pointer"
      >
        <div className=" justify-between flex text-dim items-center font-bold text-lg overflow-y-scroll">
          <p>Filter</p>
          <ArrowDownWideNarrow size={20} />
        </div>
        <ul className=" h-auto scroll-none overflow-y-scroll">
          <li>
            <p className="text-lg font-semibold text-dim">Category</p>
            <ul className="ms-2 accent-secondary">
              {departments.map((_c, i) => (
                <li
                  key={i}
                  className="flex gap-1 text-base text-dim text-nowrap"
                >
                  <input type="checkbox" name="category" id={_c.name} />
                  <label htmlFor={_c.name}>{_c.name}</label>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold text-dim">Size</p>
            <ul className="ms-2 accent-secondary">
              {sizes.map((_s, i) => (
                <li key={i} className="flex gap-1 text-base font-medium ">
                  <input type="checkbox" name="category" id={_s.range} />
                  <label htmlFor={_s.range}>{_s.range}</label>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold text-dim">Color</p>
            <ul className="ms-2 accent-secondary">
              {sizes.map((_s, i) => (
                <li key={i} className="flex gap-1 text-sm font-medium ">
                  <input type="checkbox" name="category" id={_s.range} />
                  <label htmlFor={_s.range}>{_s.range}</label>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold text-dim">Price</p>
            <ul className="ms-2 accent-secondary">
              {prices.map((_p, i) => (
                <li key={i} className="flex gap-1 text-sm font-medium ">
                  <input type="checkbox" name="category" id={_p.range} />
                  <label htmlFor={_p.range}>{_p.range}</label>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold text-dim">Plug</p>
            <ul className="ms-2 accent-secondary">
              {plugs.map((_l, i) => (
                <li key={i} className="flex gap-1 text-sm font-medium ">
                  <input type="checkbox" name="category" id={_l.type} />
                  <label htmlFor={_l.type}>{_l.type}</label>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <p className="text-lg font-semibold text-dim">Materials</p>
            <ul className="ms-2 accent-secondary">
              {materials.map((_m, i) => (
                <li key={i} className="flex gap-1 text-sm font-medium ">
                  <input type="checkbox" name="category" id={_m.type} />
                  <label htmlFor={_m.type}>{_m.type}</label>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </form>
    </aside>
  );
}
