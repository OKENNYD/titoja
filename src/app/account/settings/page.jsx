import { PenLine, Trash } from 'lucide-react'
import Languages from '@/components/Languages/Languages';
import Country from '@/components/Country/Country';
export default function Settings() {
  return (
    <section className="flex flex-col gap-2">
      <div className="w-full bg-white rounded-2xl h-fit py-2 px-4">
        <p className="font-semibold text-lg text-dark">
          Settings
        </p>
      </div>
      <div className="p-4 flex flex-col gap-2 bg-white rounded-2xl w-full h-auto ">
        <div className="Profile flex items-center gap-1 text-base">
          <PenLine strokeWidth={1.5} size={20}/>
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
              <Country sty="w-auto text-dim text-base outline-none bg-transparent" />
            </div>
          </div>
          <div className="country">
            <p className="font-semibold  text-dim">
              Language
            </p>
            <div className="py-2">
              <Languages sty=" w-auto text-dim text-lg outline-none" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="delivery_address flex items-center gap-1 text-base">
            <PenLine size={20} strokeWidth={1.5} />
            <p className="font-semibold text-base text-dim">
              Delivery Address
            </p>
          </div>
          <div className="shipping_address flex items-center gap-1 text-base">
            <PenLine size={20} strokeWidth={1.5} />
            <p className="font-semibold text-base text-dim">
              Shipping Address
            </p>
          </div>
        </div>
        <div className="payment flex items-center gap-1 text-base">
          <PenLine size={20} strokeWidth={1.5} />
          <p className="font-semibold text-base text-dim">
            Payment information
          </p>
        </div>
        <form className="user_delete text-red-800 text-base font-medium">
          <button name='delete' type="submit" className="inline-flex items-center gap-1">
            <Trash strokeWidth={1.5} size={20} /> <p>Delete Account</p>
          </button>
        </form>
      </div>
    </section>
  );
}
