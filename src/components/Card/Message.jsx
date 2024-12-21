import Image from "next/image"
import Images from "@/_util/constants/images" 
export default function Message({title}) {
  return (
    <div className='w-full flex gap-2 dark:bg-dim bg-slate-200 h-16 p-2 border-b-2 border-slate-100 dark:border-dark'>
      <Image src={Images.icon} className="aspect-square h-full w-auto " alt="avatar"/>
      <div className="flex flex-col justify-between">
        <h1 className="font-bold dark:text-gray-200 text-dark text-lg">{title}</h1>
        <p className="font-medium dark:text-gray-400 text-dim text-sm">Lorem ipsum dolor sit amet,</p>
      </div>
      <span className="font-medium dark:text-gray-400 text-dim text-xs ml-1">19:78</span>
    </div>
  )
}
