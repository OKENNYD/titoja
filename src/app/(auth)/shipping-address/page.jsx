import Countries from "../../../_util/api/countriesData";
export const metadata = {
  title: "Titaoja - Shipping Address",
  description: "The address for which good that is been ordered is shipped to.",
};
export default function Address() {
  return (
    <main className="py-20 w-full h-full flex items-center justify-center">
      <div className="w-1/4 max-md:w-4/5 bg-white rounded-2xl h-auto p-6 max-md:px-2 max-md:my-4">
        <p className="text-dim text-xl font-medium text-center mb-4" >Shipping Address</p>
        <form className="max-md:px-2 flex flex-col gap-4">
          <div className="gap-4 flex flex-col">
          <div className="w-full">
            <select name="country"  className="p-2 ps-3 outline-primary w-full h-10 caret-secondary text-base bg-gray-200 rounded-full text-dim pe-2 " >
            <option value="">--country--</option>
            {Countries.map((country,index) => (
              <option  key={index} value={country.countryNameEn}>{country.countryNameEn}</option>
            ))} 
          </select>
          </div>
            <div className=" w-full">
              <input type="text" name="contactName" placeholder="contact name" className="p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-gray-400 bg-gray-200 rounded-full text-dim " />
            </div>
            <div className=" w-full">
              <input type="tel" name="mobileNumber" placeholder="Mobile Number" className="p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-gray-400 bg-gray-200 rounded-full text-dim " />
            </div>
            <div className=" w-full">
              <input type="text" name="Street" placeholder="Street, house/apartment/unit" className="p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-gray-400 bg-gray-200 rounded-full text-dim " />
            </div>
            <div className="w-full">
            <select name="country"  className="  p-2 ps-3 outline-primary w-full h-10 caret-secondary text-base bg-gray-200 rounded-full text-dim pe-2 " >
            <option value="">--state--</option>
            {Countries.map((country,index) => (
              <option  key={index} value={country.countryNameEn}>{country.countryNameEn}</option>
            ))} 
          </select>
          </div>
          <div className="w-full">
            <select name="country"  className="  p-2 ps-3 outline-primary w-full h-10 caret-secondary text-base bg-gray-200 rounded-full text-dim pe-2 " >
            <option value="">--city--</option>
            {Countries.map((country,index) => (
              <option  key={index} value={country.countryNameEn}>{country.countryNameEn}</option>
            ))} 
          </select>
          </div>
            <div className=" w-full">
              <input type="tel" name="zipCode" placeholder="Zip code" className="p-2 ps-4 border-primary outline-primary w-full h-10 caret-secondary text-base placeholder:text-gray-400 bg-gray-200 rounded-full text-black " />
            </div>
          </div>
          <button
          name="submit"  type="submit" className=" my-1 bg-primary w-full h-10 font-medium rounded-full text-base text-white" >Submit</button>
        </form>
        <div className="inline-flex text-gray-400 text-xs w-full text-center justify-center items-center">
            <p>By continuing, you confirm that you are an adult and you have read and accepted our terms, Titaoja Membership Agreement and Privacy Policy.</p>
          </div>
      </div>
    </main >
  );
}
