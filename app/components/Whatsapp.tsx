"use client";

import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/919073706968"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-[9999]
        bg-[#25D366]
        w-16
        h-16
        rounded-full
        flex
        items-center
        justify-center
        shadow-xl
        animate-bounce
        hover:scale-110
        transition
      "
    >
      <FaWhatsapp
        size={38}
        color="white"
      />
    </a>
  );
};

export default Whatsapp;