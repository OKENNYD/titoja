"use client"
import { IoLogoGoogle, IoLogoFacebook, IoLogoApple } from "react-icons/io5";
import { register } from "@/_util/action/register"

export default function Signup() {
  return (
    <main className="max-md:p-6 py-20 w-full h-full flex items-center justify-center">
      <div className="w-[30%] max-md:w-4/5 bg-white h-auto rounded-3xl py-6 px-6">
        <p className="text-dim text-2xl font-bold text-center">
          Welcome to Titaoja
        </p>
        <form action={register} className="flex gap-4 flex-col pt-3">
          <div className="w-full">
            <input
              type="text" 
              name="firstname"
              placeholder="Firstname"
              className="px-2 py-1 outline-primary w-full h-10 caret-secondary text-sm placeholder:text-gray-400 bg-gray-200 rounded-2xl text-dim"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              className="px-2 py-1 outline-primary w-full h-10 caret-secondary text-sm placeholder:text-gray-400 bg-gray-200 rounded-2xl text-dim"
            />
          </div>
          <div className="w-full">
            <input
              type="tel"
              name="tel"
              placeholder="Mobile"
              className="px-2 py-1 outline-primary w-full h-10 caret-secondary text-sm placeholder:text-gray-400 bg-gray-200 rounded-2xl text-dim"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="px-2 py-1 outline-primary w-full h-10 caret-secondary text-sm placeholder:text-gray-400 bg-gray-200 rounded-2xl text-dim"
            />
          </div>
          <div className="w-full">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="px-2 py-1 outline-primary w-full h-10 caret-secondary text-sm placeholder:text-gray-400 bg-gray-200 rounded-2xl text-dim"
            />
          </div>
          <button
            type="submit"
            className="my-2 bg-primary w-full h-10 font-bold rounded-2xl text-white"
          >
            Register
          </button>
        </form>
        <fieldset className="w-full mt-2 py-2 border-t-[2px] border-dim">
          <legend className="m-auto text-gray-400 bg-white text-center px-2">
            or with
          </legend>
          <div className="flex gap-3 w-full justify-center items-center">
            <button className="  text-gray-400">
              <IoLogoGoogle size={30} className="" />
            </button>
            <button className="  text-gray-400">
              <IoLogoFacebook size={30} className="" />
            </button>
            <button className="  text-gray-400">
              <IoLogoApple size={30} className="" />
            </button>
          </div>
        </fieldset>
        <div className="inline-flex text-gray-400 text-xs w-full text-center justify-center items-center">
          <p>
            By continuing, you confirm that you are an adult and you have read
            and accepted our terms, Titaoja Membership Agreement and Privacy
            Policy.
          </p>
        </div>
      </div>
    </main>
  );
}
