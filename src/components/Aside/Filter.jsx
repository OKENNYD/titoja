"use client";
import departments from "@/_util/api/departments";
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
    <aside className="p-4 h-fit w-1/4 rounded-2xl bg-white cursor-pointer max-md:hidden">
      <div className=" justify-between flex text-dim items-center font-bold text-lg">
        <p>Filter</p>
        <ArrowDownWideNarrow size={20} />
      </div>
      <ul className=" h-auto scroll-none overflow-y-scroll">
        <li>
          <p className="text-lg font-semibold text-dim">
            Category
          </p>
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
          <p className="text-lg font-semibold text-dim">
            Size
          </p>
          <ul className="ms-2 accent-secondary">
            {sizes.map((_s, i) => (
              <li
                key={i}
                className="flex gap-1 text-base font-medium "
              >
                <input type="checkbox" name="category" id={_s.range} />
                <label htmlFor={_s.range}>{_s.range}</label>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-lg font-semibold text-dim">
            Color
          </p>
          <ul className="ms-2 accent-secondary">
            {sizes.map((_s, i) => (
              <li
                key={i}
                className="flex gap-1 text-sm font-medium "
              >
                <input type="checkbox" name="category" id={_s.range} />
                <label htmlFor={_s.range}>{_s.range}</label>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-lg font-semibold text-dim">
            Price
          </p>
          <ul className="ms-2 accent-secondary">
            {prices.map((_p, i) => (
              <li
                key={i}
                className="flex gap-1 text-sm font-medium "
              >
                <input type="checkbox" name="category" id={_p.range} />
                <label htmlFor={_p.range}>{_p.range}</label>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-lg font-semibold text-dim">
            Plug
          </p>
          <ul className="ms-2 accent-secondary">
            {plugs.map((_l, i) => (
              <li
                key={i}
                className="flex gap-1 text-sm font-medium "
              >
                <input type="checkbox" name="category" id={_l.type} />
                <label htmlFor={_l.type}>{_l.type}</label>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-lg font-semibold text-dim">
            Materials
          </p>
          <ul className="ms-2 accent-secondary">
            {materials.map((_m, i) => (
              <li
                key={i}
                className="flex gap-1 text-sm font-medium "
              >
                <input type="checkbox" name="category" id={_m.type} />
                <label htmlFor={_m.type}>{_m.type}</label>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </aside>
  );
}
