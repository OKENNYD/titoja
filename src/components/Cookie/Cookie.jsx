"use client"
import { X } from 'lucide-react'
import {useState} from 'react'

export default function Cookie() {
    let [show, setShow] = useState(false)
  return (
    <div>
        {show && 
         <div className="absolute left-0 bottom-0 shadow-sm shadow-gray-400 text-dim text-base h-auto md:w-1/3 max-md:3/4 z-50 p-3 ml-14 mb-14 bg-white rounded-2xl">
        <form className='relative'>
            <X size={20} className="text-gray-600 absolute hover:bg-gray-100 rounded-full right-0" strokeWidth={2} onClick={()=>{
                setShow(false);
                setTimeout(()=>{
                    setShow(true);
                },100000)
            }}/>
        <span className="font-semibold text-lg">This site uses cookie</span>
        <p className="">
        This website uses cookies. For further information on how we use cookies you can read our Privacy Policy and Cookie notice.
        </p>
        <div className="flex">
            <button name='reject' className="rounded-full px-4 py-1 hover:bg-gray-100" type="submit">Reject</button>
            <button name='allow' className="rounded-full px-4 py-2 hover:bg-gray-100 text-secondary" type="submit">Allow</button>
        </div> 
        </form>
    </div>}
    </div>
  )
}
