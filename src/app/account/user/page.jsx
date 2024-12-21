"use client"
import Link from "next/link"
import Image from "next/image"
import Images from "@/_util/constants/images"
import { IoTicketOutline, IoStorefrontOutline, IoHeartOutline, IoPeopleOutline } from 'react-icons/io5'
export default function User() {

  const data = [
    { name: 'My List', icon: <IoHeartOutline className="text-secondary" size={25}/>, url: "my_list"},
    { name: 'Following', icon: <IoPeopleOutline size={25}/>, url: "following"},
    { name: 'Visited', icon: <IoStorefrontOutline size={25}/>, url: "visited"},
    { name: 'Coupon', icon: <IoTicketOutline size={25}/>, url: "coupons"},
  ];
  return (
    <section className="flex flex-col gap-4 max-md:gap-2">
      <div className="w-full dark:bg-dark bg-white rounded-xl h-fit py-2 px-4">
        <p className="font-bold text-xl text-dark dark:text-gray-200">User</p>
      </div>
      <div className=" w-full dark:bg-dark bg-white h-auto text-dim dark:text-gray-200 rounded-lg px-4 py-4">
        <div className="flex gap-2 items-center">
          <Image
            src={Images.avatar}
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />
          <p className="font-semibold text-lg text-dim dark:text-gray-200">
            Oyetade Kehinde
          </p>
        </div>
        <ul className="flex justify-evenly">
          {data.map((_, i) => (
            <li key={i}>
              <Link
                href={_.url}
                className="flex flex-col justify-center items-center"
              >
                {_.icon}
                <p className="text-base text-dim dark:text-gray-400 font-semibold">
                  {_.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
