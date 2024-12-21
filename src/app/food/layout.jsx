import Footer from "@/components/Footer/Footer";
import FoodHeader from "@/components/Header/FoodHeader";
export default function Layout({ children, Popup }) {
  return (
    <div className="w-full h-auto dark:bg-dim bg-gray-100">
      <FoodHeader />
      {children}
      {Popup}
      <Footer />
    </div>
  );
}