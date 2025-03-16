import Image from "next/image"
import Images from "@/_util/constants/images"
import Message from '@/components/Card/Message'
import { Send, Paperclip, ChevronRight } from "lucide-react";
import Bubble from "@/components/Card/Bubble";
export default function CustomerService() {
  return (
    <section className="flex flex-col gap-2">
      <div className="w-full bg-white rounded-2xl h-fit py-2 px-4">
        <p className="font-semibold text-xl text-dark">Messages</p>
      </div>
      <div className=" w-full bg-white h-96 flex gap-4 rounded-2xl px-4 max-md:px-2 py-4">
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
        <div className="w-4/6 max-md:absolute max-md:z-50 max-md:top-0 max-md:left-0 max-md:w-full h-full box-border bg-gray-100 rounded-md max-md:rounded-none overflow-hidden">
          <div className="flex justify-between h-1/6 max-md:h-14 w-full bg-gray-400 max-md:bg-primary p-2">
            <div className="flex gap-4 max-md:gap-2">
              <Image
                src={Images.avatar}
                alt="user"
                className="size-12 aspect-square max-md:size-[40px] rounded-full"
                priority
              />
              <div className="flex flex-col">
                <h1 className="font-bold text-dim max-md:text-dim text-xl max-md:text-base">
                  Customer Service
                </h1>
                <p className="font-medium text-dim text-base max-md:text-dim max-md:text-xs">
                  Active
                </p>
              </div>
            </div>
            <ChevronRight strokeWidth={1} className=" text-dim max-md:text-dim" size={32} />
          </div>
          <div className="flex flex-col p-2 gap-2 overflow-y-scroll h-4/6 max-md:h-5/6">
            <Bubble sender={"me"} />
            <Bubble sender={"me"} />
            <Bubble sender={false} />
            <Bubble sender={"me"} />
            <Bubble sender={false} />
          </div>
          <form className=" w-full p-2 gap-1 items-center flex h-1/6 bg-white max-md:h-14 overflow-hidden">
            <label htmlFor="docUpload">
              <Paperclip strokeWidth={1} className="size-8 text-secondary" />
            </label>
            <input
              className=" sr-only"
              type="file"
              name="document"
              id="docUpload"
            />
            <textarea
              cols="5"
              name="msg"
              className=" outline-none text-lg w-full max-md:w-full max-md:text-lg caret-primary px-2 bg-inherit placeholder:text-slate-400 scroll-none"
              placeholder="Message ..."
            ></textarea>
            <button name="send" type="submit">
              <Send strokeWidth={1} className=" text-secondary size-8" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
