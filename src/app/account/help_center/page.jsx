import Faq from '@/components/Card/Faq'
import Topic from '@/components/Card/Topic'
export default function HelpCenter() {
  let faqs = [
      {
        "question": "How can I track my order?",
        "answer": "You can track your order by logging into your account and visiting the 'My Orders' section. Click on the order you want to track and you will see the tracking information."
      },
      {
        "question": "What payment methods are accepted?",
        "answer": "We accept various payment methods including credit/debit cards, PayPal, and AliPay. You can choose your preferred payment method at checkout."
      },
      {
        "question": "How do I return an item?",
        "answer": "To return an item, go to 'My Orders', select the item you want to return, and click on 'Return Item'. Follow the instructions provided to complete the return process."
      },
      {
        "question": "How can I contact customer service?",
        "answer": "You can contact our customer service team through the 'Contact Us' page on our website. You can also reach us via email or phone."
      },
      {
        "question": "What is the estimated delivery time?",
        "answer": "The estimated delivery time varies depending on your location and the shipping method selected. You can find the estimated delivery time for your order in the 'My Orders' section."
      }
    ]
  return (
    <section className='flex flex-col gap-2'>
      <div className="w-full bg-white rounded-2xl h-fit py-2 px-4">
        <p className="font-semibold text-lg text-dark">Help Center</p>
      </div>
      <div className=" w-full bg-white h-auto rounded-2xl p-4 max-md:p-2">
        <h1 className="font-semibold text-dim text-center text-lg">Frequently Asked Questions</h1>
        <div className="w-full h-auto flex flex-col gap-2 mt-2">
          {faqs.map((faq, index) => (
            <Faq key={index} question={faq.question} answer={faq.answer}/>
          ))}     
        </div>
      </div>
    </section>
  )
}
