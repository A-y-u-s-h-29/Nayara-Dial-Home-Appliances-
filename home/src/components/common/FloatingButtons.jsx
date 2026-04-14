import React, { useState, useEffect } from "react";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I need a home service. Please help.");
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
      }`}
    >
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="group relative bg-[#25D366] hover:bg-[#20b859] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        aria-label="WhatsApp"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
          WhatsApp
        </span>
      </button>

      {/* Phone Button */}
      <button
        onClick={handleCall}
        className="group relative bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        aria-label="Call"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </button>
    </div>
  );
};

export default FloatingButtons;