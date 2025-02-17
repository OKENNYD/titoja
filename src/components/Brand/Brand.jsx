import Image from 'next/image'
import Images from '@/_util/constants/images';
export default function Brand() {
  return (
        <div className="w-full py-2 h-16 max-md:h-14 Imgfilter flex gap-4 overflow-x-scroll scroll-none box-border max-md:px-2">
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
