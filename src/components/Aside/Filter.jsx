"use client";
import departments from "@/_util/api/department";
import { ArrowDownWideNarrow } from "lucide-react";
export default function Filter() {
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
    <aside className="md:w-1/4 max-md:h-dvh max-md:top-0 max-md:left-0 max-md:w-full max-md:bg-secondary max-md:bg-opacity-10 max-md:fixed md:relative msx-md:z-50 max-md:flex max-md:justify-center max-md:items-center max-md:p-4">
      <div className="p-4 h-fit w-full max-md:h-auto max-md:w-3/4 rounded-2xl bg-white max-md:overflow-y-scroll ">
      <div className=" justify-between flex text-dim items-center font-semibold text-lg">
        <p>Filter</p>
        <ArrowDownWideNarrow size={20} />
      </div>
      <ul className=" h-auto scroll-none overflow-y-scroll">
        <li>
          <p className="text-lg font-medium text-dim">
            Category
          </p>
          <ul className="ms-2 accent-secondary">
            {departments.map((_c, i) => (
              <li
                key={i}
                className="flex gap-1 text-base text-dim text-nowrap"
              >
                <input type="checkbox" name="category" id={_c.department} />
                <label htmlFor={_c.department}>{_c.department}</label>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-lg font-medium text-dim">
            Size
          </p>
          <ul className="ms-2 accent-secondary text-dim">
            {sizes.map((_s, i) => (
              <li
                key={i}
                className="flex gap-1 text-base"
              >
                <input type="checkbox" name="category" id={_s.range} />
                <label htmlFor={_s.range}>{_s.range}</label>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-lg font-medium text-dim">
            Color
          </p>
          <ul className="ms-2 accent-secondary text-dim">
            {sizes.map((_s, i) => (
              <li
                key={i}
                className="flex gap-1 text-sm"
              >
                <input type="checkbox" name="category" id={_s.range} />
                <label htmlFor={_s.range}>{_s.range}</label>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-lg font-medium text-dim">
            Price
          </p>
          <ul className="ms-2 accent-secondary text-dim">
            {prices.map((_p, i) => (
              <li
                key={i}
                className="flex gap-1 text-sm"
              >
                <input type="checkbox" name="category" id={_p.range} />
                <label htmlFor={_p.range}>{_p.range}</label>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-lg font-medium text-dim">
            Plug
          </p>
          <ul className="ms-2 accent-secondary text-dim">
            {plugs.map((_l, i) => (
              <li
                key={i}
                className="flex gap-1 text-sm"
              >
                <input type="checkbox" name="category" id={_l.type} />
                <label htmlFor={_l.type}>{_l.type}</label>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-lg font-medium text-dim">
            Materials
          </p>
          <ul className="ms-2 accent-secondary text-dim">
            {materials.map((_m, i) => (
              <li
                key={i}
                className="flex gap-1 text-sm"
              >
                <input type="checkbox" name="category" id={_m.type} />
                <label htmlFor={_m.type}>{_m.type}</label>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      </div>
    </aside>
  );
}
