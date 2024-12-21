"use client";
import { useState } from "react";
import CheckoutCard from "@/components/Card/Checkout";
import goods from "@/_util/api/goods";
import Link from "next/link";
export default function Checkout() {
  let filteredGoods = goods.filter((good) => good.id >= 12 && good.id <= 16);
  let sum = [
    { name: "Subtotal", price: 1000 },
    { name: "Shipping", price: 560 },
    { name: "Discount", price: -320 },
    {
      name: <b>Total</b>,
      price: totalPrice,
    },
  ];
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",
  });
  let [deliveryType, setDeliveryType] = useState(true)
  let [totalPrice, setTotalPrice] = useState(0)
  return (
    <div className="w-full px-10 max-md:px-4 py-4 h-fit flex gap-4 max-md:gap-2 max-md:flex-col">
      <div className="w-3/5 max-md:w-full rounded-lg h-fit flex flex-col gap-4 max-md:gap-2">
        <div className="w-full justify-between bg-white dark:bg-dark rounded-2xl p-2">
          <h2 className="font-bold text-lg max-md:text-base dark:text-gray-400 text-dim">
            CheckList {"(23)"}
          </h2>
          <div className="w-full h-auto min-h-48 flex flex-col gap-2 py-2">
            {filteredGoods?.map((_, i) => {
              {sum[2].price = _.price++}
              <CheckoutCard
                key={i}
                price={_.price}
                title={_.title}
                discount={_.discountPercentage}
                quantity={_.stock}
              />
            })}
          </div>
        </div>
        <div className="w-full bg-white dark:bg-dark rounded-2xl p-4">
          <h2 className="font-bold text-lg max-md:text-base dark:text-gray-400 text-dim">
            Summary
          </h2>
          <div className=" w-full flex flex-col gap-2">
            {sum?.map((_s, i) => (
              <div
                key={i}
                className=" w-full gap-2 dark:text-gray-400 text-dim font-medium text-lg flex justify-between items-center px-2"
              >
                <span className=" text-nowrap max-md:text-sm">{_s.name}</span>
                <div className="price items-baseline flex flex-col ">
                  <h3 className=" text-xl max-md:text-lg font-bold flex items-baseline dark:text-gray-400 text-dark">
                    {formatter.format(_s.price)}
                  </h3>
                </div>
              </div>
            ))}
            <button className="w-full dark:bg-secondary bg-primary text-white rounded-full py-2 font-bold">
              Order
            </button>
          </div>
        </div>
      </div>
      <div className="w-2/5 h-fit max-md:w-full">
        <div className="delivery-type flex gap-4 max-md:gap-2 pb-2">
          <div
            onClick={() => setDeliveryType(true)}
            className={`w-1/2 h-auto rounded-full ${
              deliveryType ? "dark:bg-dark bg-white" : "bg-none"
            } py-2 px-4 flex gap-2 items-center`}
          >
            <div
              className={`size-4 rounded-full ${
                deliveryType
                  ? "bg-primary dark:bg-secondary"
                  : "bg-white dark:bg-dark"
              }`}
            ></div>
            <h3>Delivery</h3>
          </div>
          <div
            onClick={() => setDeliveryType(false)}
            className={`w-1/2 h-auto rounded-full ${
              deliveryType ? "" : "dark:bg-dark bg-white"
            } py-2 px-4 flex gap-2 items-center`}
          >
            <div
              className={`size-4 rounded-full  ${
                deliveryType
                  ? "bg-white dark:bg-dark"
                  : "bg-primary dark:bg-secondary"
              }`}
            ></div>
            <h3>Pickup</h3>
          </div>
        </div>
        {deliveryType ? (
          <div className="w-full rounded-2xl h-fit bg-white dark:bg-dark py-2 px-4">
            <div className="flex justify-between">
              <p className=" text-nowrap font-bold text-lg max-md:text-base max-md:font-extrabold dark:text-primary text-dark">
                Delivery Information
              </p>
              <Link
                href="/shipping-address"
                className="text-nowrap text-sm px-2 py-1 font-medium text-secondary"
              >
                Edit information
              </Link>
            </div>
            <ul className="flex flex-col">
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-lg dark:text-gray-200">
                  Name:
                </p>{" "}
                <p className="text-dim text-lg dark:text-gray-400">
                  Oyetade Kehinde
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-lg dark:text-gray-200">
                  Mobile:
                </p>{" "}
                <p className="text-dim text-lg dark:text-gray-400">
                  +2349070387981
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-lg dark:text-gray-200">
                  Email:
                </p>{" "}
                <p className="text-dim text-lg dark:text-gray-400">
                  kehindeoyetade67@gmail.com
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-lg dark:text-gray-200">
                  Address:
                </p>{" "}
                <p className="text-dim text-lg dark:text-gray-400">
                  30, Dozie Okolo street, unity estate.
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-lg dark:text-gray-200">
                  City:
                </p>{" "}
                <p className="text-dim text-lg dark:text-gray-400">Lagos</p>
              </li>
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-lg dark:text-gray-200">
                  State/Region:
                </p>{" "}
                <p className="text-dim text-lg dark:text-gray-400">Lagos</p>
              </li>
              <li className="flex justify-between">
                <p className="font-semibold text-dim text-lg dark:text-gray-200">
                  Country:
                </p>{" "}
                <p className="text-dim text-lg dark:text-gray-400">Nigeria</p>
              </li>
            </ul>
          </div>
        ) : (
          <div className="w-full rounded-2xl h-72 bg-white dark:bg-dark p-2">
            there are no near by hb to you
          </div>
        )}
      </div>
    </div>
  );
}
