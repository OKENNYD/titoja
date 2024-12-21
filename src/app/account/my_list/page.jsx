"use client"
import { useState } from 'react'
import { IoSearch, IoClipboardOutline } from 'react-icons/io5';
import List from '@/components/Card/List';
import likes from "@/_util/api/liked"
export default function Myorders() {
  let [isList, setIsList] = useState(true);
  return (
    <section className='flex flex-col gap-4 max-md:gap-2'>
      <div className="w-full dark:bg-dark bg-white rounded-xl h-fit py-2 px-4">
        <p className="font-bold text-xl text-dark dark:text-gray-200">My List</p>
      </div>
      <div className=" w-full h-auto px-2 py-2 ">
       {isList ? <div className=" grid grid-cols-2 gap-4">
            <List/>
            {likes.map(_=> {_})}
        </div> : <div className="w-full h-64 flex flex-col justify-center rounded-lg dark:bg-dark bg-white items-center text-dim">
          <IoClipboardOutline className="text-4xl"/>
          <p>Product you liked would be displayed here. {likes.map(_=> {_})}</p>
          </div>}
      </div>
    </section>
  )
}
