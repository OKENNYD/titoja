'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
export default function AuthHeader() {
  let pathname = usePathname()
  let logs = [
    { name: "Login", href: "/signin" },
    { name: "Register", href: "/signup" }
  ];
  return (
    <header className=" sticky top-0 left-0 w-full border-b-2 border-gray-100 h-14 flex justify-between items-center bg-white px-14 py-2 max-md:px-2">
      <Link href="/"><Image src="/assets/img/logo.png" alt="@Titoja" priority width={100} height={70}/></Link>
        <nav className={pathname === "/address" ? "hidden" : "flex items-center gap-2"}>
          {logs.map((log,index) => (
            <Link key={index} className={pathname === log.href ? "hidden" : " text-secondary font-medium text-lg"} href={log.href}>{log.name}</Link>
          ))}
        </nav>
    </header>
  )
}
