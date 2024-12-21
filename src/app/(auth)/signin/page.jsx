"use server";
import { login } from "@/_util/action/login";
import { auth, signIn } from "@/auth";
import Link from "next/link";
import { IoLogoGoogle, IoLogoFacebook, IoLogoApple } from "react-icons/io5";
export default async function Signin() {
  const session = await auth();
  console.log(session.user)
  return (
    <main className="max-md:p-10 py-20 w-full h-full flex items-center justify-center">
      <div className=" w-[30%] max-md:w-4/5 bg-white dark:bg-dark rounded-2xl h-auto py-6 px-6">
        <p className="dark:text-gray-400 text-dim text-2xl font-bold text-center">
          Welcome back
        </p>
        <div
          className={`w-full rounded-lg bg-blue-800" : "bg-green-800 text-primary text-opacity-60 font-semibold  bg-opacity-10 h-auto px-2 py-1`}
        >
          Login successful
        </div>
        <form action={login} className=" flex flex-col pt-3 ">
          <div className="gap-4 flex flex-col">
            <div className=" w-full">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="p-2 ps-4 border-primary outline-primary w-full h-10 font-medium caret-secondary text-base placeholder:text-slate-400 bg-gray-200 dark:bg-dim rounded-2xl text-dark dark:text-gray-200"
              />
            </div>
            <div className=" w-full">
              <input
                type="password"
                name="password"
                placeholder="password"
                className=" p-2 ps-4 pe-8 border-primary outline-primary w-full h-10 font-medium caret-secondary text-base placeholder:text-slate-400 bg-gray-200 dark:bg-dim rounded-2xl text-dark dark:text-gray-200"
              />
            </div>
          </div>
          <Link
            className=" text-primary text-sm text-end font-medium mb-2 me-2"
            href="/forgotten_password"
          >
            Forgotten password?
          </Link>
          <button
            type="submit"
            className=" my-1 bg-primary w-full h-10 font-bold rounded-2xl text-sm text-white"
          >
            Login
          </button>
        </form>
        <fieldset className=" w-full mt-4 py-2 border-t-[2px] border-slate-200">
          <legend className=" m-auto text-gray-400 dark:bg-dark bg-white text-center px-2">
            or with
          </legend>
          <div className="flex  gap-3 w-full justify-center items-center">
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button className="  text-gray-400">
                <IoLogoGoogle size={30} className="" />
              </button>
            </form>
            <form
              action={async () => {
                "use server";
                await signIn("facebook");
              }}
            >
              <button className="  text-gray-400">
                <IoLogoFacebook size={30} className="" />
              </button>
            </form>
            <form
              action={async () => {
                "use server";
                await signIn("apple");
              }}
            >
              <button className="  text-gray-400">
                <IoLogoApple size={30} className="" />
              </button>
            </form>
          </div>
        </fieldset>
        <div className="inline-flex dark:text-gray-400 text-dim text-xs font-thin w-full text-center justify-center items-center">
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
