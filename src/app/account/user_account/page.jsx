"use client"
import Link from "next/link"
import Image from "next/image"
import Images from "@/_util/constants/images"
import { Tickets, Store, Heart, User } from 'react-icons/io5'
export default function UserAccount() {
          
  const data = [
    { name: 'My List', icon: <Heart strokeWidth={1} className="text-secondary" size={25}/>, url: "my_list"},
    { name: 'Following', icon: <User strokeWidth={1} size={25}/>, url: "following"},
    { name: 'Visited', icon: <Store strokeWidth={1} size={25}/>, url: "visited"},
    { name: 'Coupon', icon: <Tickets strokeWidth={1} size={25}/>, url: "coupons"},
  ];
  return (
    <section className="flex flex-col gap-4 max-md:gap-2">
      <div className="w-full bg-white rounded-xl h-fit py-2 px-4">
        <p className="font-semibold text-xl text-dark">User</p>
      </div>
      <div className=" w-full bg-white h-auto text-dim rounded-2xl px-4 py-4">
        <div className="flex gap-2 items-center">
          <Image
            src={Images.avatar}
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />
          <p className="font-semibold text-lg text-dim">
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
                <p className="text-base text-dim font-semibold">
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
