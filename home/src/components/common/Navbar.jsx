import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm"
          : "bg-white/80 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - Left Side */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-800 rounded-xl flex items-center justify-center shadow-md group-hover:bg-stone-700 transition-all duration-300">
              <span className="text-white font-bold text-xl sm:text-2xl">N</span>
            </div>
            <div>
              <h1 className="text-stone-800 font-bold text-lg sm:text-xl tracking-tight">
                NAYARA DIAL
              </h1>
              <p className="text-stone-500 text-xs font-medium">Home Service</p>
            </div>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-stone-600 hover:text-stone-900 font-medium transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200 transition-all duration-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-stone-100">
            {["Home", "Services", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-stone-700 font-medium rounded-lg hover:bg-stone-50 hover:text-stone-900 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  