"use client"
import { Search, Clipboard } from 'lucide-react'
import { useState } from 'react'
export default function Feedback() {
  let [isFeedback, setIsFeedback] = useState();
  return (
    <section className='flex flex-col gap-4 max-md:gap-2'>
      <div className="w-full bg-white rounded-2xl h-fit py-2 px-4">
        <p className="font-semibold text-xl text-dark">FeedBacks</p>
      </div>
      <div className=" w-full bg-white h-auto rounded-2xl px-4 py-4">
        <nav className="">
          <ul className=" flex gap-4 text-dim text-lg">
            <li className="text-secondary">Awaiting</li>
            <li>Replied</li>
            <li>By you</li>
          </ul>
        </nav>
        <form className='w-2/5 max-md:w-full flex overflow-hidden rounded-full my-2'><input className="w-full h-8 px-3 caret-secondary bg-gray-100 rounded-l-full outline-primary" type="text" name="order_tracking_id" placeholder="Order ID, Product or Store Name " /><button className='bg-primary text-white font-semibold text-base px-3' type="submit"> <Search strokeWidth={1} /> </button> </form>
        <table className="w-full">
          <thead className="w-full border-solid border-2 border-collapse">
            <tr className="w-full border-solid border-2 border-collapse bg-gray-100 text-dim rounded-full">
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
          <Clipboard strokeWidth={1} className="text-4xl"/>
          <p>You have no feedback.</p>
          </div>}  
      </div>
    </section>
  )
}
