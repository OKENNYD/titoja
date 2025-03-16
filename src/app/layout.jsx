import "./globals.css";
// import localFont from 'next/font/local'
import GlobalProvider from "@/_util/constants/context";
export const metadata = {
  title: "Titoja - Save Big, Live Well: Everyday Essentials at Unbeatable Prices (Shop Now!)",
  description: " Stretch your budget further with our incredible selection of everyday essentials at unbeatable prices. We offer high-quality products without compromising affordability. Shop now and save big!",
  icons: {
    icon: "/assets/img/icon.png"
  }
};
export default function RootLayout({ children, session}) {
//  const font = localFont({ src: '/assets/font/lucid.ttf' }) 
  return (
    <html lang="en" >
      <head></head>
      <body className={`bar bg-gray-100 select-none`}>
          <GlobalProvider>
            {children}
          </GlobalProvider>
      </body>
    </html>
  );
}