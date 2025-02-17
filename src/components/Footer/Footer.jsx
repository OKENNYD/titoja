import Link from "next/link";
import { foot, card, socialHandle, service } from "@/_util/api/foot"
import Applestore from "../Icon/Appstore";
import Playstore from "../Icon/Playstore";
export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-100">
      <ul className=" w-full h-auto bg-white py-4 px-4 bg-opacity flex justify-center items-center gap-6 max-md:gap-2">
        {service.map((_s, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-primary text-opacity-80 dark:text-secondary"
          >
            {_s.icon}
            <div className="font-normal text-dim">
              <h3 className="font-semibold">{_s.title}</h3>
              <p className="text-xs">{_s.text}</p>
            </div>
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
              <h4 className="font-bold text-dark">{_n.title}</h4>
              <ul className="text-base text-dim">
                {_n.navs.map((_n, index) => (
                  <li key={index} className="hover:text-secondary">
                    <Link href={_n.href}>{_n.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className=" w-5/12 max-md:w-full max-md:flex-col gap-4 flex justify-evenly">
          <div className="payment w-auto">
            <h4 className=" font-bold max-md:text-base text-sm text-slate-800 pb-1">
              {card.title}
            </h4>
            <ul className=" max-md:w-full w-36 flex gap-1 max-md:gap-1 flex-wrap text-dim">
              {card.cards.map((_p, j) => (
                <li key={j} className="hover:opacity-80">
                  {_p.icon}
                </li>
              ))}
            </ul>
          </div>
          <div className="newsletter w-full">
            <h4 className=" font-bold text-sm text-dim max-md:text-lg pb-1">
              {socialHandle.title}
            </h4>
            <div className="">
              <ul className="social flex max-md:gap-3 gap-2 pt-2">
                {socialHandle.icons.map((_s, k) => (
                  <li key={k}>
                    <a className=" text-dim hover:text-gray-400" href={_s.href}>
                      {_s.Icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="customer_service w-full gap-2 justify-start flex text-sm">
          <ul className="flex gap-2 font-semibold pt-6">
            <li className="w-auto h-auto flex items-center gap-2 p-1">
              <Playstore/>
              <div className="">
                <p className="inline-grid">
                  <span className="text-xs text-dark">
                    GET IT ON
                  </span>
                  <span className="text-lg text-dim font-bold relative -top-2">
                    Play Store
                  </span>
                </p>
              </div>
            </li>
            <li className="w-auto h-auto flex items-center gap-2 p-1">
             <Applestore/>
              <div className="">
                <p className="inline-grid">
                  <span className="text-xs text-dark">
                    DOWNLOAD ON
                  </span>
                  <span className="text-lg text-dim font-bold relative -top-2">
                    App Store
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
          </div>
        </div>
      </div>
      <div className="w-full max-md:flex-col-reverse gap-4 max-md:gap-2 max-md:justify-start h-auto text-white font-normal text-lg flex justify-center items-center py-2 px-16 max-md:px-4 bg-gray-200">
        <ul className=" inline-flex text-sm gap-2 flex-wrap text-dim">
          <li className="hover:text-primary text-nowrap">
            <a href="../legal/terms%20&%20conditions.md">
              Terms and Conditions
            </a>
          </li>
          <li className="hover:text-primary text-nowrap">Payment Policy</li>
          <li className="hover:text-primary text-nowrap">Privacy Policy</li>
          <li className="hover:text-primary text-nowrap">Sitemap</li>
          <li className="text-nowrap">
            &copy;2024 Titoja. All rights reserved.
          </li>
          <li className="text-nowrap">
            <b>
              Powered by Fixxage.
            </b>
          </li>
        </ul>
      </div>
    </footer>
  );
}
