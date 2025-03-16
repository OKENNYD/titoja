"use client"
// import { register } from "@/_util/action/register"
import Image from "next/image";
export default function Signup() {
  return (
    <main className="py-20 max-md:py-10 w-full h-full flex items-center justify-center">
      <div className="w-1/4 max-md:w-4/5 bg-white h-auto rounded-2xl p-6 max-md:px-2 max-md:my-4">
        <p className="text-dim text-xl font-medium text-center">
          Welcome to Titaoja
        </p>
        <form className="flex gap-4 flex-col max-md:px-2">
          <div className="w-full">
            <input
              type="text" 
              name="firstname"
              placeholder="Firstname"
              className="px-2 py-1 outline-primary w-full h-10 caret-secondary text-base placeholder:text-gray-400 bg-gray-200 rounded-full text-dim"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              className="px-2 py-1 outline-primary w-full h-10 caret-secondary text-base placeholder:text-gray-400 bg-gray-200 rounded-full text-dim"
            />
          </div>
          <div className="w-full">
            <input
              type="tel"
              name="tel"
              placeholder="Mobile"
              className="px-2 py-1 outline-primary w-full h-10 caret-secondary text-base placeholder:text-gray-400 bg-gray-200 rounded-2xl text-dim"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="px-2 py-1 outline-primary w-full h-10 caret-secondary text-base placeholder:text-gray-400 bg-gray-200 rounded-2xl text-dim"
            />
          </div>
          <div className="w-full">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="px-2 py-1 outline-primary w-full h-10 caret-secondary text-base placeholder:text-gray-400 bg-gray-200 rounded-full text-dim"
            />
          </div>
          <button
          name="register"
            type="submit"
            className="my-2 bg-primary w-full h-10 rounded-full text-white"
          >
            Register
          </button>
        </form>  
        <fieldset className="w-full mt-2 py-2 border-t-[1px] border-dim">
          <legend className="m-auto text-gray-400 bg-white text-center px-2">
            or with
          </legend>
          <div className="flex gap-3 w-full justify-center items-center">
            <button name="signin with google"  className="Imgfilter">
              <Image src="/assets/img/google.svg" alt="" width={40} height={40}/>
            </button>
            <button name="signin with facebook" className="Imgfilter">
            <Image src="/assets/img/facebook.svg" alt="" width={40} height={40}/>
            </button>
            <button name="signin with apple" className="Imgfilter">
            <Image src="/assets/img/apple.svg" alt="" width={40} height={40}/>
            </button>
          </div>
        </fieldset>
        <div className="inline-flex text-gray-400 text-xs w-full text-center justify-center items-center">
          <p>
            By continuing, you confirm that you are an adult and you have read
            and accepted our terms, Titoja Membership Agreement and Privacy
            Policy.
          </p>
        </div>
      </div>
    </main>
  );
}
