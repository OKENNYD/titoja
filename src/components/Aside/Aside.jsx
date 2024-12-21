import categories from "@/_util/api/category";
import { IoShuffle } from "react-icons/io5";
export default function Aside() {
  let sizes = [{"range": "0-12"},{"range": "13-24"},{"range": "25-36"},{"range": "37-48"}]
  let prices = [{"range": "0-12"},{"range": "13-24"},{"range": "25-36"},{"range": "37-48"}]
  let materials = [{"type": "silk"},{"type": "cotton"},{"type": "linen"},{"type": "leather"}]
  let plugs = [{"type": "UK"},{"type": "USA"},{"type": "INDIAN"},{"type": "Chainese"}]
  let colors = [{"range": "0-12"},{"range": "13-24"},{"range": "25-36"},{"range": "37-48"}]
  return (
    <aside className="p-4 max-md:hidden h-fit w-1/4 rounded-2xl bg-white dark:bg-dark cursor-pointer sticky ">
      <div className=" justify-between flex text-slate-600 dark:text-gray-200 items-center font-bold text-base">
        <p>Filter</p>
        <IoShuffle size={20}/>
      </div>
      <ul className=" h-auto scroll-none overflow-y-scroll" >
        <li>
          <p className="text-base font-semibold dark:text-gray-200 text-slate-600">Category</p>
          <ul className="ms-2 accent-secondary">
            {categories.map((_c,i) => (
              <li key={i} className="flex gap-1 text-base text-dim text-nowrap dark:text-gray-400 font-medium ">
              <input type="checkbox" name="category" id={_c.name} />
              <label htmlFor={_c.name}>
                {_c.name}
              </label>
            </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-base font-semibold text-dim dark:text-gray-200">Size</p>
          <ul className="ms-2 accent-secondary">
            {sizes.map((_s,i) => (
              <li key={i} className="flex gap-1 text-base dark:text-gray-400 font-medium ">
              <input type="checkbox" name="category" id={_s.range} />
              <label htmlFor={_s.range}>
                {_s.range}
              </label>
            </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-base font-semibold text-dim dark:text-gray-200">Color</p>
          <ul className="ms-2 accent-secondary">
            {sizes.map((_s,i) => (
              <li key={i} className="flex gap-1 text-sm dark:text-gray-400 font-medium ">
              <input type="checkbox" name="category" id={_s.range} />
              <label htmlFor={_s.range}>
                {_s.range}
              </label>
            </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-base font-semibold text-dim dark:text-gray-200">Price</p>
          <ul className="ms-2 accent-secondary">
            {prices.map((_p,i) => (
              <li key={i} className="flex gap-1 text-sm dark:text-gray-400 font-medium ">
              <input type="checkbox" name="category" id={_p.range} />
              <label htmlFor={_p.range}>
                {_p.range}
              </label>
            </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-base font-semibold text-dim dark:text-gray-200">Plug</p>
          <ul className="ms-2 accent-secondary">
            {plugs.map((_l,i) => (
              <li key={i} className="flex gap-1 text-sm dark:text-gray-400 font-medium ">
              <input type="checkbox" name="category" id={_l.type} />
              <label htmlFor={_l.type}>
                {_l.type}
              </label>
            </li>
            ))}
          </ul>
        </li>
        <li>
          <p className="text-base font-semibold text-slate-600 dark:text-gray-200">Materials</p>
          <ul className="ms-2 accent-secondary">
            {materials.map((_m,i) => (
              <li key={i} className="flex gap-1 text-sm dark:text-gray-400 font-medium ">
              <input type="checkbox" name="category" id={_m.type} />
              <label htmlFor={_m.type}>
                {_m.type}
              </label>
            </li>
            ))}
          </ul>
        </li>
      </ul>
    </aside>
  );
}
