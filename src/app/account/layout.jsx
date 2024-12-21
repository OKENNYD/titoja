"use client"
import { useState } from "react"
import Link from "next/link"
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
    title: "following",
    url: "/account/following"
  },{
    title: "payment",
    url: "/account/payment"
  },{
    title: "my orders",
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
    title: "customer service",
    url: "/account/customer_service"
  },{
    title: "help center",
    url: "/account/help_center"
  },{
    title: "feedback",
    url: "/account/feedback"
  },{
    title: "settings",
    url: "/account/settings"
  }]
  return (
    <div className="w-full h-auto ">
      <AccountHeader />
      <div className=" flex px-8 max-md:px-4 py-4 gap-4">
      <div className={`w-1/4 max-md:z-20 h-fit bg-white dark:bg-dark rounded-2xl py-2 px-4 max-md:absolute max-md:w-fit max-md:shadow-dim max-md:shadow-sm ${isAcctMenu ? "max-md:block" : "max-md:hidden"}`}>
        <p className="text-dark dark:text-gray-200 text-xl font-bold">Account</p>
        <ul className="flex flex-col gap-2">
          {nav.map((_,i) => (
            <li key={i}><Link className={`text-dim dark:text-gray-400 font-semibold text-lg h-14 w-full px-4 capitalize hover:text-primary ${pathname == _.url && "border-l-2 border-secondary -px-2"}`} href={_.url} >
              {_.title}
            </Link></li>
          ))}
        </ul>
      </div>
      <div className="w-full h-fit">
        {children}
      </div>
    </div>
      <Footer/>
    </div>
    
  );
}