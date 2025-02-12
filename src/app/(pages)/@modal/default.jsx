"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import Images from "@/_util/constants/images";
import Rating from "@/components/Rate/Rate";
import goods from "@/_util/api/goods";
import { IoAdd, IoHeart, IoRemove, IoClose, IoHeartOutline } from "react-icons/io5";
import { useGlobalContext } from "@/_util/constants/context";
export default function Preview() {
  const { isModal, setIsModal, id, currencyCode } = useGlobalContext();
  let arrLoop = [Images.img_1,Images.img_2,Images.img_3,Images.img_4,Images.img_5]
  let [currentSrc, setCurrentSrc] = useState(arrLoop[1])
  let specificGood = goods.filter((good) => good.id === id)
  let [stockCount, setStockCount] = useState(1)
  let [liked, setLiked] = useState(false)
  let imgRef = useRef(null)
  return (
    <div className={isModal ? "hidden" : "fixed shadow-dim shadow-sm bg-slate-400 bg-opacity-30 z-40 w-full h-screen left-0 top-0 justify-center items-center"}>
      {specificGood.map((stock, index) => (
        <div key={index} className="rounded-3xl w-4/6 m-auto my-20 h-auto gap-4 flex flex-row bg-white p-4 box-border">
          <IoClose onClick={() => setIsModal(!isModal)} className="absolute z-50 text-dim rounded-full text-4xl " />
          <div className="flex w-4/6 max-md:w-full max-md:gap-2 box-border max-md:flex-col">
              <Image
              id="banner"
              src={currentSrc}
                alt="product img"
                className=" mx-auto w-5/6 max-md:w-full rounded-2xl max-md:rounded-xl aspect-square h-auto"
                priority
              />
              <div className="flex ps-2 duration-1000 flex-col max-md:flex-row w-1/6 max-md:w-full max-md:h-16 gap-2">
              {arrLoop.map((_d,i)=>(
                <Image
                  key={i}
                  src={_d}
                  ref={imgRef}
                  alt="product img"
                  onClick={()=> setCurrentSrc(_d)} 
                  className={`aspect-square rounded-lg w-full duration-1000 h-auto max-md:h-full ${currentSrc == _d && "border-2 border-primary"}`}
                  priority
                  />
                ))}
              </div>
            </div>
          <div className="w-2/5 max-md:w-full h-auto gap-2 flex flex-col">
              <h2 className="font-bold text-lg text-slate-400">{stock.title}</h2>
              <div className="flex gap-2 flex-col">
                <div className="text-xs text-dim inline-flex gap-1" ><Rating />
                  <p className="">{stock.rating.toFixed(1)}</p></div>
                <div className="text-xs text-dim flex gap-4">
                  <p className=" text-center flex flex-col ">
                    <span className=" text-base text-dim font-semibold text-center" >
                      671
                    </span>
                    reviews
                  </p>
                  <p className=" text-center flex flex-col ">
                    <span className=" text-base text-dim font-semibold text-center">
                      100+
                    </span>
                    sold
                  </p>
                  <p className=" text-center flex flex-col ">
                    <span className=" text-base text-dim font-semibold text-center" >
                      {stock.stock}
                    </span>
                    stock
                  </p>
                  <p className=" text-center flex flex-col ">
                    <span className=" text-[24px]  text-red-600 font-semibold text-center" onClick={() => setLiked(!liked)}>
                      {liked ? <IoHeart /> : <IoHeartOutline className="text-dim" />}
                    </span>
                  </p>
                </div>
              </div>
              <hr className="px-4" />
              <form>
                <div className="w-auto h-auto box-border text-lg font-semibold">
                  <h3 className=" text-dim">Color: blue</h3>
                  <div className="gap-2 flex h-8 flex-row ">
                    <input checked type="radio" className="sr-only peer/blue" name="size" id="img3" />
                    <label htmlFor="img3" className="h-8 w-8 overflow-hidden border-2 rounded-xl peer-checked/blue:border-primary">
                      <Image
                        src={Images.dimension}
                        alt="product img"
                        className="aspect-square w-full h-full"
                        priority
                      />
                    </label>
                    <input type="radio" className="sr-only peer/red" name="size" id="img4" />
                    <label htmlFor="img4" className="h-8 w-8 overflow-hidden border-2 rounded-xl peer-checked/red:border-primary">
                      <Image
                        src={Images.dimension}
                        alt="product img"
                        className="aspect-square w-full h-full"
                        priority
                      />
                    </label>
                  </div>
                </div>
                <div className=" w-auto h-auto box-border text-lg font-semibold">
                  <h3 className=" text-dim">Size:</h3>
                  <div className="gap-2 flex h-8 flex-row ">
                    <input type="radio" className="sr-only peer/42" name="color_blue" id="42" />
                    <label htmlFor="42" className="w-8 h-full bg-dim p-2 text-sm flex justify-center items-center peer-checked/42:border-primary rounded-xl text-dim border-2"><p>42</p></label>
                    <input checked type="radio" className="sr-only peer/43" name="color_blue" id="43" />
                    <label htmlFor="43" className="w-8 h-full bg-dim p-2 text-sm flex justify-center items-center peer-checked/43:border-primary rounded-xl text-gray-400 border-2"><p>42</p></label>
                  </div>
                </div>
                {/* <div className=" w-auto h-auto box-border text-lg font-semibold">
              <h3 className=" text-dim">Plug:</h3>
              <div className="gap-2 flex h-8 flex-row ">
                <input type="radio" className="sr-only peer/42" name="color_blue" id="42" />
                <label htmlFor="42" className="w-8 h-full bg-dim p-2 text-sm flex justify-center items-center peer-checked/42:border-primary rounded-xl text-dim border-2"><p>42</p></label>
                <input type="radio" className="sr-only peer/43" name="color_blue" id="43" />
                <label htmlFor="43" className="w-8 h-full bg-dim p-2 text-sm flex justify-center items-center peer-checked/43:border-primary rounded-xl text-dim border-2"><p>42</p></label>
              </div>
            </div>
            <div className=" w-auto h-auto box-border text-lg font-semibold">
              <h3 className=" text-slate-600">Material:</h3>
              <div className="gap-2 flex h-8 flex-row ">
                <input type="radio" className="sr-only peer/42" name="color_blue" id="42" />
                <label htmlFor="42" className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center peer-checked/42:border-primary rounded-xl text-gray-400 border-2"><p>42</p></label>
                <input type="radio" className="sr-only peer/43" name="color_blue" id="43" />
                <label htmlFor="43" className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center peer-checked/43:border-primary rounded-xl text-gray-400 border-2"><p>42</p></label>
              </div>
            </div> */}
                <div className=" w-auto h-auto box-border text-lg font-semibold">
                  <h3 className=" text-slate-600">Quantity:</h3>
                  <div className=" p-1 w-24 h-8 gap-2 flex text-slate-600 items-center text-1xl outline-0 border-0 bg-gray-200 rounded-full cursor-pointer ">
                    <button onClick={(e) => {e.currentTarget.disabled = true;  setStockCount(prev=>prev-1); stockCount == 0 && removeEventListener("click")}} className=" text-2xl text-white bg-primary rounded-full" >
                      <IoRemove />
                    </button>
                    <p className=" w-full border-0 outline-0 text-center bg-transparent">{stockCount}
                    </p>
                    <button onClick={() => setStockCount(prev=>prev+1)} className=" text-2xl text-white bg-primary rounded-full" >
                      <IoAdd />
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="price w-full items-baseline flex gap-2 ">
                  <p className=" -my-[2px] text-2xl max-md:text-base font-bold flex items-baseline text-gray-400">
                    <span className=" max-md:text-xs text-sm">{currencyCode}</span>
                    {stock.price-(stock.price*(stock.discountPercentage/100))}
                  </p>
                  <p className=" -my-[2px] text-lg line-through flex items-baseline text-gray-400">
                    <span className=" max-md:text-xs text-sm">{currencyCode}</span>
                    {stock.price}
                  </p>
                </div>
                <button className="mt-2 py-2 font-bold rounded-full w-full text-white bg-primary">
                  Add to Cart
                </button>
              </form>
            </div>
        </div>
      ))}

    </div>
  );
}
