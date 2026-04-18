import React, { useState, useEffect } from "react";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setIsVisible(true);
      }
      
      // Also hide when scrolled to bottom
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollBottom = currentScrollY + windowHeight;
      
      if (scrollBottom >= documentHeight - 50) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleCall = () => {
    window.location.href = "tel:+919760075738";
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I need a home service. Please help.");
    window.open(`https://wa.me/919760075738?text=${message}`, "_blank");
  };

  return (
    <div
      className={`fixed top-1/2 right-8 -translate-y-1/2 z-50 flex flex-col gap-4 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-x-32 pointer-events-none"
      }`}
    >
      {/* WhatsApp Button - Green */}
      <button
        onClick={handleWhatsApp}
        className="group relative bg-gradient-to-br from-[#25D366] to-[#20b859] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl hover:rotate-3"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-stone-800 to-stone-900 text-white text-sm font-semibold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg border border-stone-700">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            WhatsApp Us
          </span>
        </span>
        
        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </button>

      {/* Call Button - Blue */}
      <button
        onClick={handleCall}
        className="group relative bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl hover:-rotate-3"
        aria-label="Call"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-stone-800 to-stone-900 text-white text-sm font-semibold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg border border-stone-700">
          <span className="flex items-center gap-2">
            <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </span>
        </span>
        
        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full animate-ping bg-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </button>
    </div>
  );
};

export default FloatingButtons;