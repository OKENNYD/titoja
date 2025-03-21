import Auction from "@/components/Card/Auction";
import { ChevronRight, ChevronLeft } from "lucide-react";
export default function My_List() {
  return (
    <div className="w-full h-auto pt-2">
      <div className="w-full h-fit flex-wrap flex">
        <Auction status={1} />
        <Auction status={2} />
        <Auction status={3} />
        <Auction status={4} />
        <Auction status={1} />    
        <Auction status={2} />
        <Auction status={3} />
        <Auction status={4} />
        <Auction status={1} />
        <Auction status={2} />
        <Auction status={3} />
        <Auction status={4} />
      </div>
      <div className="w-full bg-white rounded-full p-2 h-fit text-lg flex items-center justify-between gap-3 text-dim my-2">
        <ChevronLeft strokeWidth={2} className="text-secondary hover:bg-opacity-70 hover:bg-secondary hover:text-white rounded-full"/>
        <ul className="flex gap-2 text-base font-medium">
          <li className="hover:text-primary">1</li>
          <li className="hover:text-primary">2</li>
          <li className="hover:text-primary">3</li>
          <li className="hover:text-primary">4</li>
          <li className="hover:text-primary">5</li>
        </ul>
        <ChevronRight strokeWidth={2} className="text-secondary hover:bg-opacity-70 hover:bg-secondary hover:text-white rounded-full"/>
      </div>
    </div>
  );
}
