"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";

const urbanist = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/Urbanist-regular.ttf",
  weight: "900",
  style: "normal",
});

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/our-services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contactus" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-neutral-900 text-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="relative w-36 h-12 flex items-center">
          <Image
            src="/images/logo.png"
            alt="Muse & Hue Unisex Salon"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`${urbanist.className} hidden md:flex items-center gap-8 text-base tracking-wide`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative py-1 transition-colors duration-200 hover:text-[#F3E5AB]"
              >
                {link.name}
                {/* Active Gold Underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#D4AF37]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#D4AF37] hover:text-[#F3E5AB] focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`${urbanist.className} md:hidden bg-black border-b border-neutral-900 px-6 py-6 flex flex-col gap-5 text-center`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg transition-colors duration-200 ${
                  isActive ? "text-[#D4AF37] underline underline-offset-8" : "text-[#D4AF37]/80 hover:text-[#D4AF37]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}