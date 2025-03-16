"use client";
import Image from "next/image";
import Link from "next/link"
import { useState, useRef, useEffect, use } from "react";
import Images from "@/_util/constants/images";
import Rating from "@/components/Rate/Rate";
import { Plus, Minus, ChevronRight, Share, ChevronDown, BookmarkPlus, Bookmark, Globe2 } from "lucide-react";
import Tick from "@/components/Icon/Tick";
import Shield from "@/components/Icon/Shield";
import Product from "@/components/Card/Product";
export default function Data({ current, products }) {
  const image = "Product name";
   let [stockCount, setStockCount] = useState(1)
   let [liked, setLiked] = useState(false)
   let arrLoop = [Images.img_1,Images.img_2,Images.img_3,Images.img_4,Images.img_5]
   let [currentSrc, setCurrentSrc] = useState(arrLoop[0])
   let colorArr = [{title: "red", hex: "#ff0000"},{title: "blue", hex: "#00ff00"},{title: "green", hex: "#0000ff"},{title: "orange", hex: "#ff421"}]
   let [color,setColor] = useState(colorArr[0])
   let sizeArr = [42,43,44,45]
   let [size,setSize] = useState(sizeArr[0])
   let matArr = ["leather","cotton","wool"]
   let [material,setMaterial] = useState(matArr[0])
   let imgRef = useRef(null);
   let handleShare = () => {navigator.share().then(shr=>shr)}
  //  let [products, setProducts] = useState([]);
  //  useEffect(() => {
  //   fetch("/api/products")
  //   .then((res) => res.json())
  //   .then((data) => {
  //   setProducts(data)})})
   let formatter = new Intl.NumberFormat("en-ng", {
     style: "currency",
     currency: "NGN",
   });
  return (
    <div className="w-full px-14 max-md:px-2 py-2 h-auto flex gap-2 flex-col">
      <div className="w-full h-auto gap-2 flex max-md:flex-col">
        <div className="w-3/4 max-md:w-full h-auto flex flex-col gap-3">
          <div className=" w-full h-auto flex max-md:flex-col gap-2 max-md:gap-2 bg-white max-md:bg-transparent rounded-3xl p-2 max-md:p-0">
            <div className="flex w-4/6 max-md:w-full max-md:gap-1 box-border max-md:flex-col">
              <Image
                id="banner"
                src={currentSrc}
                alt="product img"
                className=" mx-auto w-5/6 max-md:w-full rounded-2xl max-md:rounded-xl aspect-square h-auto"
                priority
              />
              <div className="flex ps-2 max-md:ps-0 duration-1000 flex-col max-md:flex-row w-1/6 max-md:w-full max-md:h-20 gap-2 max-md:gap-1 max-md:overflow-x-scroll scroll-none">
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
            <div className="w-2/6 box-border max-md:w-full h-auto gap-2 max-md:px-0 max-md:pb-4 flex flex-col">
              <div className="">
                <p className="text-lg max-md:font-medium text-dim line-clamp-1">
                 {current.name}
                </p>
                <span className="text-dark text-base flex">
                  Brand: &nbsp;
                  <Link href={"/brand?name="} className="text-secondary">
                   {current.brand.name}
                  </Link>
                </span>
              </div>
              <div className="flex gap-2 flex-col">
                <div
                  className="font-normal text-xs text-dim flex justify-evenly gap-2">
                      <span
                        className=" text-[24px]  text-secondary font-semibold text-center"
                        onClick={() => {
                          setLiked(!liked);
                        }}
                      >
                        {liked ? (
                          <Bookmark className="fill-secondary text-secondary" strokeWidth={1} />
                        ) : (
                          <BookmarkPlus
                            strokeWidth={1}
                            title="Add to Mylist"
                            className="text-dark"
                          />
                        )}
                      </span>
                      <Share onClick={handleShare} className="text-dim hover:text-secondary" strokeWidth={1} title="Share on Socialmedia" />
                  </div>
              </div>
              <hr className="px-4 max-md:px-0" />
              <form className="flex flex-col max-md:gap-3 gap-1">
                <div className="max-md:gap-4 max-md:items-center box-border text-lg font-semibold">
                  <h3 className=" text-dim ">
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
                        className={`w-5 aspect-square h-auto accent-[${_.title}]-600 transition-colors duration-700`}
                      />
                    ))}
                  </div>
                </div>
                <div className="max-md:gap-4 max-md:items-center w-auto h-auto box-border text-lg font-semibold">
                  <h3 className=" text-dim">
                    Size: <span className=" opacity-60 text-base">{size}</span>
                  </h3>
                  <ul className="gap-2 max-md:gap-1 flex h-8 flex-row ">
                    {sizeArr.map((_, i) => (
                      <li
                        key={i}
                        onClick={() => setSize(_)}
                        className={`w-8 h-full bg-gray-200 p-2 text-sm flex justify-center items-center rounded-xl text-dim border-2 ${
                          size == _ && "border-primary"
                        }`}
                      >
                        {_}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="max-md:gap-4 max-md:items-center w-auto h-auto box-border text-lg font-semibold">
                  <h3 className="text-dim ">
                    Material:{" "}
                    <span className=" opacity-60 text-base">{material}</span>
                  </h3>
                  <ul className="gap-2 flex h-8 flex-row ">
                    {matArr.map((_, i) => (
                      <li
                        key={i}
                        onClick={() => setMaterial(_)}
                        className={`w-auto h-full bg-gray-200 p-2 text-sm flex justify-center items-center rounded-xl text-dim border-2 ${
                          material == _ && "border-primary"
                        }`}
                      >
                        {_}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="max-md:gap-4 max-md:items-center w-auto h-auto box-border text-lg font-semibold">
              <h3 className="text-dim">Plug:</h3>
              <div className="gap-2 flex h-8 flex-row ">
                <input type="radio" className="sr-only peer/42" name="color_blue" id="42" />
                <label htmlFor="42" className="w-8 h-full bg-gray-200 p-2 text-sm flex justify-center items-center peer-checked/42:border-primary rounded-xl text- border-2"><p>US</p></label>
                <input type="radio" className="sr-only peer/43" name="color_blue" id="43" />
                <label htmlFor="43" className="w-8 h-full bg-gray-200 p-2 text-sm flex justify-center items-center peer-checked/43:border-primary rounded-xl text-gray-400 border-2"><p>UK</p></label>
              </div>
            </div> */}
                <div className="max-md:gap-4 max-md:items-center w-auto h-auto box-border text-lg font-semibold">
                  <h3 className=" text-dim">Quantity:</h3>
                  <div className=" flex gap-2 items-center">
                    <div className=" p-1 w-fit h-8 gap-2 flex text-gray-600 items-center outline-0 border-0 bg-gray-200 rounded-full cursor-pointer ">
                      <span
                        onClick={(e) => {
                          stockCount == 0 ? removeEventListener("click"): setStockCount((prev) => prev - 1)
                        }}
                        className="p-1 text-white bg-primary rounded-full"
                      >
                        <Minus strokeWidth={1} size={20} />
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
                          stockCount >= products[0].rating.count ? setStockCount(products[0].rating.count) : setStockCount((prev) => parseInt(prev) + 1)
                          
                        }
                        className="text-white bg-primary rounded-full p-1"
                      >
                        <Plus strokeWidth={1} size={20} />
                      </span>
                    </div>
                    <span className="text-dim text-base text-center">
                      10 available
                    </span>
                  </div>
                </div>
                <hr className="my4 2max-md:my-2 max-md:px-0" />
                <div className="price w-full items-baseline flex gap-2 ">
                    <span className="-my-[2px] text-2xl font-semibold max-md:font-medium flex items-baseline text-dark">
                    {formatter.format(current.offers.price)}
                    </span>
                    <span className="-my-[2px] text-lg line-through flex items-baseline text-dim font-medium">{formatter.format(15000)}</span> 
                </div>
                <div className="w-full flex gap-2 px-2">
                  <button name="order now" className="mt-2 w-full py-1 font-bold border-2 border-dim rounded-full text-dim">
                    Order Now
                  </button>
                  <button name="add to cart" className="mt-2 w-full py-1 font-bold rounded-full text-white bg-primary">
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="description w-full h-auto bg-white rounded-2xl p-2">
              <p
                className="text-dark text-lg font-semibold"
              >
                Details
              </p>
              <div className="w-fill h-auto text-dim text-base">
                <span>{current.description}</span>
              </div>
          </div>
        </div>
        <div className="w-1/4 max-md:w-full h-auto flex flex-col gap-3">
          {/* <div className="discount w-full h-auto rounded-2xl bg-white p-2">
            <div className=" bg-secondary font-semibold flex items-center justify-between text-white pe-4 ps-2 rounded-lg py-2">
              <div className="flex gap-1 items-center">
                <Ticket strokeWidth={1} />
                <p>Discount & Coupon</p>
              </div>
              <ChevronRight strokeWidth={1} />
            </div>
            <div className=" p-2 flex flex-wrap gap-2">
              <span className="flex items-center gap-1 text-white text-xs font-medium bg-dim rounded-full px-2 w-auto h-auto">
                <Medal strokeWidth={1} />
                Best Seller
              </span>
            </div>
            <div className="flex ps-4 text-dim font-semibold text-xl items-center">
              <span>{Math.floor(Math.random() * 50).toFixed(0)}% off</span>
            </div>
            <div className=" text-normal text-sm text-400">
              <span className="flex items-center gap-1 font-bold text-sm text-dark">
                <Ship strokeWidth={1} /> Free Shipping
              </span>
              <p className="flex ps-4 text-dim">
                <b>Delivery: </b>
                <span className=" font-semibold">April 3rd-17th</span>
              </p>
            </div>
            <div className=" text-normal text-lg">
              <span className="flex items-center gap-1 font-bold text-sm text-dark">
                <ClipboardList /> Return Delivery
              </span>
              <p className="flex ps-4 text-dim">
                <b>Returns between: </b>
                <span className=" font-semibold">April 3rd-17th</span>
              </p>
            </div>
          </div> */}
          <div className="p-2 bg-white rounded-xl w-full gap-2 flex flex-col">
            <div className="w-full  gap-2 px-4 flex flex-col items-center justify-center">
              <div className="w-full flex flex-col items-center justify-center text-dim text-lg"></div>
              <p className=" -mt-2">{current.rating.count}</p>
              <div className="flex gap-1">
                <Rating size={25} rate={current.rating.rate} />
                <p className="text-sm text-dim">{current.rating.rate}</p>
              </div>
              <ul className="w-full flex flex-col gap-1">
                <li className="text-sm flex items-center">
                  1&nbsp;
                  <progress
                    className="w-full h-2.5 rounded-full bg-secondary accent-secondary"
                    min="0"
                    max="5"
                    value="1.2"
                  ></progress>
                  &nbsp;1.2
                </li>
                <li className=" text-sm flex items-center">
                  2&nbsp;
                  <progress
                    className="w-full h-2.5 rounded-full bg-secondary accent-secondary"
                    min="0"
                    max="5"
                    value="2.5"
                  ></progress>
                  &nbsp;2.5
                </li>
                <li className="text-sm flex items-center">
                  3&nbsp;
                  <progress
                    className="w-full h-2.5 rounded-full bg-secondary accent-secondary"
                    min="0"
                    max="5"
                    value="3.7"
                  ></progress>
                  &nbsp;3.7
                </li>
                <li className="text-sm flex items-center">
                  4&nbsp;
                  <progress
                    className="w-full h-2.5 rounded-full bg-secondary accent-secondary"
                    min="0"
                    max="5"
                    value="4.9"
                  ></progress>
                  &nbsp;4.9
                </li>
                <li className="text-sm flex items-center">
                  5&nbsp;
                  <progress
                    className="w-full h-2.5 rounded-full bg-secondary accent-secondary"
                    min="0"
                    max="5"
                    value="0.8"
                  ></progress>
                  &nbsp;0.8
                </li>
              </ul>
            </div>
            <ul>
              <li>Review ({current.review.length})</li>
            </ul>
            <div className="w-full h-auto gap-2 flex flex-col">
              {current.review.map((_,i)=>(
                <div key={i} className="comments bg-gray-200 rounded-lg p-2">
                  <div className="flex justify-between items-center text-dim ">
                    <div className="flex items-center gap-1">
                      <p className="text-base">{_.author}</p>
                      <Image
                        width={12}
                        height={10}
                        src="/assets/img/flags/ae.svg"
                        alt="flag"
                      />
                    </div>
                    <span className="flex items-center gap-1 -my-1 text-xs">
                      11:34pm
                    </span>
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <Rating
                      className="py-2"
                      size={15}
                      rate={(_.reviewRating.ratingValue + _.reviewRating.bestRating + _.reviewRating.worstRating)/3}
                    />
                    <p className="text-sm ">{_.reviewBody}</p>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
          <div className="security w-full h-auto rounded-2xl bg-white p-2">
            <span className="flex items-center gap-1 font-bold text-sm text-dark">
              <Shield/>Security & Privacy
            </span>
            <p className="text-dim text-sm font-normal">
              <b>Safe payments: </b>We do not share your personal details with
              any third partie without your consent.
            </p>
            <p className="text-dim text-sm font-normal">
              <b>Secure personal details:</b> We protect your privacy and keep
              your personal details safe and secure.
            </p>
          </div>
          <div className="seller w-full h-auto rounded-2xl  bg-white p-2">
              <div className="seller-Logo -my-1 flex gap-2 items-center">
                  <Image
                  src={Images.shop}
                  alt="user"
                  className="h-auto w-10 aspect-square max-md:w-12 rounded-full"
                  priority
                />
                <div className="w-full text-dim  flex flex-col mb-1">
                  <Link href={"/shop?shopname="} className="w-full flex gap-1 text-base justify-between items-center font-semibold">
                    <div className="flex gap-1 text-base items-center">
                      <p>Seller Name</p>
                      <Tick size={18}/>
                    </div>
                    <ChevronRight size={20} strokeWidth={2}/>
                  </Link>
                  <div className="w-full flex gap-0.5 text-base items-center justify-between">
                    <div className="flex gap-1 text-sm items-center">
                      <Globe2 size={15} strokeWidth={1}/>
                      <p>Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
            <ul className="w-full mx-auto flex items-center text-sm text-dim justify-around ">
                  <li className="inline-flex flex-col justify-center items-center">
                    <span>1k</span>
                    <p className="-mt-1">Followers</p>
                  </li>
                  <li className="inline-flex flex-col justify-center items-center">
                    <span>200+</span>
                    <p className="-mt-1">Sold</p>
                  </li>
                  <li className="inline-flex flex-col justify-center items-center">
                    <span>4.5</span>
                    <p className="-mt-1">Ratings</p>
                  </li>
                  <li>
                  <span className="w-fit px-2 rounded-full text-sm flex justify-center bg-secondary text-white">Follow</span>
                  </li>
                </ul>
          </div>
        </div>
      </div>
      <p className="font-semibold text-xl text-gray-600 text-center -py-2">
        Similar products
      </p>
      <div className="w-full h-fit flex-wrap flex border-collapse">
        {products?.map((_, i) => (  
                      <Product
                        src={_.image}
                        price={_.offers.price}
                        id={_.id}
                        ratings={current.rating.rate.toFixed(1)}
                        ratingsCount={current.rating.count}
                        title={_.name}
                        card={true}
                        key={i}
                      />
                    ))}
      </div>
      <div className="w-full items-center justify-center gap-2 flex py-4">
        <button name="show more" className=" text-base bg-primary dark:bg-secondary rounded-full text-white font-semibold px-4 py-1 flex gap-1 justify-center items-center">
          Show More
          <ChevronDown strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}