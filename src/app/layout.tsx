import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  
} from '@clerk/nextjs';
import Banner from "@/components/globalcomponents/Banner/Banner";
import Footer from "@/components/globalcomponents/Footer/Footer";
import Navbar from "@/components/globalcomponents/Navbar/Navbar";


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
    <ClerkProvider>
    <html lang="en">
      <body>
        <Banner/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  </ClerkProvider>
  );
}



