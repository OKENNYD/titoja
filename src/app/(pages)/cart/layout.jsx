import Link from "next/link"
export default function Layout({ children }) {
  let nav = [{
    name: "Cart",
    url: "/cart/"
  },{
    name: "Bid",
    url: "/cart/bids"
  },{
    name: "Group",
    url: "/cart/"
  },{
    name: "My List",
    url: "/cart/my_list"
  },{
    name: "Orders",
    url: "/cart/orders"
  },]
  return (
    <div className=" px-14 pb-2 max-md:px-2">
      <ul className="w-full md:px-2 flex gap-4 max-md:gap-2 items-center scroll-none mb-0.5 overflow-x-scroll">
        {nav?.map((_,i)=>(
          <li key={i}>
            <Link href={_.url} className={`text-lg text-nowrap text-dim font-medium ${_.url }`}>
            {_.name}&nbsp;
          <span className="bg-secondary bg-opacity-50 rounded-full px-1 text-sm max-md:text-xs font-normal text-dim">
            0
          </span>
            </Link>
          
        </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
