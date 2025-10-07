"use client";
import Link from "next/link";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { href: "https://x.com/Linkwinnovation?t=j6Tq6aCHtk_ggIfRBK8w-Q&s=09", icon: <Twitter size={24} /> },
    { href: "https://www.instagram.com/kisan_mithraa/", icon: <Instagram size={24} /> },
    { href: "https://www.facebook.com/people/Linkw-Innovations/61563942219794/", icon: <Facebook size={24} /> },
    { href: "https://www.linkedin.com/company/ams-technotronics/?originalSubdomain=in", icon: <Linkedin size={24} /> },
  ];

  return (
    <footer className="bg-white text-gray-800 py-12 px-6 lg:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <Link href="/">
            <span className="text-2xl font-bold text-[#6BAF92]">Para Innovation</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            We craft innovative and affordable tech solutions that make a difference.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-gray-900 font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/aboutUs" },
              { name: "Features", href: "/features" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact Us", href: "/contactUs" },
              { name: "Order Now", href: "/order" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-green-600 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-gray-900 font-semibold mb-4">Contact</h2>
          <p className="text-sm mb-2">
            <a href="tel:+919032747058" className="hover:text-green-600 transition-colors">
              +91-90327 47058
            </a>
          </p>
          <p className="text-sm mb-2">
            <a href="mailto:team@parainnovation.com" className="hover:text-[#5EA785] transition-colors">
              team@parainnovation.com
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-gray-900 font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 hover:bg-[#5EA785] hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; 2025 <Link href="/"><span className="hover:text-green-600 transition-colors">Para Innovation</span></Link>. All Rights Reserved.
      </div>
    </footer>
  );
}
