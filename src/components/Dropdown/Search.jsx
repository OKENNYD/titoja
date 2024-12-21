import Link from "next/link";
import goods from "@/_util/api/goods"
import { IoAnalytics, IoSearch, IoTimeOutline } from "react-icons/io5";
import suggestions from "@/_util/api/suggesstion"
export default function Search({ prompt, show }) {
  let filteredGood = goods.filter(good => good.id <= 12)
  let filteredSuggestions = suggestions.filter(sug => sug.search());
  return (<>
    {show && <div className="w-full max-md:flex-col max-md:gap-2 max-md:p-2 shadow-sm mx-auto flex gap-4 shadow-slate-400 dark:shadow-dim box-border md:justify-between p-4 rounded-3xl absolute h-auto bg-white dark:bg-dark">
      <div className="px-2">
        <p className="text-dark text-lg dark:text-gray-200"><IoSearch className=" self-center" size={18} /><span>Search for &rdquo;<i className=" break-words ">{prompt}</i>&rdquo;</span></p>
        <ul className="text-sm text-dim dark:text-gray-400 ps-5 font-normal">
          {filteredSuggestions.map((sug, index) => (
            <Link key={index} className=" cursor-pointer" href="hello">
              <li>{sug.search(prompt)}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="">
        <p className="text-dark dark:text-gray-200 text-lg font-semibold flex gap-1 items-center"><IoTimeOutline />Recent</p>
        <ul className="text-sm text-dim dark:text-gray-400 font-normal">
          {filteredGood.map((good, index) => (
            <li className="text-nowrap" key={index}>{good.title}</li>
          ))}
        </ul>
      </div>
    </div>}
  </>
  );
}
