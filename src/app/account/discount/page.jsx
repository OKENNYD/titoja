"use client"
import { useState } from 'react'
import { Clipboard, Search } from 'lucide-react'
export default function Discount() {
  let [allOrders, setAllOrders] = useState("");
  return (
    <section className="flex flex-col gap-4 max-md:gap-2">
      <div className="w-full bg-white rounded-2xl h-fit py-2 px-4">
        <p className="font-semibold text-xl text-dim">
          Discounts
        </p>
      </div>
      <div className=" w-full bg-white h-auto rounded-2xl px-4 py-4">
        <form className="w-2/5 max-md:w-full flex overflow-hidden rounded-full my-2">
          <input
            className="w-full h-8 px-3 caret-secondary bg-gray-100 rounded-l-full outline-secondary"
            type="text"
            name="order_tracking_id"
            placeholder="Order ID, Product or Store Name "
          />
          <button
            className="bg-primary text-white font-semibold text-base px-2"
            type="submit"
          >
            {" "}
            <Search strokeWidth={1} />{" "}
          </button>{" "}
        </form>
        <ul className="flex gap-4 font-semibold text-sm text-primary px-2">
          <li>View All</li>
          <li>To Pay</li>
          <li>To Ship</li>
          <li>Shipped</li>
          <li>Processed</li>
        </ul>
        <hr className=" my-2" />
        {allOrders ? (
          <div className="">yes</div>
        ) : (
          <div className="w-full h-64 flex flex-col justify-center items-center text-dim">
            <Clipboard className="text-4xl" />
            <p>You have not made any order</p>
          </div>
        )}
      </div>
    </section>
  );
}
