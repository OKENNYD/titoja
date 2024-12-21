import Image from "next/image"
import Images from "@/_util/constants/images"
import Message from '@/components/Card/Message'
import { IoTimeOutline, IoPaperPlane, IoAttach, IoChevronForward } from "react-icons/io5";
import Bubble from "@/components/Card/Bubble";
export default function CustomerService() {
  return (
    <section className="flex flex-col gap-4 max-md:gap-2">
      <div className="w-full bg-white dark:bg-dark rounded-xl h-fit py-2 px-4">
        <p className="font-bold text-xl dark:text-gray-200 text-dark">
          Messages
        </p>
      </div>
      <div className=" w-full dark:bg-dark bg-white h-96 flex gap-4 rounded-lg px-4 max-md:px-2 py-4">
        <div className="w-2/6 max-md:w-full max-md:hidden bar h-full rounded-md overflow-y-scroll">
          <Message title="Customer Service" />
          <Message title="Report Center" />
          <Message title="Kidet Shop" />
          <Message title="Okd electro" />
          <Message title="Customer Service" />
          <Message title="Customer Service" />
          <Message title="Customer Service" />
          <Message title="Customer Service" />
        </div>
        <div className="w-4/6 max-md:absolute max-md:z-50 max-md:top-0 max-md:left-0 max-md:w-full h-full box-border bg-slate-100 dark:bg-dim rounded-md max-md:rounded-none overflow-hidden">
          <div className="flex justify-between h-1/6 max-md:h-14 w-full dark:bg-black bg-slate-400 max-md:bg-primary p-2">
            <div className="flex gap-4 max-md:gap-2">
              <Image
                src={Images.avatar}
                alt="user"
                className="size-12 aspect-square max-md:size-[40px] rounded-full"
                priority
              />
              <div className="flex flex-col">
                <h1 className="font-bold text-dim dark:text-gray-200 max-md:text-slate-200 text-xl max-md:text-base">
                  Customer Service
                </h1>
                <p className="font-medium text-slate-200 dark:text-gray-400 text-base max-md:text-slate-400 max-md:text-xs">
                  Active
                </p>
              </div>
            </div>
            <IoChevronForward
              className=" text-slate-200 max-md:text-slate-200"
              size={32}
            />
          </div>
          <div className="flex flex-col p-2 gap-2 overflow-y-scroll h-4/6 max-md:h-5/6">
            <Bubble sender={"me"} />
            <Bubble sender={"me"} />
            <Bubble sender={false} />
            <Bubble sender={"me"} />
            <Bubble sender={false} />
          </div>
          <form className=" w-full p-2 gap-1 flex h-1/6 bg-white dark:bg-black max-md:h-14 overflow-hidden">
            <label
              className=" rounded-3xl text-xs p-2 h-full w-auto text-white max-md:text-base bg-primary max-md:bg-transparent max-md:text-slate-600 font-bold "
              htmlFor="docUpload"
            >
              <IoAttach className=" max-md:size-8" size={25} />
            </label>
            <input
              className=" sr-only"
              type="file"
              name="document"
              id="docUpload"
            />
            <input
              type="text"
              name="msg"
              className=" outline-none text-lg w-full max-md:w-full max-md:text-lg caret-primary px-2 bg-inherit placeholder:text-slate-400 scroll-none"
              placeholder="Message ..."
            />
            <button
              type="submit"
              className=" rounded-3xl text-xs p-2 h-full w-auto text-white max-md:text-base bg-primary  font-bold "
            >
              <IoPaperPlane className=" size-4" size={25} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
