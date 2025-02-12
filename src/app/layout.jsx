import "./globals.css";
import GlobalProvider from "@/_util/constants/context";
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from 'next-themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: "Titoja - Save Big, Live Well: Everyday Essentials at Unbeatable Prices (Shop Now!)",
  description: " Stretch your budget further with our incredible selection of everyday essentials at unbeatable prices. We offer high-quality products without compromising affordability. Shop now and save big!",
  icons: {
    icon: "/assets/img/icon.png"
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="bar bg-gray-100 select-none">
        <SessionProvider>
          <ThemeProvider attribute="class">
          <GlobalProvider>
            <ToastContainer />
            {children}
          </GlobalProvider>
        </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}