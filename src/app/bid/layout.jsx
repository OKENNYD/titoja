"use client"
import Footer from "@/components/Footer/Footer";
import AccountHeader from "@/components/Header/AccountHeader";
export default function Layout({ children }) {
  return (
    <div className="w-full h-auto">
      <AccountHeader />
      {children}
      <Footer />
    </div>
  );
}