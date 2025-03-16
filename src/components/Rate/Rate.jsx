"use client";
import { Star } from "lucide-react";
import { RatingStar } from "rating-star";
function RateStar() {
  return(
    <Star color="#fbbf24"/>
  )
}
export default function Rating({ rate, size }) {
  return (
    <div className="rating w-auto flex gap-1">
        <span className='h-auto w-auto -my-[10px] -ml-2'>
          <RatingStar rating={rate}
          starIcon={RateStar}
          size={size}
           maxScore={5}
           colors="#fbbf24"
           id={rate}/>
        </span>
    </div>
  );
}
