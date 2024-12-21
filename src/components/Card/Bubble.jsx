export default function Bubble({sender}) {
    return (
        <div className={`w-5/6 flex flex-col gap-1 bg-slate-200 dark:bg-dark rounded-xl p-2 ${sender === "me" ? "place-self-start" : "place-self-end"}`}>
            <p className="text-sm text-dim dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur magni enim quas quam veritatis?</p>
            <span className={`w-full text-xs text-dim dark:text-gray-400 ${sender === "me" ? "text-left" : "text-right"} font-medium`}>11:34</span>
        </div>
    )
}
