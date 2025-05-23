import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "../component/header/Header";
import Footer from "../component/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JP Recondition Cars",
  description: "Your one-stop solution for Japanese reconditioned cars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat`}
      >
        <div className="absolute inset-0  backdrop-blur-sm -z-10" />
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
