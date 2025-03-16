"use client"
import Order from '@/components/Card/Order';

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="timeline-date flex items-center gap-1.5"><div className=' size-4 rounded-full bg-slate-600'></div>{event.content}</div>
          <div className="timeline-content border-l-2 border-dark ml-2 pl-2 ">{event.date}</div>
        </div>
      ))}
    </div>
  );
};
export default function Orders() {
  const events = [
    { date: "2025-03-01", content: "Order placed" },
    { date: "2025-03-02", content: "Order confirmed" },
    { date: "2025-03-03", content: "Order shipped" },
    { date: "2025-03-05", content: "Order delivered" }
  ];
  return (
    <section className="w-full flex gap-2 max-md:flex-col py-1">
          <div className="w-3/5 max-md:w-full h-auto flex flex-col gap-2">
            <Order status={1} />
            <Order status={2} />
            <Order status={3} />
            <Order status={4} />
          </div>
          <div className="w-2/5 max-md:w-full h-fit rounded-xl bg-white p-2">
            <div className="w-full p-2">
          <h2 className="font-semibold text-lg text-dark">Order Timeline</h2>
          <Timeline events={events} />
            </div>
            <div className="w-full flex gap-2 mt-2">
              <button name='return order' className="w-1/2 rounded-full bg-secondary text-white text-base py-1.5">Return order</button>
              <button name='cancel order' className="w-1/2 rounded-full bg-gray-200 text-gray-400 text-base py-1.5">Cancel order</button>
            </div>
          </div>
    </section>
  );
}
