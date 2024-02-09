import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
// import localFont from 'next/font/local'
 
// // Font files can be colocated inside of `app`
// const myFont = localFont({
//   src: [
//     {
//       path: './font/Satoshi-Light.woff2',
//       weight: '300',
//       style: 'light',
//     },
//     {
//       path: './font/Satoshi-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './font/Satoshi-Medium.woff2',
//       weight: '500',
//       style: 'medium',
//     },
//     {
//       path: './font/Satoshi-Bold.woff2',
//       weight: '700',
//       style: 'bold',
//     },
//     {
//       path: './font/Satoshi-Black.woff2',
//       weight: '900',
//       style: 'extra-bold',
//     },
//   ],
//   display: 'swap',
// })

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata = {
  title: 'E-commercce',
  description: 'Come here and learn more about Family Guy!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={jetbrains.className}>
        <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow"> {children}</main>
        <Footer/>
        </div>
        
        </body>
    </html>
  );
}
