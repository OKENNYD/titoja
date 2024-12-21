'use client'
import Image from "next/image"
import Images from "@/_util/constants/images"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useTheme } from 'next-themes'
export default function AuthHeader() {
  let pathname = usePathname()
  let { theme } = useTheme();
  let logs = [
    { name: "Login", href: "/signin" },
    { name: "Register", href: "/signup" }
  ];
  return (
    <header className=" sticky top-0 left-0 w-full border-b-2 border-gray-100 dark:border-dim h-14 flex justify-between items-center bg-white dark:bg-dark px-14 py-2 ">
        <Image src={Images.dark} alt="@Titoja" priority className="w-36 max-md:w-32 h-auto"/>
        <nav className={pathname === "/address" ? "hidden" : "flex items-center gap-2"}>
          {logs.map((log,index) => (
            <Link key={index} className={pathname === log.href ? "hidden" : " text-dim bg-white rounded-2xl px-4 py-1 font-semibold text-base"} href={log.href}>{log.name}</Link>
          ))}
        </nav>
    </header>
  )
}
