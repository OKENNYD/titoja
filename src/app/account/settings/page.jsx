import { IoPencil, IoTrash } from 'react-icons/io5'
import Toggle from "@/components/Toggle/Theme";
import Languages from '@/components/Languages/Languages';
import Country from '@/components/Country/Country';
export default function Settings() {
  return (
    <section className="flex flex-col gap-4 max-md:gap-2">
      <div className="w-full bg-white rounded-xl h-fit py-2 px-4">
        <p className="font-bold text-xl text-dark">
          Settings
        </p>
      </div>
      <div className="p-4 mt-4 bg-white rounded-lg w-full h-auto ">
        <div className="Profile flex items-center gap-1 text-base">
          <IoPencil />
          <p className="font-semibold text-base text-dim">
            Personal information
          </p>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="country">
            <p className="font-semibold text-base text-dim">
              Country
            </p>
            <div className="py-2">
              <Country sty="w-auto text-dim text-base font-normal outline-none bg-transparent" />
            </div>
          </div>
          <div className="country">
            <p className="font-semibold text-base text-dim">
              Language
            </p>
            <div className="py-2">
              <Languages sty=" w-auto text-dim text-base normal outline-none" />
            </div>
          </div>
        </div>
        <div className="shipping_address">
          <p className="font-semibold text-base text-dim">
            Theme
          </p>
          <div className="flex gap-2 items-center py-2">
            <p className="text-base text-dim">Light</p>
            <Toggle />
            <p className="text-base text-dim">Dark</p>
          </div>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="delivery_address flex items-center gap-1 text-base">
            <IoPencil />
            <p className="font-semibold text-base text-dim">
              Delivery Address
            </p>
          </div>
          <div className="shipping_address flex items-center gap-1 text-base">
            <IoPencil />
            <p className="font-semibold text-base dark:text-gray-400 text-dim">
              Shipping Address
            </p>
          </div>
        </div>
        <div className="payment flex items-center gap-1 text-base">
          <IoPencil />
          <p className="font-semibold dark:text-gray-400 text-dim">
            Payment information
          </p>
        </div>
        <form className="user_delete text-red-800 text-base font-medium">
          <button type="submit" className="inline-flex items-center gap-1">
            {" "}
            <IoTrash /> <p>Delete Account</p>
          </button>
        </form>
      </div>
    </section>
  );
}
