"use client";
import Image from "next/image";
import Link from "next/link"
import { useState, useRef } from "react";
import Images from "@/_util/constants/images";
import Head from "next/head";
import likes from "@/_util/api/liked"
import Rating from "@/components/Rate/Rate";
import goods from "../../../../_util/api/goods"
import { IoAdd, IoRemove, IoClipboardOutline, IoChevronForward, IoTicket, IoMedalOutline, IoCashOutline, IoCar, IoTimeOutline, IoPaperPlane, IoShieldCheckmark, IoBus, IoShareSocial, IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useGlobalContext } from "@/_util/constants/context";
export default function Item({ params }) {
  const { currencyCode } = useGlobalContext();
  const title = "Product name";
  const description = "Product name";
  const image = "Product name";
  let [stockCount, setStockCount] = useState(1)
  let [liked, setLiked] = useState(false)
  let arrLoop = [Images.img_1,Images.img_2,Images.img_3,Images.img_4,Images.img_5]
  let [currentSrc, setCurrentSrc] = useState(arrLoop[0])
  let filterGoods = goods.filter(stock => stock.id == params.slug[0])
  let colorArr = [{title: "red", hex: "#ff0000"},{title: "blue", hex: "#00ff00"},{title: "green", hex: "#0000ff"},{title: "orange", hex: "#ff421"}]
  let [color,setColor] = useState(colorArr[0])
  let sizeArr = [42,43,44,45]
  let [size,setSize] = useState(sizeArr[0])
  let matArr = ["leather","cotton","wool"]
  let [material,setMaterial] = useState(matArr[0])
  let imgRef = useRef(null)
  let handleShare = () => {
    navigator.share().then(shr=>shr)
  }
  return (
    <div className="w-full px-8 max-md:px-2 py-4 h-auto flex gap-4 max-md:flex-col">
      <Head>
        <title>{filterGoods[0].title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={filterGoods[0].title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={"google.com"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={filterGoods[0].title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <div className="w-full h-auto gap-2 flex max-md:flex-col">
        <div className="w-3/4 max-md:w-full h-auto flex flex-col gap-3">
          <div className=" w-full h-auto flex max-md:flex-col gap-2 max-md:gap-2 bg-white dark:bg-dark max-md:bg-transparent rounded-3xl p-2 max-md:p-0">
            <div className="flex w-4/6 max-md:w-full max-md:gap-2 box-border max-md:flex-col">
              <Image
                id="banner"
                src={currentSrc}
                alt="product img"
                className=" mx-auto w-5/6 max-md:w-full rounded-2xl max-md:rounded-xl aspect-square h-auto"
                priority
              />
              <div className="flex ps-2 duration-1000 flex-col max-md:flex-row w-1/6 max-md:w-full max-md:h-16 gap-2">
                {arrLoop.map((_d, i) => (
                  <Image
                    key={i}
                    src={_d}
                    ref={imgRef}
                    alt="product img"
                    onClick={() => setCurrentSrc(_d)}
                    className={`aspect-square rounded-lg w-full duration-1000 h-auto max-md:h-full ${
                      currentSrc == _d && "border-2 border-primary"
                    }`}
                    priority
                  />
                ))}
              </div>
            </div>
            <div className="w-2/6 box-border max-md:w-full h-auto gap-2 max-md:px-4 max-md:pb-4 flex flex-col">
              <h2 className="font-bold text-lg text-dark dark:text-gray-200">
                {filterGoods[0].title}
              </h2>
              <div className="flex gap-2 flex-col">
                <div
                  title={
                    filterGoods[0].title +
                    " has a " +
                    filterGoods[0].rating.toFixed(1) +
                    " rating"
                  }
                  className="font-normal text-xs dark:text-gray-400 text-slate-600 inline-flex gap-1"
                >
                  <Rating size={4} rate={filterGoods[0].rating.toFixed(1)} />
                  <p className="">{filterGoods[0].rating}</p>
                </div>
                <div className="font-normal text-xs text-dim dark:text-gray-400 flex justify-evenly">
                  <p className=" text-center flex flex-col ">
                    <span className=" text-base font-semibold text-center">
                      671
                    </span>
                    reviews
                  </p>
                  <p className=" text-center flex flex-col ">
                    <span className=" text-base font-semibold text-center">
                      100+
                    </span>
                    sold
                  </p>
                  <p className=" text-center flex flex-col ">
                    <span className=" text-base font-semibold text-center">
                      {filterGoods[0].stock}
                    </span>
                    stock
                  </p>
                  <p className=" text-center flex flex-col ">
                    <span
                      className=" text-[24px]  text-secondary font-semibold text-center"
                      onClick={() => {
                        setLiked(!liked);
                        liked ? likes.pop() : likes.push(filterGoods[0].id);
                      }}
                    >
                      {liked ? (
                        <IoBookmark />
                      ) : (
                        <IoBookmarkOutline
                          title="Add to Mylist"
                          className="text-dim dark:text-gray-400"
                        />
                      )}
                    </span>
                  </p>
                  <p
                    onClick={handleShare}
                    className=" text-center flex flex-col text-[24px] text-dim dark:text-gray-400"
                  >
                    <IoShareSocial title="Share on Socialmedia" />
                  </p>
                </div>
              </div>
              <hr className="px-4" />
              <form className="flex flex-col max-md:gap-3 gap-1">
                <div className="max-md:flex max-md:gap-4 max-md:items-center box-border text-lg font-semibold">
                  <h3 className=" text-dim dark:text-gray-200">
                    Color:{" "}
                    <span className=" opacity-60 text-base">{color.title}</span>
                  </h3>
                  <div className="gap-2 flex flex-row ">
                    {colorArr.map((_, i) => (
                      <input
                        key={i}
                        onClick={() => setColor(_)}
                        type="radio"
                        name="color"
                        className={`w-5 aspect-square h-auto accent-[${_.hex}] transition-colors duration-700`}
                      />
                    ))}
                  </div>
                </div>
                <div className="max-md:flex max-md:gap-4 max-md:items-center w-auto h-auto box-border text-lg font-semibold">
                  <h3 className=" text-dim dark:text-gray-200">
                    Size: <span className=" opacity-60 text-base">{size}</span>
                  </h3>
                  <ul className="gap-2 flex h-8 flex-row ">
                    {sizeArr.map((_, i) => (
                      <li
                        key={i}
                        onClick={() => setSize(_)}
                        className={`w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center rounded-xl text-slate-400 border-2 ${
                          size == _ && "border-primary"
                        }`}
                      >
                        {_}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="max-md:flex max-md:gap-4 max-md:items-center w-auto h-auto box-border text-lg font-semibold">
                  <h3 className="text-dim dark:text-gray-200">
                    Material:{" "}
                    <span className=" opacity-60 text-base">{material}</span>
                  </h3>
                  <ul className="gap-2 flex h-8 flex-row ">
                    {matArr.map((_, i) => (
                      <li
                        key={i}
                        onClick={() => setMaterial(_)}
                        className={`w-auto h-full bg-slate-200 p-2 text-sm flex justify-center items-center rounded-xl text-slate-400 border-2 ${
                          material == _ && "border-primary"
                        }`}
                      >
                        {_}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="max-md:flex max-md:gap-4 max-md:items-center w-auto h-auto box-border text-lg font-semibold">
              <h3 className="text-dim dark:text-gray-200">Plug:</h3>
              <div className="gap-2 flex h-8 flex-row ">
                <input type="radio" className="sr-only peer/42" name="color_blue" id="42" />
                <label htmlFor="42" className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center peer-checked/42:border-primary rounded-xl text-slate-400 border-2"><p>42</p></label>
                <input type="radio" className="sr-only peer/43" name="color_blue" id="43" />
                <label htmlFor="43" className="w-8 h-full bg-slate-200 p-2 text-sm flex justify-center items-center peer-checked/43:border-primary rounded-xl text-slate-400 border-2"><p>42</p></label>
              </div>
            </div>
             */}
                <div className="max-md:flex max-md:gap-4 max-md:items-center w-auto h-auto box-border text-lg font-semibold">
                  <h3 className=" text-dim dark:text-gray-200">Quantity:</h3>
                  <div className=" p-1 w-fit h-8 gap-2 flex dark:text-gray-200 text-slate-600 items-center outline-0 border-0 bg-slate-200 dark:bg-dim rounded-full cursor-pointer ">
                    <span
                      onClick={(e) => {
                        e.currentTarget.disabled = true;
                        setStockCount((prev) => parseInt(prev) - 1);
                        stockCount == 0 && removeEventListener("click");
                      }}
                      className="p-1 text-white bg-primary dark:bg-secondary rounded-full"
                    >
                      <IoRemove className="text-xl " />
                    </span>
                    <input
                      type="tel"
                      onChange={(e) => setStockCount(e.target.value)}
                      name="count"
                      value={stockCount}
                      className="w-12 px-1 text-xl border-0 bg-none outline-0 text-center bg-transparent"
                    />
                    <span
                      onClick={() =>
                        setStockCount((prev) => parseInt(prev) + 1)
                      }
                      className="text-white bg-primary dark:bg-secondary rounded-full p-1"
                    >
                      <IoAdd className="text-xl" />
                    </span>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="price w-full items-baseline flex gap-2 ">
                  <p className="-my-[2px] text-2xl font-bold flex items-baseline text-dark dark:text-gray-200">
                    <span className="text-sm">
                      {currencyCode}
                    </span>
                    {(
                      filterGoods[0].price -
                      (filterGoods[0].price *
                        filterGoods[0].discountPercentage) /
                        100
                    ).toFixed(2)}
                  </p>
                  <p className=" -my-[2px] text-lg line-through flex items-baseline text-dim dark:text-gray-400 font-medium">
                    <span className="text-sm">
                      {currencyCode}
                    </span>
                    {filterGoods[0].price}
                  </p>
                </div>
                <div className="w-full flex gap-2 px-2">
                  <button className="mt-2 w-full py-1 font-bold border-2 border-slate-400 rounded-full text-slate-400">
                    Order Now
                  </button>
                  <button className="mt-2 w-full py-1 font-bold rounded-full text-white bg-primary">
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="description w-full h-auto bg-white dark:bg-dark rounded-3xl px-4 py-2">
            <h2 className="text-dark text-lg font-bold dark:text-gray-200">
              Description
            </h2>
            <div className="w-fill h-auto text-dim dark:text-gray-400">
              <p>{filterGoods[0].description}</p>
            </div>
          </div>
        </div>
        <div className="w-1/4 max-md:w-full h-auto flex flex-col gap-3">
          <div className="discount w-full h-auto rounded-2xl dark:bg-dark bg-white p-2">
            <div className=" bg-secondary font-semibold flex items-center justify-between text-white pe-4 ps-2 rounded-lg py-2">
              <div className="flex gap-1 items-center">
                <IoTicket />
                <p>Discount & Coupon</p>
              </div>
              <IoChevronForward />
            </div>
            <div className=" p-2 flex flex-wrap gap-2">
              <span className="flex items-center gap-1 text-white text-xs font-medium bg-slate-400 dark:bg-dim rounded-full px-2 w-auto h-auto">
                <IoMedalOutline />
                Best Seller
              </span>
              <span className="flex items-center gap-1 text-white text-xs font-medium bg-slate-400 dark:bg-dim rounded-full px-2 w-auto h-auto">
                <IoCashOutline />
                Best Price
              </span>
              <span className="flex items-center gap-1 text-white text-xs font-medium bg-slate-400 dark:bg-dim rounded-full px-2 w-auto h-auto">
                <IoCar />
                Fast Delivery
              </span>
            </div>
            <div className="flex ps-4 text-dim dark:text-gray-400 font-semibold text-xl items-center">
              <span>{filterGoods[0].discountPercentage.toFixed(0)}% off</span>
            </div>
            <div className=" text-normal text-sm text-slate-400">
              <span className="flex items-center gap-1 font-bold text-sm text-dark dark:text-gray-200">
                <IoBus /> Free Shipping
              </span>
              <p className="flex ps-4 text-dim dark:text-gray-400">
                <b>Delivery: </b>
                <span className=" font-semibold">April 3rd-17th</span>
              </p>
            </div>
            <div className=" text-normal text-sm text-slate-400">
              <span className="flex items-center gap-1 font-bold text-sm text-dark dark:text-gray-200">
                <IoClipboardOutline /> Return Delivery
              </span>
              <p className="flex ps-4 text-dim dark:text-gray-400">
                <b>Returns between: </b>
                <span className=" font-semibold">April 3rd-17th</span>
              </p>
            </div>
          </div>
          <div className="security w-full h-auto rounded-2xl dark:bg-dark bg-white p-2">
            <span className="flex items-center gap-1 font-bold text-sm text-dark dark:text-gray-200">
              <IoShieldCheckmark /> Security & Privacy
            </span>
            <p className="text-dim dark:text-gray-400 text-sm font-normal">
              <b>Safe payments: </b>We do not share your personal details with
              any third partie without your consent.
            </p>
            <p className="text-dim dark:text-gray-400 text-sm font-normal">
              <b>Secure personal details:</b> We protect your privacy and keep
              your personal details safe and secure.
            </p>
          </div>
          <div className="seller w-full h-auto rounded-2xl dark:bg-dark bg-white p-2">
            <div className=" flex justify-between items-center items">
              <div className="seller-Logo -my-1 flex gap-2 items-center">
                <Image
                  src={Images.shop}
                  alt="user"
                  className="h-auto w-10 aspect-square max-md:w-12 rounded-full"
                  priority
                />
                <Link
                  href={"/shop?shopname="}
                  className=" font-bold text-dark dark:text-gray-200 text-base"
                >
                  Seller Name
                </Link>
              </div>
              <IoChevronForward className=" text-dark dark:text-gray-200 text-xl" />
            </div>
            <h1 className=" font-medium text-base ps-2 text-dark dark:text-gray-200">
              About shop owner
            </h1>
            <p className=" text-sm text-dim dark:text-gray-400 ps-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur nihil ea eligendi repellendus est quos corporis
              similique odit quis impedit error qui iste ratione,...
            </p>
          </div>
          <div className="reviews w-full h-auto dark:bg-dark bg-white rounded-3xl px-4 py-2">
            <h2 className="text-dark dark:text-gray-200 text-lg font-bold">
              Reviews
            </h2>
            <div className="w-full h-auto">
              <div className="flex flex-col py-2 gap-2">
                <div className="comments dark:bg-dim bg-gray-200 rounded-lg p-1">
                  <div className="flex gap-2">
                    <Image
                      src={Images.avatar}
                      alt="user"
                      className=" h-10 w-10 rounded-full"
                      priority
                    />
                    <div className=" flex flex-col dark:text-slate-400 text-dim">
                      <p className="text-sm font-medium">Oyetade kehinde</p>
                      <span className="flex items-center gap-1 -my-1 text-xs font-medium">
                        <IoTimeOutline /> 11:34pm
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-1 justify-center items-center">
                    <p className="text-sm text-dim dark:text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi aspernatur magni enim quas quam veritatis?
                    </p>
                    <Rating className="py-2" size={6} rate={4.5} />
                  </div>
                </div>
              </div>
              <form className=" w-full p-1 flex h-10 dark:bg-dim bg-slate-200 max-md:h-10 overflow-hidden rounded-full">
                <input
                  type="text"
                  name="subscription"
                  id="subscription"
                  className=" outline-none text-base w-full max-md:w-full max-md:text-lg caret-primary dark:caret-secondary px-2 bg-inherit placeholder:text-slate-400"
                  placeholder="comment"
                />
                <button
                  type="submit"
                  className=" rounded-3xl text-xs px-2 h-full w-auto text-white max-md:text-base dark:bg-secondary bg-primary font-bold "
                >
                  <IoPaperPlane size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
