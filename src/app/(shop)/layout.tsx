import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// import "./globals.css";

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
        <main className="flex-grow"> {children}</main>
        </div>
        
        </body>
    </html>
  );
}
