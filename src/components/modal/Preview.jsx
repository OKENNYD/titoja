"use client";
import Image from "next/image";
import { useState }  from "react";
import Images from "@/_util/constants/images";
import Rating from "../Rate/Rate";
import { IoAdd, IoHeart, IoRemove, IoClose } from "react-icons/io5";
import { useGlobalContext } from "@/_util/constants/context";
export default function Preview() {
  const { isModal, setIsModal } = useGlobalContext();
  let [stockCount, setStockCount] = useState(1)
  let handelclick = () => {
    setIsModal(!isModal)
  }
 
  let handleIncrement = () => {
    setStockCount(stockCount++);
  }
  let handleDecrement = (e) => {
    e.currentTarget.disabled = true;
    setStockCount(stockCount--);
  }

  return (<div className="fixed bg-slate-400 bg-opacity-30 z-40 w-full h-screen left-0 top-0 justify-center items-center">
      <div className="rounded-3xl w-4/6 m-auto my-20 h-auto gap-4 flex flex-row bg-white p-4 box-border">
      <IoClose onClick={handelclick} className="absolute z-50 text-slate-600 rounded-full text-4xl "/>
        <div className="imgs box-border gap-2 flex w-full">
          <Image
            src={Images.dimension}
            alt="product img"
            className=" mx-auto w-5/6 rounded-2xl aspect-square h-auto"
          />
          <div className="flex flex-col w-1/6 gap-2">
            <Image
              src={Images.dimension}
              alt="product img"
              className=" border-primary border-2 mx-auto rounded-2xl aspect-square w-auto h-auto"
            />
            <Image
              src={Images.dimension}
              alt="product img"
              className=" mx-auto rounded-2xl aspect-square w-auto h-auto"
            />
            <Image
              src={Images.dimension}
              alt="product img"
              className=" mx-auto rounded-2xl aspect-square w-auto h-auto"
            />
            <Image
              src={Images.dimension}
              alt="product img"
              className=" mx-auto rounded-2xl aspect-square w-auto h-auto"
            />
            <Image
              src={Images.dimension}
              alt="product img"
              className=" mx-auto rounded-2xl aspect-square w-auto h-auto"
            />
          </div>
        </div>
        <div className="w-2/5 h-auto gap-2 flex flex-col">
          <h2 className="font-bold text-lg text-center text-slate-600">Name of Product</h2>
          <div className="flex gap-2 flex-col just items-center">
            <div className="font-normal items-center justify-center text-xs text-slate-600 inline-flex gap-1" ><Rating />
              <p className="">4.5</p></div>
            <div className="font-normal items-center justify-center text-xs text-slate-600 inline-flex gap-2">
                <p className=" text-center flex flex-col ">
                  <span className=" text-base text-slate-600 font-semibold text-center" >
                    671
                  </span>
                  reviews
                </p>
              <hr className="rotate-90 w-full h-[2px] rounded-full bg-slate-400 text-slate-400" />
                <p className=" text-center flex flex-col ">
                  <span className=" text-base text-slate-600 font-semibold text-center">
                    100+
                  </span>
                  sold
                </p>
              <hr className="rotate-90 w-full h-[2px] rounded-full bg-slate-400 text-slate-400" />
                <p className=" text-center flex flex-col ">
                  <span className=" text-base text-slate-600 font-semibold text-center" >
                    150
                  </span>
                  stock
                </p>
            </div>
          </div>
          <hr className="px-4" />
          <div className=" w-1/2 h-auto box-border text-lg font-semibold">
            <h3 className=" text-slate-600">Color: blue</h3>
            <div className="gap-2 flex h-8 flex-row ">
              <Image
                src={Images.dimension}
                alt="product img"
                className=" border-primary border-2 mx-auto rounded-xl aspect-square w-auto h-auto"
              />
              <Image
                src={Images.dimension}
                alt="product img"
                className=" mx-auto w-auto h-auto rounded-xl aspect-square"
              />
              <Image
                src={Images.dimension}
                alt="product img"
                className=" mx-auto w-auto h-auto rounded-xl aspect-square"
              />
              <Image
                src={Images.dimension}
                alt="product img"
                className=" mx-auto w-auto h-auto rounded-xl aspect-square"
              />
            </div>
          </div>
          <div className=" w-1/2 h-auto box-border text-lg font-semibold">
            <h3 className=" text-slate-600">Size:</h3>
            <div className="gap-2 flex h-8 flex-row ">
              <div className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center rounded-xl text-slate-400  border-primary border-2"><p>42</p></div>
              <div className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center rounded-xl text-slate-400"><p>42</p></div>
              <div className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center rounded-xl text-slate-400"><p>42</p></div>
              <div className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center rounded-xl text-slate-400"><p>42</p></div>
            </div>
          </div>
          <hr />
          <div className="  font-semibold text-sm text-center">
            <div className=" w-full">
              <div className="w-full gap-4 p-1 flex justify-between items-center">
                <div className=" p-1 w-5/6 gap-2 flex text-slate-600 items-center text-1xl outline-0 border-0 bg-slate-200 rounded-full cursor-pointer ">
                  <button onClick={handleIncrement} className=" text-3xl text-white bg-primary rounded-full" >
                  <IoAdd/>
                  </button>
                  <span className=" w-full border-0 outline-0 text-center bg-transparent">{stockCount}
                  </span>
                  <button onClick={handleDecrement} className=" text-3xl text-white bg-primary rounded-full" >
                  <IoRemove/>
                  </button>
                </div>
                <IoHeart className=" text-3xl text-secondary rounded-full"/>
              </div>
              <button className=" py-2 font-semibold rounded-full w-full text-white bg-primary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
