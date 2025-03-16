"use client"
import { Search, Clipboard } from 'lucide-react'
import { useState } from 'react'
export default function Review() {
  let [isReview, setIsReview] = useState();
  return (
    <section className='flex flex-col gap-2'>
      <div className="w-full bg-white rounded-2xl h-fit py-2 px-4">
        <p className="font-semibold text-lg text-dark">Reviews</p>
      </div>
      <div className=" w-full bg-white h-auto rounded-2xl px-4 py-4">
      
      </div>
    </section>
  )
}
