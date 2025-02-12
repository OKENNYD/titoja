import Link from "next/link";
import Image from "next/image";
import Images from "../../../_util/constants/images"

export default function ChangePassword() {

    const getPassword = async (formData) => {
      const data = {
        password: formData.get("password")
      }
      console.log(data);
  }
    return (
      <main className="max-md:p-6 py-20 w-full h-full flex items-center justify-center">
        <div className="bg-white w-[30%] max-md:w-4/5 h-auto pt-6 pb-4">
          <Link href="/">
            <Image
              src={Images.icon}
              height={60}
              width={80}
              alt="salepex"
              className=" m-auto mb-2"
            ></Image>
          </Link>
          <p className="text-dim text-2xl font-bold text-center">
            Change password
          </p>
          <form
            method="post"
            action={getPassword}
            className=" px-6 max-md:px-8 flex flex-col pt-3 "
          >
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className=" p-2 ps-3 border-primary w-full h-9 caret-secondary text-lg placeholder:text-gray-300 bg-gray-200 rounded-2xl mb-3 text-dark"
            />
            <button
              type="submit"
              className=" my-2 bg-primary w-full h-9 font-bold rounded-2xl text-white"
            >
              Change Password
            </button>
          </form>
        </div>
      </main>
    );
  }
  