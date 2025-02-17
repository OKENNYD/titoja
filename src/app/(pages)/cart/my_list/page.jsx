import { ChevronRight, ChevronLeft } from "lucide-react";
import Product from "@/components/Card/Product";
import images from "@/_util/constants/images";
import products from "@/_util/api/products";
import Loader from "@/components/Card/Loader";
export default function My_List() {
  return (
    <div className="w-full h-auto pt-2">
      <div className="w-full h-fit flex-wrap gap-1 flex">
        {products?.map((_p, j) => {
          return (
            <Product
              src={images.img_3}
              price={_p.offers.price}
              url={_p.url}
              id={_p.mpn}
              discount={10}
              ratings={_p.rating.rate}
              ratingsCount={_p.rating.count}
              title={_p.name}
              key={j}
            />
          );
        }) || <Loader />}
      </div>
      <div className="w-full bg-white rounded-full p-2 h-fit text-lg flex items-center justify-between gap-3 text-dim my-2">
        <ChevronLeft strokeWidth={2} className="text-secondary hover:bg-opacity-70 hover:bg-secondary hover:text-white rounded-full"/>
        <ul className="flex gap-2 text-base font-medium">
          <li className="hover:text-primary">1</li>
          <li className="hover:text-primary">2</li>
          <li className="hover:text-primary">3</li>
          <li className="hover:text-primary">4</li>
          <li className="hover:text-primary">5</li>
        </ul>
        <ChevronRight strokeWidth={2} className="text-secondary hover:bg-opacity-70 hover:bg-secondary hover:text-white rounded-full"/>
      </div>
    </div>
  );
}
