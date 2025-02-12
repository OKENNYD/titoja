"use client"
import { useState } from 'react'
import { IoSearch, IoClipboardOutline } from 'react-icons/io5'
export default function Coupon() {
  let [allCoupon, setAllCoupon] = useState("");
  return (
    <section className='flex flex-col gap-4 max-md:gap-2'>
      <div className="w-full bg-white rounded-xl h-fit py-2 px-4">
        <p className="font-bold text-xl text-dark">My Coupon</p>
      </div>
      <div className=" w-full bg-white h-auto rounded-lg px-4 py-4">
        <form className='w-2/5 max-md:w-full flex overflow-hidden rounded-full my-2'><input className="w-full h-8 px-3 caret-secondary bg-slate-100 rounded-l-full outline-secondary" type="text" name="order_tracking_id" placeholder="coupon ID" /><button className='bg-primary text-white font-semibold text-base px-2' type="submit">Search</button> </form>
        <ul className='flex gap-4 font-semibold text-sm text-primary px-2'>
          <li>View All</li>
          <li>Used</li>
          <li>Unused</li>
          <li>Expired</li>
        </ul>
        <hr className=' my-2' />
        {allCoupon ? <div className="">
            yes
        </div> : <div className="w-full h-64 flex flex-col justify-center items-center text-dim">
          <IoClipboardOutline className="text-4xl"/>
          <p>You have not made any order</p>
          </div>}
      </div>
    </section>
  )
}
