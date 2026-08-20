"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-neutral-800 text-white">
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

        {/* Links to Separate Routes */}
        <nav className="flex items-center gap-8 text-sm font-semibold tracking-wider uppercase">
          <Link
            href="/about"
            className="hover:text-[#E5B548] transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            href="/our-services"
            className="hover:text-[#E5B548] transition-colors duration-200"
          >
            Our Services
          </Link>
          <Link
            href="/contactus"
            className="hover:text-[#E5B548] transition-colors duration-200"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}