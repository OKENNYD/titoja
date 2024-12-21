import React from "react";
import Image from "next/image";
import Images from "@/_util/constants/images";
export default function Download() {
  return (
    <div className="customer_service w-full gap-2 justify-start flex text-sm">
      <p className="max-md:text-sm text-nowrap max-md:text-wrap text-dim dark:text-gray-400 pb-1 font-normal">
        Titaoja App is available on Apple Store & Google Play. Get it now.
      </p>
      <ul className=" max-md:text-base flex gap-4 text-slate-400 font-semibold">
        <li>
          <Image src={Images.appstore} alt="appstore" className=" w-16 max-md:w-32" />
        </li>
        <li>
          <Image src={Images.playstore} alt="playstore" className=" w-16 max-md:w-32" />
        </li>
      </ul>
    </div>
  );
}
