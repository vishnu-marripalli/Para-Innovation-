"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Smartphone, ShieldCheck, Settings } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const features: Feature[] = [
  {
    icon: <Smartphone size={36} className="text-[#6BAF92]" />,
    title: "Easy Mobile Control",
    description:
      "Control your motors directly from your smartphone. Simple, intuitive, effortless.",
    buttonText: "Learn More",
  },
  {
    icon: <ShieldCheck size={36} className="text-[#6BAF92]" />,
    title: "Premium Quality Assured",
    description:
      "Built with high-grade materials for maximum durability and reliability.",
    buttonText: "View Quality",
  },
  {
    icon: <Settings size={36} className="text-[#6BAF92]" />,
    title: "Professional Installation",
    description:
      "Certified technicians ensure your starter is fully configured and operational.",
    buttonText: "Schedule Now",
  },
];

export default function AboutStarters() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F9FAF9] py-20 px-6 md:px-16 font-sans"
    >
      {/* Section Header */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1C1C1C]">
          Kisan Mithraa Starters
        </h2>
        <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
          High-quality, robust, and reliable mobile starters and motors for
          Domestic, Industrial, and Agricultural markets.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white p-8 rounded-3xl flex flex-col gap-6 items-start group"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{
              y: -8,
              boxShadow: `0 12px 24px rgba(107,175,146,0.25),
                          0 24px 48px rgba(94,167,133,0.2),
                          0 36px 72px rgba(107,175,146,0.15)`,
              scale: 1.03,
            }}
          >
            {/* Icon with animated background circle */}
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#6BAF92]/30 to-[#5EA785]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {feature.icon}
            </div>

            <h3 className="text-2xl font-semibold text-[#1C1C1C]">
              {feature.title}
            </h3>
            <p className="text-gray-600 flex-1">{feature.description}</p>
            <button className="mt-auto px-6 py-2 rounded-full bg-[#6BAF92] text-white font-medium hover:bg-[#5EA785] transition-colors duration-300 transform group-hover:scale-105">
              {feature.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
