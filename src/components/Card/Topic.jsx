import { FaChevronRight } from 'react-icons/fa6';
export default function Faq() {
  return (
    <details className="w-full marker:hidden trans-3 dark:bg-dim bg-slate-200 h-fit rounded-lg ">
      <summary className="flex h-10 w-full px-3 py-2 justify-between items-center transition-all">
        <div className="flex gap-2 items-center">
          <FaChevronRight className="text-base dark:text-gray-200 text-dim" />
          <p className="font-semibold dark:text-gray-200 text-dim">Topic Stays Here</p>
        </div>
      </summary>
      <div className="px-3 pb-2">
        <p className="text-dim z-20 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque! Voluptatem, officia adipisci iure optio voluptates rerum asperiores dignissimos incidunt expedita, praesentium cumque aliquid perferendis beatae sequi, itaque quisquam at!
        </p>
      </div>
    </details>
  )
}
