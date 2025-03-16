"use client"
export default function Verification() {
  const getCode = async (formData) => {
    const data = {
      email: formData.get("email")
    }
    console.log(data);
}
   return (
     <main className="w-full h-dvh flex items-center justify-center">
       <div className="w-1/4 max-md:w-4/5 bg-white rounded-2xl h-auto p-6 max-md:px-2 max-md:my-4">
         <h3 className="text-dim  text-xl text-center">Email Verification</h3>
         <p className=" text-base font-normal break-words text-dim text-wrap">
           Enter your email to recover your account.
         </p>
         <form method="post" className="max-md:px-2 flex flex-col gap-4">
           <input
             type="email"
             name="email"
             id="email"
             placeholder="email"
             className=" p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-gray-400 bg-gray-200 rounded-full text-black "
           />
           <button
           name="send code"
             type="submit"
             className=" bg-primary w-full h-10 rounded-full text-base text-white"
           >
             Send code
           </button>
         </form>
         <div className="inline-flex text-dim text-xs font-thin w-full text-center justify-center items-center">
           <p>
             By continuing, you confirm that you are an adult and you have read
             and accepted our terms, Titoja Membership Agreement and Privacy
             Policy.
           </p>
         </div>
       </div>
     </main>
   );
  }
  