"use client"
import Follow from '@/components/Card/Follow';
import { useState } from 'react'
import { Clipboard } from 'lucide-react'
export default function Following() {
  let [isFollowing, setIsFollowing] = useState(true);
  return (
    <section className='flex flex-col gap-4 max-md:gap-2'>
      <div className="w-full bg-white rounded-2xl h-fit py-2 px-4">
        <p className="font-semibold text-xl text-dark">Following</p>
      </div>
      <div className=" w-full h-auto">
        {isFollowing ? <div className=" grid grid-cols-5 max-md:grid-cols-3 justify-center gap-4">
        <Follow/>
        <Follow/>
        <Follow/>
        <Follow/>
        <Follow/>
        </div> : <div className="w-full h-64 flex flex-col justify-center rounded-lg bg-white items-center text-dim">
          <Clipboard strokeWidth={1} className="text-4xl"/>
          <p>You are following no shop.</p>
          </div>}
      </div>
    </section>
  )
}
