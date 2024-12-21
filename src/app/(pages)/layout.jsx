import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// export const metadata = {
//   title: "Salepex",
//   description: "Generated by create next app",
// };

export default function Layout({ children, modal }) {
  return (
      <div className=" ">
        <Header/>
        {children}
        {modal}
        <Footer/>
      </div>
  );
}