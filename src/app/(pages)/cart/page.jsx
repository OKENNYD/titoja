'use client'
import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react";
import CartCard from "@/components/Card/Cart"
import Link from 'next/link'
import goods from "@/_util/api/goods"; 
import { redirect } from "next/navigation";
export default function Cart() {
  let [cartNum, setCartNum] = useState(0);
  let filteredGoods = goods.filter(good => good.id >= 12 && good.id <= 14)
  let pata = [{ "name": "Subtotal", "price": 1000 }, { "name": "Shipping fee", "price": 1000 }, { "name": "Discounted", "price": 1000 }, { "name": "Total", "price": filteredGoods?.reduce((i,c)=>i.price*i.stock+c.price*c.stock) }]
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  return (
    <div className=" w-full flex flex-col gap-2 max-md:gap-2">
      <div className=" w-full flex max-lg:flex-col gap-2">
        <div className="w-[60%] max-md:w-full rounded-2xl h-auto flex flex-col gap-2 p-2 max-md:p-1">
            {filteredGoods?.map((_, i) => (
              <CartCard
                key={i}
                id={_.id}
                price={_.price}
                title={_.title}
                stock={_.stock}
                discount={_.discountPercentage}
              />
            ))}
            <div className="w-full bg-white rounded-full p-2 h-fit text-lg flex items-center justify-between gap-3 text-dim my-2">
        <ChevronLeft strokeWidth={2} className="text-secondary hover:bg-opacity-70 hover:bg-secondary hover:text-white rounded-full"/>
        <ul className="flex gap-2 text-base font-medium">
          <li className="hover:text-primary">1</li>
          <li className="hover:text-primary">2</li>
          <li className="hover:text-primary">3</li>
          <li className="hover:text-primary">4</li>
          <li className="hover:text-primary">5</li>
        </ul>
        <ChevronRight strokeWidth={2} className="text-secondary hover:bg-opacity-70 hover:bg-secondary hover:text-white rounded-full"/>
      </div>
        </div>
        <div className="flex w-[40%] gap-4 max-md:w-full max-md:p-2 mt-2 flex-col">
          <div className="summary w-full bg-white rounded-xl h-auto py-2 pb-5 px-5">
            <h1 className=" font-bold text-lg max-md:text-base max-md:font-extrabold text-dark">
              Summary
            </h1>
            <div className=" w-full flex flex-col gap-2">
              {pata.map((_s, i) => (
                <div
                  key={i}
                  className=" w-full gap-2 text-dim text-lg flex justify-between items-center px-2"
                >
                  <span className=" text-nowrap">{_s.name}</span>
                  <h3 className=" text-xl max-md:text-lg font-semibold flex items-baseline text-dark">
                    {formatter.format(_s.price)}
                  </h3>
                </div>
              ))}
              <button
                onClick={() => redirect("/checkout")}
                className=" w-full bg-primary text-white rounded-full py-2 font-bold"
              >
                Checkout({cartNum})
              </button>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl h-auto py-2 pb-5 px-5">
            <div className="flex justify-between">
              <p className=" text-nowrap font-bold text-lg text-dim">
                Delivery Information
              </p>
              <Link
                href="#"
                className="text-nowrap text-sm px-2 py-1 font-medium text-secondary"
              >
                Edit information
              </Link>
            </div>
            <ul className="flex flex-col">
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-base">Name:</p>{" "}
                <p className="text-dim text-sm">Oyetade Kehinde</p>
              </li>
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-base">Mobile:</p>{" "}
                <p className="text-dim text-sm">+2349070387981</p>
              </li>
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-base">Email:</p>{" "}
                <p className="text-dim text-sm">kehindeoyetade67@gmail.com</p>
              </li>
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-base">Address:</p>{" "}
                <p className="text-dim text-sm">
                  30, Dozie Okolo street, unity estate.
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-base">City:</p>{" "}
                <p className="text-dim text-sm">Lagos</p>
              </li>
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-base">
                  State/Region:
                </p>{" "}
                <p className="text-dim text-sm">Lagos</p>
              </li>
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-base">Country:</p>{" "}
                <p className="text-dim text-sm">Nigeria</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}