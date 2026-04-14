import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&h=900&fit=crop", // Plumber
      title: "Professional Plumbing",
      description: "Expert plumbers for all your home needs",
      badge: "24/7 Emergency Service"
    },
    {
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&h=900&fit=crop", // Electrician
      title: "Electrical Services",
      description: "Safe & reliable electrical solutions",
      badge: "Certified Electricians"
    },
    {
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&h=900&fit=crop", // Cleaning
      title: "Home Cleaning",
      description: "Sparkling clean homes guaranteed",
      badge: "Eco-Friendly Products"
    },
    {
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&h=900&fit=crop", // AC Repair
      title: "AC Repair & Maintenance",
      description: "Keep your home cool & comfortable",
      badge: "Same Day Service"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Margin */}
        <section className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
          {/* Slider Container */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                }}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-2xl animate-fade-in-up">
                      {/* Badge */}
                      <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                        <span className="relative flex h-3 w-3 mr-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-white text-sm font-medium">
                          {slide.badge}
                        </span>
                      </div>

                      {/* Heading */}
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-white/90 text-lg md:text-xl mb-8">
                        {slide.description}
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={scrollToServices}
                          className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Explore Services
                        </button>
                        <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 h-2 bg-white rounded-full"
                      : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-gray-900 mb-2">5000+</div>
            <div className="text-gray-600 text-sm">Happy Customers</div>
            <div className="mt-2 text-xs text-gray-400">⭐ 4.9 Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
            <div className="text-gray-600 text-sm">Expert Technicians</div>
            <div className="mt-2 text-xs text-gray-400">✓ Certified & Verified</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Support Available</div>
            <div className="mt-2 text-xs text-gray-400">📞 Call Anytime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;