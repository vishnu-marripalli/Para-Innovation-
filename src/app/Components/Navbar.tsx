"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type NavLink = {
    label: string;
    href?: string;
    submenu?: { label: string; href: string }[];
};

const NAV_LINKS: NavLink[] = [
    {
        label: "Find Your Starter",
        submenu: [
            { label: "Kisan Mithraa Mobile Starter", href: "/AboutLinW" },
            { label: "Kisan Mithraa Remote Starter", href: "/AboutRemote" },
            // { label: "Kisan Mithraa Auto Starter", href: "/GlobalStarter" },
            // { label: "Kisan Mithraa Auto Starter", href: "/AutoStarter" },
        ],
    },
    {
        label: "Products",
        submenu: [
            { label: "Mobile Starters", href: "/ProductMobileStat" },
            { label: "Remote Starters", href: "/ProductRemoteStat" },
            // { label: "Auto Starters", href: "/about/leadership" },
            // { label: "Auto Starters", href: "/about/leadership" }
            // },
        ],
    },
    {
        label: "About Us",
        submenu: [
            { label: "People", href: "/ParaPeople" },
            { label: "Manufacturing", href: "/Manufacturing" },
            // { label: "Purpose", href: "/products/domestic" },
        ],
    },
    {
        label: "Support",
        submenu: [
            // { label: "Service Plans", href: "/components/support/page" },
            { label: "Installing & Maintaining", href: "/Installation" },
            { label: "Warranty & Guarantee Info", href: "/products/domestic" },
        ],
    },
    {
        label: "Contact Us",
        submenu: [
            { label: "Enquiry", href: "/contactUs" },
            { label: "Dealer Support", href: "/support" },
            { label: "Service Center", href: "/service" },
        ],
    },
];

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileMenu, setMobileMenu] = useState(false);

    // Close dropdown when clicking outside
    const dropdownRef = useRef<HTMLUListElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="w-full z-50  bg-white shadow-lg border-b border-gray-100">
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200">
                <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
                    <Link href="/parainnovation.com" className="flex items-center group">
                        <Image
                            src="/Para_logo.png"
                            alt="Kisan Mithraa Logo"
                            width={20}
                            height={50}
                            className="object-cover w-32 h-14 transition-transform group-hover:scale-105"
                            priority
                        />
                    </Link>

                    <div className="flex items-center space-x-6">
                        {/* Contact Information */}
                        <a
                            href="tel:+919032747058"
                            className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-colors group"
                        >
                            <div className="p-2 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                                <svg
                                    className="w-4 h-4 text-cyan-700"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-xs text-gray-500 font-medium">Call Us</div>
                                <div className="text-sm font-semibold">+91 90327 47058</div>
                            </div>
                        </a>
                        {/* Office Location */}
                        <a
                            href="https://www.google.com/maps/dir//Flat+number+102,+Amrutha+sai+residency,+Road+No.+3,+VR+Colony,+Kamala+Nagar,+Dilsukhnagar,+Hyderabad,+Telangana+500060/@17.3661846,78.4492078,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb99e1ac83d5a3:0xac200e63fe3b5212!2m2!1d78.5315488!2d17.3662143?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex  items-center space-x-2 text-slate-700 hover:text-blue-600 transition-colors group"
                        >
                            <div className="p-2 bg-red-50 rounded-full group hover:bg-red-100 transition-colors">
                                <svg
                                    className="w-4 h-4 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>

                            <div className="hidden sm:block">
                                <div className="text-xs text-gray-500 font-medium">Visit Us</div>
                                <div className="text-sm font-semibold">Hyderabad, India</div>
                            </div>
                        </a>




                        {/* Business Hours */}
                        <div className="hidden md:flex items-center space-x-2 text-slate-600">
                            <div className="p-2 bg-green-50 rounded-full">
                                <svg
                                    className="w-4 h-4 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12,6 12,12 16,14" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-medium">Business Hours</div>
                                <div className="text-sm font-semibold">Mon-Sun 9:30AM-7:00PM</div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
{/* Main Navigation */}
<div className="backdrop-blur-md bg-white/70 border-b border-gray-100 sticky top-0 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
    
    {/* Desktop Menu */}
    <ul className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
      {NAV_LINKS.map((link) =>
        link.submenu ? (
          <li
            key={link.label}
            className="relative"
            onMouseEnter={() => setOpenDropdown(link.label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className={`flex items-center space-x-1 px-4 py-2 text-gray-700 font-medium transition-all duration-200 rounded-md hover:text-blue-600 ${
                openDropdown === link.label ? "text-blue-600" : ""
              }`}
            >
              <span>{link.label}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === link.label ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <AnimatePresence>
              {openDropdown === link.label && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 mt-3 min-w-[220px] bg-white/90 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-lg z-50 flex flex-col py-2"
                >
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.label}
                      href={sublink.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-blue-50/60 rounded-lg transition-all duration-150"
                    >
                      <span>{sublink.label}</span>
                    </Link>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ) : (
          <li key={link.label}>
            <Link
              href={link.href || "#"}
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        )
      )}
    </ul>

    {/* CTA & Mobile */}
    <div className="flex items-center space-x-4">
      <Link href="/order" className="hidden sm:block">
        <button 
        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          Order Now
        </button>
      </Link>

      {/* Mobile Hamburger */}
      <button
        className="lg:hidden p-2 text-gray-700 hover:text-blue-600 rounded-md transition-colors"
        onClick={() => setMobileMenu((v) => !v)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {mobileMenu ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  </div>
</div>


            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-6 space-y-2">
                            {NAV_LINKS.map((link) =>
                                link.submenu ? (
                                    <div key={link.label} className="border-b border-gray-100 pb-4 last:border-b-0">
                                        <button
                                            className="w-full flex items-center justify-between py-3 px-4 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                            onClick={() =>
                                                setOpenDropdown(
                                                    openDropdown === link.label ? null : link.label
                                                )
                                            }
                                        >
                                            <span>{link.label}</span>
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <AnimatePresence>
                                            {openDropdown === link.label && (
                                                <motion.ul
                                                    initial={{ opacity: 0, y: -8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -8 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="mt-2 space-y-1"
                                                >
                                                    {link.submenu.map((sublink) => (
                                                        <li key={sublink.label}>
                                                            <Link
                                                                href={sublink.href}
                                                                className="flex items-center px-6 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors ml-4 flex items-center "
                                                                onClick={() => {
                                                                    setMobileMenu(false);
                                                                    setOpenDropdown(null);
                                                                }}
                                                            >
                                                                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3"></div>
                                                                {sublink.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.label}
                                        href={link.href || "#"}
                                        className="block py-3 px-4 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        onClick={() => setMobileMenu(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                            <div className="pt-4">
                                <Link href="/order" onClick={() => setMobileMenu(false)}>
                                    <button className="w-full px-6 py-3 bg-gradient-to-r from-black-600 to-black-700 text-white font-semibold rounded-lg hover:from-black-700 hover:to-black-800 transition-all duration-200 shadow-md">
                                        Get Quote
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;