import Countries from "../../../_util/api/countriesData";
export const metadata = {
  title: "Titaoja - Shipping Address",
  description: "The address for which good that is been ordered is shipped to.",
};
export default function Address() {
  return (
    <main className="max-md:p-6 py-20 w-full h-full flex items-center justify-center">
      <div className=" w-[30%] bg-white rounded-2xl max-md:w-full h-auto py-6 px-6 ">
        <p className=" text-dim text-xl font-semibold text-center" >Shipping Addess</p>
        <form className=" flex flex-col pt-3 ">
          <div className="gap-4 flex flex-col">
          <div className="w-full">
            <select name="country"  className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-slate-600 pe-2 " >
            <option value="">--country--</option>
            {Countries.map((country,index) => (
              <option  key={index} value={country.countryNameEn}>{country.countryNameEn}</option>
            ))} 
          </select>
          </div>
            <div className=" w-full">
              <input type="text" name="contactName" placeholder="contact name" className="p-2 ps-4 border-primary outline-primary w-full h-10 font-medium caret-secondary text-base placeholder:text-slate-400 bg-slate-200 rounded-2xl text-black " />
            </div>
            <div className=" w-full">
              <input type="tel" name="mobileNumber" placeholder="Mobile Number" className="p-2 ps-4 border-primary outline-primary w-full h-10 font-medium caret-secondary text-base placeholder:text-slate-400 bg-slate-200 rounded-2xl text-black " />
            </div>
            <div className=" w-full">
              <input type="text" name="Street" placeholder="Street, house/apartment/unit" className="p-2 ps-4 border-primary outline-primary w-full h-10 font-medium caret-secondary text-base placeholder:text-slate-400 bg-slate-200 rounded-2xl text-black " />
            </div>
            <div className="w-full">
            <select name="country"  className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-slate-600 pe-2 " >
            <option value="">--state--</option>
            {Countries.map((country,index) => (
              <option  key={index} value={country.countryNameEn}>{country.countryNameEn}</option>
            ))} 
          </select>
          </div>
          <div className="w-full">
            <select name="country"  className="  p-2 ps-3 outline-primary w-full h-10 font-medium caret-secondary text-sm placeholder:text-slate-400 bg-slate-200 rounded-2xl text-slate-600 pe-2 " >
            <option value="">--city--</option>
            {Countries.map((country,index) => (
              <option  key={index} value={country.countryNameEn}>{country.countryNameEn}</option>
            ))} 
          </select>
          </div>
            <div className=" w-full">
              <input type="tel" name="zipCode" placeholder="Zip code" className="p-2 ps-4 border-primary outline-primary w-full h-10 font-medium caret-secondary text-base placeholder:text-slate-400 bg-slate-200 rounded-2xl text-black " />
            </div>
          </div>
          <button  type="submit" className=" my-1 bg-primary dark:bg-secondary w-full h-10 font-bold rounded-2xl text-sm text-white" >Submit</button>
        </form>
        <div className="inline-flex text-slate-500 text-xs font-thin w-full text-center justify-center items-center">
            <p>By continuing, you confirm that you are an adult and you have read and accepted our terms, Titaoja Membership Agreement and Privacy Policy.</p>
          </div>
      </div>
    </main >
  );
}
