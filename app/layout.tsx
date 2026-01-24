import type { Metadata } from "next";
import { EB_Garamond, Geist, Geist_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Footermain from "./Components/Footer/Footermain";

import { Toaster } from "react-hot-toast";



const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-ebGaramond",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Indonesia Art Market",
  description: "Indonesia Art Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} ${ebGaramond.variable}`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <Footermain/>

        <Toaster position="top-right" reverseOrder={false}/>
      </body>
    </html>
  );
}
