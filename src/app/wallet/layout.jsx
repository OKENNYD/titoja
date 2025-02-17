import Footer from "@/components/Footer/Footer";
import WalletHeader from "@/components/Header/WalletHeader";
export default function Layout({ children, Popup }) {
  return (
    <div className="w-full h-auto bg-gray-100">
      <WalletHeader />
      {children}
      <Footer />
    </div>
  );
}