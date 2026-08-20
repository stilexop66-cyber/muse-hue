import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[380px] md:h-[480px] overflow-hidden bg-black">
      {/* Hero Background Image */}
      <Image
        src="/images/contact-hero.jpg" // Replace with your image path
        alt="Contact Us Hero"
        fill
        className="object-cover object-center"
        priority
      />
    </section>
  );
}