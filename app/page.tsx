import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider bg-gradient-to-r from-[#E5B548] via-[#F3CE6D] to-[#D89F30] bg-clip-text text-transparent uppercase mb-6">
        Welcome to Muse & Hue
      </h1>
      <p className="text-neutral-300 text-lg max-w-xl mb-8">
        Discover our premium salon services, craft your personal style, or schedule an appointment with us today.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/about"
          className="px-6 py-3 rounded-full border border-[#E5B548] text-[#E5B548] font-bold text-sm uppercase tracking-wider hover:bg-[#E5B548] hover:text-black transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/our-services"
          className="px-6 py-3 rounded-full border border-[#E5B548] text-[#E5B548] font-bold text-sm uppercase tracking-wider hover:bg-[#E5B548] hover:text-black transition-colors"
        >
          Our Services
        </Link>
        <Link
          href="/contactus"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-[#E5B548] via-[#F3CE6D] to-[#D89F30] text-neutral-950 font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}