"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import AccountHeader from "@/components/Header/AccountHeader";
import { useGlobalContext } from "@/_util/constants/context";
export default function Layout({ children }) {
  const { isAcctMenu } =
    useGlobalContext();
  let isMenu = true;
  const pathname = usePathname();
  let nav = [{
    title: "User",
    url: "/account/user"
  },{
    title: "Following",
    url: "/account/following"
  },{
    title: "Payment",
    url: "/account/payment"
  },{
    title: "My orders",
    url: "/account/my_orders"
  },{
    title: "My List",
    url: "/account/my_list"
  },{
    title: "Returns & Refunds",
    url: "/account/returns&refund"
  },{
    title: "Coupons",
    url: "/account/coupons"
  },{
    title: "Customer Service",
    url: "/account/customer_service"
  },{
    title: "Help Center",
    url: "/account/help_center"
  },{
    title: "Feedback",
    url: "/account/feedback"
  },{
    title: "Settings",
    url: "/account/settings"
  }]
  return (
    <div className="w-full h-auto ">
      <AccountHeader />
      <div className=" flex max-md:px-4 gap-4">
        <aside
          className={`w-1/4 h-fit p-2 bg-white duration-1000 ${
            isMenu
              ? "max-md:w-3/4 max-md:absolute "
              : "max-md:w-0 max-md:hidden"
          }`}
        >
          <ul className="p-2 flex flex-col gap-1">
            {nav.map((_, i) => (
              <Link key={i} href={_.url}>
                <li
                  className={`w-full p-2 px-3 flex ${
                    pathname === _.url
                      ? "bg-primary text-white hover:bg-primary"
                      : "hover:bg-gray-200"
                  } items-center cursor-pointer gap-1 font-normal hover:px-2 text-base max-sm:text-xl text-gray-600 rounded-lg`}
                >
                  {_.title}
                </li>
              </Link>
            ))}
          </ul>
        </aside>
        <div className="w-full h-fit">{children}</div>
      </div>
      <Footer />
    </div>
  );
}