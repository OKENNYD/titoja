"use client"
import Follow from '@/components/Card/Follow';
import { useState } from 'react'
import { IoSearch, IoClipboardOutline } from 'react-icons/io5'

export default function Myorders() {
  let [isFollowing, setIsFollowing] = useState(true);
  return (
    <section className='flex flex-col gap-4 max-md:gap-2'>
      <div className="w-full bg-white dark:bg-dark rounded-xl h-fit py-2 px-4">
        <p className="font-bold text-xl dark:text-gray-200 text-dark">Following</p>
      </div>
      <div className=" w-full h-auto">
        {isFollowing ? <div className=" grid grid-cols-5 max-md:grid-cols-3 justify-center gap-4">
          <Follow/>
        <Follow/>
        <Follow/>
        <Follow/>
        <Follow/>
        <Follow/>
        <Follow/>
        <Follow/>
        <Follow/>
        <Follow/>
        </div> : <div className="w-full h-64 flex flex-col justify-center dark:bg-dark rounded-lg bg-white items-center text-dim">
          <IoClipboardOutline className="text-4xl"/>
          <p>You are following no shop.</p>
          </div>}
      </div>
    </section>
  )
}
