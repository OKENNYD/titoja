import AuthHeader from "@/components/Header/AuthHeader";
export const metadata = {
  title: "Titaoja - Authetication",
  description: "Authetication",
};
export default function Layout({ children }) {
  return (
    <div className=" bg-gray-200 bar">
      <AuthHeader />
      {children}
      <footer className="max-md:p-2 bg-white w-full h-auto flex justify-center items-center">
        <div className="w-full max-md:flex-col-reverse gap-4 max-md:gap-2 max-md:justify-start h-auto font-normal text-lg flex justify-center items-center m-2 py-2 px-16 max-md:px-4 ">
          <ol className=" inline-flex text-sm list-none flex-wrap text-dim ">
            <li className=" text-nowrap">Terms and Conditions</li>
            <li className=" text-nowrap">Transaction Service Agreement</li>
            <li className=" text-nowrap">Privacy Policy</li>
            <li className=" text-nowrap">Sitemap</li>
            <li className=" text-nowrap">Terms of Us </li>
            <li className=" text-nowrap">&copy;2024 Splash. All rights reserved</li>
          </ol>
        </div>
      </footer>
    </div>
  );
}
