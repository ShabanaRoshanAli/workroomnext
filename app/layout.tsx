import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
     <ul>
       <li>
         <Link href="/examples/basic">Basic</Link>
       </li>
       <li>
         <Link href="/examples/getCellValue">Get Cell Value</Link>
       </li>
       <li>
         <Link href="/examples/getSelection">Get Selection</Link>
       </li>
       <li>
         <Link href="/examples/setCellValue">Set Cell Value</Link>
       </li>
     </ul>
        {children}
      </body>
    </html>
  );
}
