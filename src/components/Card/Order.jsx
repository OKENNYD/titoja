import images from '@/_util/constants/images'
import Image from 'next/image'
import React from 'react'

export default function Order({amount, price, name, status}) {
  let formatter = new Intl.NumberFormat("en-ng", {
    style: "currency",
    currency: "NGN",   
  });
  return (
    <div className='w-full h-32 bg-white p-1 flex rounded-xl'>
        <Image alt="" src={images.img_3} className='aspect-square h-full w-auto rounded-lg'/>
        <div className="px-1 w-full">
            <p className="text-lg line-clamp-1 text-dim">Okennyd product eleven</p>
            <div className="flex gap-2 float-right mr-2 text-dim items-center">
              <div className="flex gap-1 text-base max-md:text-sm bg-gray-100 rounded-lg px-2 py-1 items-center">
                <p>2</p>x
                <span>{formatter.format(1500)}</span>
              </div>
              <p className="text-lg">{formatter.format(1500)}</p>
            </div>
            <span className="text-sm text-dim">Order ID: 1234567890</span>
            {status == 1 ? <div className="px-2 w-fit h-auto py-1 text-xs bg-green-500 rounded-full text-white"><p>Delivered</p></div> : ( status ==2 ? <div className="px-2 w-fit h-auto py-1 text-xs bg-red-500 rounded-full text-white"><p>Cancelled</p></div> : ( status ==3 ? <div className="px-2 w-fit h-auto py-1 text-xs bg-blue-500 rounded-full text-white"><p>Shipped</p></div> : ( status == 4 ? <div className="px-2 w-fit h-auto py-1 text-xs bg-orange-500 rounded-full text-white"><p>Processing</p></div> : null)))}
            </div> 
    </div>
  )
}
