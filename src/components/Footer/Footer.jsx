import Link from "next/link";
import { foot, card, socialHandle, service } from "@/_util/api/foot"
import {IoArrowForward} from "react-icons/io5";
import Download from "../Nav/Download";
export default function Footer() {
  return (
    <footer className="dark:bg-dark bg-white">
        <ul className=" w-full h-auto bg-white py-4 px-4 dark:bg-dark bg-opacity flex justify-center items-center gap-6 max-md:gap-2">
          {service.map((_s, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-primary text-opacity-80 dark:text-secondary"
            >
              {_s.icon}
              <span className="font-normal text-gray-400">
                <h3 className="text-dark max-md:text-sm dark:text-gray-200 font-semibold">
                  {_s.title}
                </h3>
                <p className="text-xs ">
                  {_s.text}
                </p>
              </span>
            </li>
          ))}
        </ul>
      <hr />
      <div className="w-auto h-auto py-6 px-16 max-md:px-4 flex max-md:flex-col gap-2">
        <div className=" w-7/12 max-md:w-full max-md:grid max-md:grid-cols-2 flex justify-evenly">
          {foot.map((_n, i) => (
            <div
              key={i}
              className="customer_service w-auto max-md:text-lg text-sm"
            >
              <h4 className="font-bold text-dark dark:text-gray-200 sm:pb-1">
                {_n.title}
              </h4>
              <ul className="text-base text-dim dark:text-gray-400 font-normal">
                {_n.navs.map((_n, index) => (
                  <li
                    key={index}
                    className="hover:text-secondary dark:hover:text-primary"
                  >
                    <Link href={_n.href}>{_n.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className=" w-5/12 max-md:w-full max-md:flex-col gap-4 flex justify-evenly">
          <div className="payment w-auto">
            <h4 className=" font-bold max-md:text-base text-sm dark:text-gray-200 text-slate-800 pb-1">
              {card.title}
            </h4>
            <ul className=" max-md:w-full w-36 flex gap-1 max-md:gap-1 flex-wrap text-dim dark:text-gray-400">
              {card.cards.map((_p, j) => (
                <li
                  key={j}
                  className="hover:opacity-80 hover:dark:text-gray-200"
                >
                  {_p.icon}
                </li>
              ))}
            </ul>
          </div>
          <div className="newsletter w-full">
            <h4 className=" font-bold text-sm text-slate-800 dark:text-gray-200 max-md:text-lg pb-1">
              {socialHandle.title}
            </h4>
            <div className="">
              <form className=" w-full p-1 flex h-10 dark:bg-dim bg-gray-100 max-md:h-10 overflow-hidden rounded-full">
                <input
                  type="email"
                  name="subscription"
                  id="subscription"
                  className=" outline-none text-base w-full max-md:text-lg caret-primary dark:caret-secondary px-2 bg-inherit placeholder:text-slate-400"
                  placeholder="email"
                />
                <button
                  type="submit"
                  className=" rounded-3xl text-xs px-2 h-full text-white max-md:text-base bg-primary font-bold "
                >
                  <IoArrowForward size={20} />
                </button>
              </form>
              <ul className="social flex max-md:gap-3 gap-2 pt-2">
                {socialHandle.icons.map((_s, k) => (
                  <li key={k}>
                    <a
                      className=" text-dim dark:text-gray-400 hover:text-slate-400 hover:dark:text-gray-200"
                      href={_s.href}
                    >
                      {_s.Icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-md:flex-col-reverse gap-4 max-md:gap-2 max-md:justify-start h-auto text-white font-normal text-lg flex justify-center items-center py-2 px-16 max-md:px-4 bg-gray-200 dark:bg-dim">
        <ul className=" inline-flex text-sm gap-2 flex-wrap text-dim dark:text-gray-400 ">
          <li className="hover:text-primary dark:hover:text-secondary text-nowrap">Terms and Conditions</li>
          <li className="hover:text-primary dark:hover:text-secondary text-nowrap">Transaction Service Agreement</li>
          <li className="hover:text-primary dark:hover:text-secondary text-nowrap">Privacy Policy</li>
          <li className="hover:text-primary dark:hover:text-secondary text-nowrap">Sitemap</li>
          <li className="hover:text-primary dark:hover:text-secondary text-nowrap">Terms of Us</li>
          <li className="hover:text-primary dark:hover:text-secondary text-nowrap">
            &copy;2024 Splash. All rights reserved
          </li>
        </ul>
        <Download />
      </div>
    </footer>
  );
}
