import Link from "next/link";
import goods from "@/_util/api/goods"
import { IoAnalytics, IoSearch, IoTimeOutline } from "react-icons/io5";
import suggestions from "@/_util/api/suggesstion"
export default function Search({ prompt, show }) {
  let filteredGood = goods.filter(good => good.id <= 12)
  let filteredSuggestions = suggestions.filter(sug => sug.search());
  return (<>
    {show && <div className="w-full max-md:flex-col max-md:gap-2 max-md:p-2 shadow-sm mx-auto flex gap-4 shadow-slate-400 box-border md:justify-between p-4 rounded-3xl absolute h-auto bg-white">
      <div className="px-2">
        <p className="text-dark text-lg max-md:text-xl"><span>Search for &rdquo;<i className=" break-words ">{prompt}</i>&rdquo;</span></p>
        <ul className="text-lg max-md:text-xl text-dim ps-5">
          {filteredSuggestions.map((sug, index) => (
            <Link key={index} className=" cursor-pointer" href="hello">
              <li>{sug.search(prompt)}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="">
        <p className="text-dark text-lg max-md:text-xl font-semibold flex gap-1 items-center"><IoTimeOutline />Recent</p>
        <ul className="text-lg max-md:text-xl text-dim">
          {filteredGood.map((good, index) => (
            <li className="text-nowrap" key={index}>{good.title}</li>
          ))}
        </ul>
      </div>
    </div>}
  </>
  );
}
