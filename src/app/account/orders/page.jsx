"use client"
import Order from '@/components/Card/Order';
export default function Orders() {
  return (
    <section className="flex flex-col gap-2">
      <div className="w-full bg-white rounded-2xl h-fit py-2 px-4">
        <p className="font-semibold text-xl text-dark">Orders</p>
      </div>
      <div className=" w-full h-auto">
        <section className='flex gap-2'>
          <div className="w-1/2 h-auto">
            <Order status={1} />
          </div>
          <div className="w-1/2 h-auto rounded-xl bg-white p-2">
            <div className="w-full h-auto aspect-square rounded-lg bg-gray-100">
            </div>
            <div className="w-full flex gap-2 mt-2">
              <button name='return' className="w-1/2 rounded-full bg-secondary text-white text-base py-1.5">Return order</button>
              <button name='cancel' className="w-1/2 rounded-full bg-gray-200 text-gray-400 text-base py-1.5">Cancel order</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
