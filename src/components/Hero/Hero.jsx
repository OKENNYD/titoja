import Announcement from "../Announcement/page";
import Brand from "../Brand/Brand";
import { FaChevronRight } from "react-icons/fa6";
import Bid from "../Card/Bid";
import Box from "../Card/Box";
import Carousel from "../Carousel/Carousel";
export default function Hero() {
  return (
    <div className="w-full h-fit aspect-video flex flex-col gap-2 px-14 max-md:px-4 py-2">
      <Announcement />
      <div className="w-full h-fit flex gap-2 max-md:flex-col-reverse">
        <div className="w-fit h-fit">
        <span className="font-normal max-md:text-base text-lg border-l-2 border-primary px-2">
          Special  
        </span>
        <div className="flex max-md:w-full h-auto flex-col max-md:flex-row gap-2 my-2">
          <Box title={"Mystery Box"} />
          <Box title={"Blind Box"} />
        </div>
      </div>
      <Carousel/>
      </div>
      <div className="w-full h-fit">
        <div className="flex px-2 justify-between text-base text-dim font-bold">
          <span className="font-normal max-md:text-base text-lg border-l-2 border-primary px-2">
            Bid
          </span>
          <FaChevronRight />
        </div>
        <div className="w-full flex gap-2 box-border h-fit overflow-x-scroll scroll-none">
          <Bid status={true} />
          <Bid status={false} />
          <Bid status={true} />
          <Bid status={false} />
          <Bid status={true} />
          <Bid status={false} />
        </div>
      </div>
      <Brand />
    </div>
  );
}
// import Carousel from "../Carousel/Carousel";
// import Bid from "../Card/Bid";
// import Box from "../Card/Box";
// import Announcement from "../Announcement/page";
// import { FaChevronRight } from "react-icons/fa6";
// export default function Hero() {
//   return (
//     <div className=" flex flex-col gap-2">
//       <Announcement />
//       <div className="w-full flex gap-4 max-md:flex-col-reverse">
//         <div className="w-fit h-fit">
//           <span className="font-semibold max-md:text-base text-xl border-l-2 border-primary px-2">
//             Special
//           </span>
//           <div className="flex flex-col max-sm:flex-row gap-2 my-2">
//             <Box title={"Mystery Box"} />
//             <Box title={"Blind Box"} />
//           </div>
//         </div>
//         <Carousel />
//       </div>
//       <div className="w-full h-fit">
//         <div className="flex px-2 justify-between text-base text-dim dark:text-gray-400 font-bold">
//           <span className="font-semibold max-md:text-base text-xl border-l-2 border-primary px-2">
//             Bids
//           </span>
//           <FaChevronRight />
//         </div>
//         <div className="w-full flex gap-2 overflow-x-scroll max-md:h-fit scroll-none p-2">
//           <Bid status={true} />
//           <Bid status={false} />
//           <Bid status={true} />
//           <Bid status={false} />
//           {/*<Bid status={true} />
//           <Bid status={false} /> */}
//         </div>
//       </div>
//     </div>
//   );
// }
