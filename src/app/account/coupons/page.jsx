"use client"
import { useState } from 'react'
import { Clipboard } from 'lucide-react'
export default function Coupons() {
  let [isCoupons, setIsCoupons] = useState(true);
  return (
    <section className='flex flex-col gap-2'>
      <div className="w-full bg-white rounded-2xl h-fit py-2 px-4">
        <p className="font-semibold text-xl text-dark">Coupons</p>
      </div>
      <div className=" w-full h-auto">
        {isCoupons ? <div className="flex flex-wrap justify-center">
        coupon shows here
        </div> : <div className="w-full h-64 flex flex-col justify-center rounded-lg bg-white items-center text-dim">
          <Clipboard strokeWidth={1} className="text-4xl"/>
          <p>You are coupons no shop.</p>
          </div>}
      </div>
    </section>
  )
}
