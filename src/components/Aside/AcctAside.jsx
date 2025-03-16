import Link from "next/link"
import { useGlobalContext } from "@/_util/constants/context";
import { usePathname } from "next/navigation";
export default function AcctAside() {
    const { isAcctMenu } =
    useGlobalContext();
  const pathname = usePathname();
  let nav = [
    {
      title: "User", 
      url: "/account/user_account",
    },
    {
      title: "Following",
      url: "/account/following",
    },  
    {
      title: "Payment",
      url: "/account/payment",
    },   
    {
      title: "Orders",
      url: "/account/orders",
    },
    {
      title: "Returns & Refunds",
      url: "/account/returns&refund",
    },
    {
      title: "Customer Service",
      url: "/account/customer_service",
    },
    {
      title: "Help Center",
      url: "/account/help_center",
    },
    {
      title: "Review",
      url: "/account/review",
    },
    {
      title: "Coupon",
      url: "/account/feedback",
    },
    {
      title: "Settings",
      url: "/account/settings",
    },
  ];
  return (
    <aside
          className={`w-1/4 h-fit p-2 bg-white duration-1000 ${
            isAcctMenu
              ? "max-md:w-3/4 max-md:fixed max-md:shadow max-md:z-auto max-md:h-full max-md:shadow-gray-200"
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
  )
}
