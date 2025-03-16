"use client"
import { useState } from 'react'
import { Plus, Pen, Trash } from 'lucide-react';
export default function Payment() {
  let [isPayment, setIsPayment] = useState(true); 
  return (
    <section className='flex flex-col gap-2'>
      <div className="w-full bg-white rounded-2xl h-fit py-2 px-4">
        <p className="font-bold text-xl text-dark">Payments</p>
      </div>
      <div className=" w-full  bg-white h-auto rounded-2xl px-4 py-4 max-md:py-2">
        <h3 className="font-semibold text-lg text-dim">Cards</h3>
        <div className="flex max-md:flex-col gap-4 ">
            {isPayment ? <div className="card w-[324px] max-md:w-full h-[204px] rounded-2xl bg-primary p-4 bg-opacity-60">
             <div className="w-full flex justify-between pb-4">
               <Pen size={20} className="text-yellow-600"/>  
              <Trash size={20} className="text-red-600"/> 
             </div>
              <div className="w-full h-auto flex flex-col justify-center items-center">
                <span className="text-2xl text-center font-semibold text-gray-200">1234-5678-XXXX-XXXX</span>
                <p className="text-base text-dim font-medium">01/23</p>
              </div>
              <p className="text-lg font-semibold mt-4 text-gray-200">OYETADE KEHINDE DAVID</p>
            </div> : <p className="text-center  text-slate-400 text-base font-medium">No card add</p>}
            
            <div className="card w-[324px] h-[204px] rounded-2xl bg-slate-200  flex flex-col justify-center items-center font-semibold text-base text-dim">
                <Plus strokeWidth={1} className="text-3xl"/>
                <p>Add card</p>
            </div>
        </div>
      </div>
    </section>
  )
}
