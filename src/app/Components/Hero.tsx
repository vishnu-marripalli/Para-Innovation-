"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div
      className="flex flex-col justify-center items-start min-h-[500px] px-6 md:px-16 bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: "url('/hero.webp')" }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-semibold text-[#1C1C1C] leading-tight mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Innovating for a <br /> <span className="text-[#6BAF92]">Greener Future</span>
      </motion.h1>

      <motion.p
        className="text-gray-600 text-base md:text-lg max-w-lg mb-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        ParaInnovation delivers sustainable and efficient agricultural
        solutions through intelligent design and modern technology.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-start gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        <Link href="/order">
          <button className="px-8 py-3 text-lg font-medium rounded-full bg-[#6BAF92] text-white hover:bg-[#5EA785] transition-all duration-300">
            Explore Products
          </button>
        </Link>
        <Link href="/about">
          <button className="px-8 py-3 text-lg font-medium rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-300">
            Learn More
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
