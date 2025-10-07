import Image from "next/image";
import HeroSection from "./Components/Hero";
import AboutStarters from "./Components/AboutStarters";
import Order from "./Components/Homeproduct";

export default function Home() {
  return (
   <>
   <HeroSection />
   <AboutStarters />
   <Order />
   </>
  );
}
