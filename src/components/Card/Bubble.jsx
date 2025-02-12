export default function Bubble({sender}) {
    return (
        <div className={`w-5/6 flex flex-col gap-1 bg-gray-200 rounded-xl p-2 ${sender === "me" ? "place-self-start" : "place-self-end"}`}>
            <p className="text-lg text-dim">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur magni enim quas quam veritatis?</p>
            <span className={`w-full text-xs text-dim ${sender === "me" ? "text-left" : "text-right"}`}>11:34</span>
        </div>
    )
}
