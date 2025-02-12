import Image from 'next/image'
import Images from '@/_util/constants/images';
export default function Brand() {
  return (
        <div className="w-full py-2 max-md:h-12 h-20 Imgfilter flex gap-4 overflow-x-scroll scroll-none box-border">
          <Image src={Images.splash} className='w-auto h-full' alt="brand logo"/>
          <Image src={Images.splash} className='w-auto h-full' alt="brand logo"/>
          <Image src={Images.splash} className='w-auto h-full' alt="brand logo"/>
          <Image src={Images.splash} className='w-auto h-full' alt="brand logo"/>
          <Image src={Images.splash} className='w-auto h-full' alt="brand logo"/>
          <Image src={Images.splash} className='w-auto h-full' alt="brand logo"/>
          <Image src={Images.splash} className='w-auto h-full' alt="brand logo"/>
          <Image src={Images.splash} className='w-auto h-full' alt="brand logo"/>
          <Image src={Images.splash} className='w-auto h-full' alt="brand logo"/>    
          <Image src={Images.splash} className='w-auto h-full' alt="brand logo"/>
        </div>
  )
}
