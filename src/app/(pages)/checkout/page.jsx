"use client";
import { useState } from "react";
import CheckoutCard from "@/components/Card/Checkout";
import goods from "@/_util/api/goods";
import Link from "next/link";
export default function Checkout() {
  let [totalPrice, setTotalPrice] = useState(0)
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
  return (
    <div className="w-full px-10 max-md:px-4 py-2 h-fit flex gap-4 max-md:gap-2 max-md:flex-col">
      <div className="w-3/5 max-md:w-full rounded-lg h-fit flex flex-col gap-2">
        <div className="w-full justify-between">
          <h2 className="font-medium text-lg max-md:text-base text-dim">
            CheckList {"(23)"}
          </h2>
          <div className="w-full h-auto flex flex-col gap-2">
              <CheckoutCard
                price={15000}
                title={"okennyd"}
                discount={20}
                quantity={5}
              />
          </div>
        </div>
        <div className="w-full bg-white rounded-2xl p-2">
          <h2 className="font-semibold text-lg max-md:text-base text-dim">
            Summary
          </h2>
          <div className=" w-full flex flex-col gap-2">
            {sum?.map((_s, i) => (
              <div
                key={i}
                className=" w-full gap-2 text-dim text-lg flex justify-between items-center px-2"
              >
                <span className=" text-nowrap">{_s.name}</span>
                  <h3>
                    {formatter.format(_s.price)}
                  </h3>
              </div>
            ))}
            <button className="w-full bg-primary text-white rounded-full py-2 font-bold">
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
              deliveryType ? "bg-white" : "bg-none"
            } py-2 px-4 flex gap-2 items-center`}
          >
            <div
              className={`size-4 rounded-full ${
                deliveryType
                  ? "bg-secondary"
                  : "bg-white"
              }`}
            ></div>
            <h3>Delivery</h3>
          </div>
          <div
            onClick={() => setDeliveryType(false)}
            className={`w-1/2 h-auto rounded-full ${
              deliveryType ? "" : " bg-white"
            } py-2 px-4 flex gap-2 items-center`}
          >
            <div
              className={`size-4 rounded-full  ${
                deliveryType
                  ? "bg-white"
                  : "bg-secondary"
              }`}
            ></div>
            <h3>Pickup</h3>
          </div>
        </div>
        {deliveryType ? (
          <div className="w-full rounded-2xl h-fit bg-white py-2 px-4">
            <div className="flex justify-between">
              <p className=" text-nowrap font-semibold text-lg max-md:text-base max-md:font-extrabold text-dark">
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
                <p className="font-medium text-dim text-lg">
                  Name:
                </p>{" "}
                <p className="text-dim text-lg">
                  Oyetade Kehinde
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-dim text-lg">
                  Mobile:
                </p>{" "}
                <p className="text-dim text-lg">
                  +2349070387981
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-dim text-lg">
                  Email:
                </p>{" "}
                <p className="text-dim text-lg">
                  kehindeoyetade67@gmail.com
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-dim text-lg">
                  Address:
                </p>{" "}
                <p className="text-dim text-lg">
                  30, Dozie Okolo street, unity estate.
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-dim text-lg">
                  City:
                </p>{" "}
                <p className="text-dim text-lg">Lagos</p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-dim text-lg">
                  State/Region:
                </p>{" "}
                <p className="text-dim text-lg">Lagos</p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-dim text-lg">
                  Country:
                </p>{" "}
                <p className="text-dim text-lg">Nigeria</p>
              </li>
            </ul>
          </div>
        ) : (
          <div className="w-full rounded-2xl h-72 bg-white p-2">
            there are no near by hb to you
          </div>
        )}
      </div>
    </div>
  );
}
