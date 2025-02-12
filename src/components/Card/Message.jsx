import Image from "next/image"
import Images from "@/_util/constants/images" 
export default function Message({title}) {
  return (
    <div className='w-full flex gap-2 bg-gray-200 h-16 p-2 border-b-2 border-gray-100'>
      <Image src={Images.icon} className="aspect-square h-full w-auto " alt="avatar"/>
      <div className="flex flex-col justify-between">
        <h1 className="font-bold text-dark text-lg">{title}</h1>
        <p className="text-dim text-sm">Lorem ipsum dolor sit amet,</p>
      </div>
      <span className="text-dim text-xs ml-1">19:78</span>
    </div>
  )
}
