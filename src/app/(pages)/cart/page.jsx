'use client'
import { useState } from "react"
import CartCard from "@/components/Card/Cart"
import Link from 'next/link'
import goods from "@/_util/api/goods"; 

import { useGlobalContext } from "@/_util/constants/context";
import { redirect } from "next/navigation";
export default function Cart() {
  const { currencyCode } = useGlobalContext();
  let [cartNum, setCartNum] = useState(2);
  let filteredGoods = goods.filter(good => good.id >= 12 && good.id <= 16)
  let pata = [{ "name": "Subtotal", "price": 1000 }, { "name": "Shipping fee", "price": 1000 }, { "name": "Discounted", "price": 1000 }, { "name": "Total", "price": 1000 }]
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  return (
      <div className=" w-full flex flex-col gap-4 max-md:gap-2 px-6 pb-2 max-md:px-2">
        <div className=" w-full flex max-lg:flex-col gap-2">
          <div className="carted w-[70%] max-lg:w-full rounded-2xl py-2 max-md:py-0 px-4 max-md:px-1 h-auto">
            <div className="w-full  flex justify-between items-center ">
              <h1 className=" font-bold text-xl max-md:text-base text-dark">Shopping Cart({cartNum})</h1>
            </div>
            <div className="w-full flex flex-col gap-2 py-2 max-md:p-1">
              {filteredGoods?.map((_, i) => (
                <CartCard key={i} id={_.id} price={_.price} title={_.title} stock={_.stock} discount={_.discountPercentage} />
              ))}
            </div>
          </div>
          <div className="flex w-[30%] gap-4 max-lg:gap-2 max-lg:w-full flex-col lg:py-2">
            <div className="summary w-full bg-white rounded-xl h-auto py-2 pb-5 px-5">
              <h1 className=" font-bold text-lg max-md:text-base max-md:font-extrabold text-dark">Summary</h1>
              <div className=" w-full flex flex-col gap-2">
                {pata.map((_s, i) => (
                  <div key={i} className=" w-full gap-2 text-dim font-medium text-lg flex justify-between items-center px-2">
                    <span className=" text-nowrap max-md:text-sm">{_s.name}</span>
                    <div className="price items-baseline flex flex-col ">
                      <h3 className=" text-xl max-md:text-lg font-bold flex items-baseline text-dark">
                        {formatter.format(_s.price)}
                      </h3>
                    </div>
                  </div>
                ))}
                <button onClick={()=>redirect("/checkout")} className=" w-full bg-primary text-white rounded-full py-2 font-bold">Checkout({cartNum})</button>
              </div>
            </div>
            <div className="w-full bg-white rounded-xl h-auto py-2 pb-5 px-5">
              <div className="flex justify-between">
                <p className=" text-nowrap font-bold text-lg max-md:text-base max-md:font-extrabold text-dark">
                    Delivery Information
                  </p>
                  <Link href="#" className="text-nowrap text-sm px-2 py-1 font-medium text-secondary">
                    Edit information
                  </Link>
              </div>
              <ul className="flex flex-col">
                  <li className="flex justify-between"><p className="font-semibold text-dim text-base">Name:</p> <p className="font-medium text-dim text-sm">Oyetade Kehinde</p></li>
                  <li className="flex justify-between"><p className="font-semibold text-dim text-base">Mobile:</p> <p className="font-medium text-dim text-sm">+2349070387981</p></li>
                  <li className="flex justify-between"><p className="font-semibold text-dim text-base">Email:</p> <p className="font-medium text-dim text-sm">kehindeoyetade67@gmail.com</p></li>
                  <li className="flex justify-between"><p className="font-semibold text-dim text-base">Address:</p> <p className="font-medium text-dim text-sm">30, Dozie Okolo street, unity estate.</p></li>
                  <li className="flex justify-between"><p className="font-semibold text-dim text-base">City:</p> <p className="font-medium text-dim text-sm">Lagos</p></li>
                  <li className="flex justify-between"><p className="font-semibold text-dim text-base">State/Region:</p> <p className="font-medium text-dim text-sm">Lagos</p></li>
                  <li className="flex justify-between"><p className="font-semibold text-dim text-base">Country:</p> <p className="font-medium text-dim text-sm">Nigeria</p></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
  );
}