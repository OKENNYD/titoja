"use client"
import { useState } from 'react'
import { IoAddCircleOutline, IoCreateOutline, IoTrashOutline } from 'react-icons/io5';
import { FaCcMastercard } from "react-icons/fa6";
export default function Payment() {
  let [isPayment, setIsPayment] = useState(true);
  return (
    <section className='flex flex-col gap-4 max-md:gap-2'>
      <div className="w-full dark:bg-dark bg-white rounded-xl h-fit py-2 px-4">
        <p className="font-bold text-xl text-dark dark:text-gray-200">Payments</p>
      </div>
      <div className=" w-full dark:bg-dark bg-white h-auto rounded-lg px-4 py-4">
        <h3 className="font-semibold text-xl dark:text-gray-200 text-dim">Cards</h3>
        <div className="flex max-md:flex-col gap-4 ">
            {isPayment ? <div className="card w-[324px] h-[204px] rounded-2xl bg-primary p-4 bg-opacity-60">
             <div className="w-full flex justify-between">
               <IoCreateOutline className="text-yellow-200 text-xl"/>  
              <IoTrashOutline className="text-red-600 text-xl"/> 
             </div>
              <FaCcMastercard className="float-right mt-5 text-slate-100 " size={40}/>
              <div className="w-full h-auto flex flex-col justify-center items-center">
                <span className="text-2xl text-center font-semibold text-gray-200 dark:text-gray-200">1234-5678-XXXX-XXXX</span>
                <p className="text-base dark:text-gray-400 text-dim font-medium">01/23</p>
              </div>
              <p className="text-lg dark:text-gray-200 font-semibold mt-4 text-gray-200">OYETADE KEHINDE DAVID</p>
            </div> : <p className="text-center dark:text-gray-200 text-slate-400 text-base font-medium">No card add</p>}
            
            <div className="card w-[324px] h-[204px] rounded-2xl bg-slate-200 dark:bg-dim flex flex-col justify-center items-center font-semibold text-base text-dim dark:text-gray-200">
                <IoAddCircleOutline className="text-3xl"/>
                <p>Add card</p>
            </div>
        </div>
      </div>
    </section>
  )
}
