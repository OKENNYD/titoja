"use server";
import { login } from "@/_util/action/login";
// import { signIn } from "@/auth";
import Link from "next/link";
export default async function Signin() {
  return (
    <main className="py-20 w-full h-full flex items-center justify-center">
      <div className="w-1/4 max-md:w-4/5 bg-white rounded-2xl h-auto p-6 max-md:px-2 max-md:my-4">
        <p className="text-dim text-xl font-medium text-center">
          Welcome back
        </p>
        <div
          className={`w-full rounded-lg bg-blue-800" : "bg-green-800 text-primary text-opacity-60 font-semibold  bg-opacity-10 h-auto px-2 py-1`}
        >
          Login successful
        </div>
        <form className="flex flex-col gap-4 max-md:px-2">
          <div className="gap-4 flex flex-col">
            <div className=" w-full">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-gray-400 bg-gray-200 rounded-full text-dark"
              />
            </div>
            <div className=" w-full">
              <input
                type="password"
                name="password"
                placeholder="password"
                className=" p-2 ps-4 pe-8 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-gray-400 bg-gray-200 rounded-full text-dark"
              />
            </div>
          </div>
          <Link
            className=" text-primary text-sm text-end me-2 -my-3"
            href="/verification"
          >
            Forgotten password?
          </Link>
          <button
          name="login"
            type="submit"
            className=" my-1 bg-primary w-full h-10 rounded-full text-sm text-white"
          >
            Login
          </button>
        </form>
        <fieldset className=" w-full mt-4 py-1 border-t-[2px] border-gray-200">
          <legend className=" m-auto text-gray-400 bg-white text-center px-2">
            or with
          </legend>
          {/* <div className="flex  gap-3 w-full justify-center items-center">
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button name="signin with google" className="  text-gray-400">
                <Image src="/assets/img/google.svg" alt="" width={40} height={40}/>
              </button>
            </form>
            <form
              action={async () => {
                "use server";
                await signIn("facebook");
              }}
            >
              <button name="signin with facebook"  className="  text-gray-400">
                <Image src="/assets/img/facebook.svg" alt="" width={40} height={40}/>
              </button>
            </form>
            <form
              action={async () => {
                "use server";
                await signIn("apple");
              }}
            >
              <button name="signin with apple"  className="  text-gray-400">
                <Image src="/assets/img/apple.svg" alt="" width={40} height={40}/>
              </button>
            </form>
          </div> */}
        </fieldset>
        <div className="inline-flex text-dim text-xs w-full text-center justify-center items-center">
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