import Promo from '../Card/Promo'
import { ChevronRight } from "lucide-react"
export default function Deal({title}) {
  return (
    <div className="max-md:bg-transparent w-auto h-auto rounded-2xl">
      <p className="pt-1 max-md:text-base flex justify-between items-center pe-2 -my-1 ps-4 max-md:ps-2 font-bold text-lg text-slate-400">{title}
        <ChevronRight />
      </p>
      <div className="flex gap-2 max-md:p-0 max-md:pt-2 overflow-x-scroll scroll-none snap-x snap-mandatory snap-normal snap-start">
        <Promo />
        <Promo />
      </div>
    </div>
  )
}
