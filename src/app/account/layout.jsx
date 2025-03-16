"use client"
import AcctAside from "@/components/Aside/AcctAside";
import Footer from "@/components/Footer/Footer";
import AccountHeader from "@/components/Header/AccountHeader";
export default function Layout({ children }) {
  return (
    <div className="w-full h-auto ">
      <AccountHeader />
      <div className="flex">
        <AcctAside/>
        <div className="w-full h-fit p-2">{children}</div>
      </div>
      <Footer />
    </div>
  );
}