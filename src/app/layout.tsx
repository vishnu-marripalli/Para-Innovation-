import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


export const metadata: Metadata = {
  title: "Para Innovation | Smart Solutions for Smarter Farming",
  description: "Empowering farmers with smart irrigation automation technology.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="">
      <Navbar />
      
    
      {children}

      <Footer />
      </body>
    </html>
  );
}
