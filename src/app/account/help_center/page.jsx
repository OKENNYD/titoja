import Faq from '@/components/Card/Faq'
import Topic from '@/components/Card/Topic'
import { IoSearch, IoSearchSharp } from 'react-icons/io5'
export default function CustomerService() {
  return (
    <section className='flex flex-col gap-4 max-md:gap-2'>
      <div className="w-full dark:bg-dark bg-white rounded-xl h-fit py-2 px-4">
        <p className="font-bold text-xl text-dark dark:text-gray-200">Help Center</p>
      </div>
      <div className=" w-full dark:bg-dark bg-white h-auto rounded-xl p-4 max-md:p-2">
        <h1 className="font-bold text-dark dark:text-gray-200 text-center text-2xl max-md:text-xl">How can we help you?</h1>
        <form className='w-full flex justify-center mt-2 mb-4 max-md:mb-2'>
        <div className="h-10 w-3/5 max-md:w-full rounded-xl flex ">
          <input className="w-full h-full px-3 max-md:px-2 text-bold text-lg caret-secondary bg-gray-100 dark:bg-dim rounded-l-xl outline-none border-none" type="text" name="faq" placeholder="Search for questions.." />
          <button className='bg-secondary text-white font-semibold text-base px-3 rounded-r-xl' type="submit"> <IoSearchSharp /> </button>
        </div>
        </form>
        <div className="">
          <p className="text-lg font-semibold text-dark ps-2 py-1 dark:text-gray-200">Topics</p>
          <div className="w-full h-auto flex flex-col gap-3">
          <Topic/>
          <Topic/>
        </div>      
        </div>
        <div className="mt-3">
          <p className="text-lg font-semibold text-dark ps-2 py-1 dark:text-gray-200">Frequently Asked Questions</p>
          <div className="w-full h-auto flex flex-col gap-3">
          <Faq/>
          <Faq/>
        </div>      
        </div>
      </div>
    </section>
  )
}
