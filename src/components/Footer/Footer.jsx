import Link from "next/link";
import Applestore from "../Icon/Appstore";
import Playstore from "../Icon/Playstore";
import {footer} from "@/app/_utils/api/footer" ;
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-dim px-14 max-md:p-2 py-4 ">
        <div className="py-4 max-md:py-0 max-md:px-2 w-full max-md:flex-wrap justify-around flex">
          {footer?.map((_,i)=>(
            <div key={i} className="payment w-auto">
            <h4 className=" font-bold text-base text-nowrap text-white">
              {_.title}
            </h4>
            <ul className=" text-gray-400">
              {_.list?.map((_l,i)=>( 
                    <li key={i}>
                  <Link className="hover:text-white text-nowrap" href={_l.url}>
                    {_l.name}
                  </Link>
                </li>
            ))}
            </ul>
          </div>
          ))}
        </div>
        <div className="flex max-md:flex-col md:justify-around md:items-center ">
          <div className="payment w-auto">
            <h4 className=" font-bold text-base text-white">
              Pay with
            </h4>
            <ul className="max-md:w-full w-auto flex gap-1 max-md:gap-1 flex-wrap text-dim">
                <li className="hover:opacity-80">
                  <Image src="/assets/img/card1.webp" width={50} height={30}  alt=""/>
                </li>
                <li className="hover:opacity-80">
                  <Image src="/assets/img/card2.webp" width={50} height={30}  alt=""/>
                </li>
                <li className="hover:opacity-80">
                  <Image src="/assets/img/card3.webp" width={50} height={30}  alt=""/>
                </li>
                <li className="hover:opacity-80">
                  <Image src="/assets/img/card4.webp" width={50} height={30}  alt=""/>
                </li>
                <li className="hover:opacity-80">
                  <Image src="/assets/img/card5.webp" width={50} height={30}  alt=""/>
                </li>
                <li className="hover:opacity-80">
                  <Image src="/assets/img/card6.webp" width={50} height={30}  alt=""/>
                </li>
                <li className="hover:opacity-80">
                  <Image src="/assets/img/card7.webp" width={50} height={30}  alt=""/>
                </li>
                <li className="hover:opacity-80">
                  <Image src="/assets/img/card8.webp" width={50} height={30}  alt=""/>
                </li>
                <li className="hover:opacity-80">
                  <Image src="/assets/img/card9.webp" width={50} height={30}  alt=""/>
                </li>
            </ul>
          </div>
           <div className="max-md:mt-2">
            <h4 className=" font-bold text-base text-white">
              Connect with us on
            </h4>
            <div className="">
              <ul className="max-md:w-full w-auto flex gap-3 max-md:gap-2 flex-wrap text-dim">
                  <li>
                    <a href="https://whatsapp.com/titoja">
                    <Image src="/assets/img/whatsapp.svg" alt="" width={30} height={30}/>
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com/titoja">
                    <Image src="/assets/img/facebook.svg" alt="" width={30} height={30}/>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/titoja">
                    <Image src="/assets/img/instagram.svg" alt="" width={30} height={30}/>
                    </a>
                  </li>
                  <li>
                    <a href="https://wechat.com/titoja">
                    <Image src="/assets/img/wechat.svg" alt="" width={30} height={30}/>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/titoja">
                    <Image src="/assets/img/x.svg" alt="" width={30} height={30}/>
                    </a>
                  </li>
              </ul>
            </div>
          </div>
          <ul className="flex gap-2 font-semibold pt-6">
            <li className="w-auto h-auto flex items-center gap-2">
              <Playstore/>
              <div className="">
                <p className="inline-grid">
                  <span className="text-xs text-white">
                    Get it on
                  </span>
                  <span className="text-lg text-gray-200 font-semibold -mt-1.5">
                    Play Store
                  </span>
                </p>
              </div>
            </li>
            <li className="w-auto h-auto flex items-center gap-2">
             <Applestore/>
              <div className="">
                <p className="inline-grid">
                  <span className="text-xs text-white">
                    Download on the
                  </span>
                  <span className="text-lg text-gray-200 font-semibold -mt-1.5">
                    App Store
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <ul className="w-full flex text-base gap-2 text-gray-400 py-4 max-md:flex-wrap">
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
          <li className="text-nowrap text-white">
            <b>
              Powered by Fixxage.
            </b>
          </li>
        </ul>
    </footer>
  );
}
