"use client"

export default function Verification() {
  const getCode = async (formData) => {
    const data = {
      email: formData.get("email")
    }
    console.log(data);
}
   return (
     <main className="max-md:p-6 w-full pb-48 pt-20 h-full flex items-center justify-center">
       <div className="w-[30%] max-md:w-4/5 bg-white rounded-2xl h-auto py-6 px-6">
         <h3 className="text-dim  text-xl font-bold text-center"></h3>
         <p className=" text-base font-normal break-words text-dim text-wrap">
           Enter the 6.
         </p>
         <form method="post" className=" max-md:px-2 flex flex-col gap-4 mt-2 ">
           <input
             type="email"
             name="email"
             id="email"
             placeholder="email"
             className=" p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-gray-400 bg-gray-200 rounded-2xl text-black "
           />
           <button
             type="submit"
             className=" bg-primary w-full h-9 font-bold rounded-2xl text-sm text-white"
           >
             Send code
           </button>
         </form>
         <div className="inline-flex text-gray-400 text-xs font-thin w-full text-center justify-center items-center">
           <p>
             By continuing, you confirm that you are an adult and you have read
             and accepted our terms, Titaoja Membership Agreement and Privacy
             Policy.
           </p>
         </div>
       </div>
     </main>
   );
  }
  