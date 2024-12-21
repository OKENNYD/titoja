"use client"
import { IoSearch, IoClipboardOutline } from 'react-icons/io5'
import { useState } from 'react'
export default function Feedback() {
  let [isFeedback, setIsFeedback] = useState();
  return (
    <section className='flex flex-col gap-4 max-md:gap-2'>
      <div className="w-full bg-white dark:bg-dark rounded-xl h-fit py-2 px-4">
        <p className="font-bold text-xl dark:text-gray-200 text-dark">FeedBacks</p>
      </div>
      <div className=" w-full bg-white dark:bg-dark h-auto rounded-lg px-4 py-4">
        <nav className="">
          <ul className=" flex gap-4 text-slate-600 dark:text-gray-200 font-bold text-base">
            <li className="text-secondary">Awaiting</li>
            <li>Replied</li>
            <li>By you</li>
          </ul>
        </nav>
        <form className='w-2/5 max-md:w-full flex overflow-hidden rounded-full my-2'><input className="w-full h-8 px-3 caret-secondary bg-slate-100 dark:bg-dim rounded-l-full outline-primary" type="text" name="order_tracking_id" placeholder="Order ID, Product or Store Name " /><button className='bg-primary text-white font-semibold text-base px-3' type="submit"> <IoSearch /> </button> </form>
        <table className="w-full">
          <thead className="w-full border-solid border-2 border-collapse">
            <tr className="w-full border-solid border-2 border-collapse bg-slate-400 dark:bg-dim text-slate-600 dark:text-gray-200 rounded-full">
              <th className=" w-2/6 border-solid border-2 border-collapse">Order details</th>
              <th className="w-3/6 border-solid border-2 border-collapse">Review</th>
              <th className="w-1/6 border-solid border-2 border-collapse">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">

          </tbody>
        </table>
        {isFeedback ? <div className="">
            yes
        </div> : <div className="w-full h-64 flex flex-col justify-center items-center text-slate-300">
          <IoClipboardOutline className="text-4xl"/>
          <p>You have no feedback.</p>
          </div>}  
      </div>
    </section>
  )
}
