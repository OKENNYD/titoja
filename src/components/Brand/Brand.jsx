import Image from 'next/image'
import Images from '@/_util/constants/images';
export default function Brand() {
  return (
    <div className='py-2'> 
        <div className="w-full h-12 max-md:h-8 Imgfilter flex gap-4 overflow-x-scroll scroll-none box-border">
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
    </div>
  )
}
