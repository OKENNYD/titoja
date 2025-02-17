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
  },]
  return (
    <div className=" px-14 pb-2 max-md:px-4">
      <ul className="w-full px-2 flex gap-4 items-center ">
        {nav?.map((_,i)=>(
          <li key={i}>
            <Link href={_.url} className={`text-lg text-dim font-medium ${_.url }`}>
            {_.name}&nbsp;
          <span className="bg-secondary bg-opacity-50 rounded-full px-1 text-sm font-normal text-gray-400">
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
