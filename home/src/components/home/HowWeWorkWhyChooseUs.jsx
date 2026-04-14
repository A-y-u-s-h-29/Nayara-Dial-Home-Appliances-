import React, { useState, useEffect } from "react";

const HowWeWorkWhyChooseUs = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('how-we-work');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Book Online",
      description: "Select your service, choose a convenient time slot, and book instantly through our easy-to-use platform.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Get Confirmation",
      description: "Receive instant confirmation with service details, technician profile, and expected arrival time.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Service Visit",
      description: "Background-verified professional arrives at your doorstep with all necessary tools and equipment.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Quality Check",
      description: "Thorough inspection and quality check after service completion with 90-day warranty coverage.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const whyChooseUs = [
    {
      title: "Same Day Service",
      description: "Quick response with service available on the same day of booking.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Verified Professionals",
      description: "Background-checked, experienced, and certified technicians you can trust.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "90-Day Warranty",
      description: "Comprehensive warranty on all services for your peace of mind.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Best Price Guarantee",
      description: "Competitive pricing with no hidden charges or surprises.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries and concerns.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m0 5.656l3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      title: "Eco-Friendly Products",
      description: "Using safe, environmentally friendly products for cleaning and services.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div id="how-we-work" className="bg-gradient-to-br from-stone-900 to-stone-800 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
              <span className="text-amber-400 text-sm font-semibold mx-3 tracking-wider">OUR PROCESS</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-100 mb-4">
            How <span className="text-amber-400">We Work</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Simple, transparent, and hassle-free process to get your services done
          </p>
        </div>

        {/* How We Work Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-stone-800/80 to-stone-900/80 rounded-2xl p-6 border border-stone-700 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Step Number */}
              <div className="text-5xl font-bold text-stone-700 mb-4 group-hover:text-amber-500/20 transition-colors duration-300">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-all duration-300 group-hover:bg-amber-500/20">
                {step.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-stone-100 mb-2 group-hover:text-amber-400 transition-colors">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-stone-400 text-sm leading-relaxed">
                {step.description}
              </p>
              
              {/* Connecting Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-3 w-6 h-px bg-gradient-to-r from-stone-600 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
                <span className="text-amber-400 text-sm font-semibold mx-3 tracking-wider">WHY CHOOSE US</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-100 mb-4">
              What Makes Us <span className="text-amber-400">Different</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              We're committed to providing the best service experience with transparency and quality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-stone-800/50 to-stone-900/50 rounded-xl p-6 border border-stone-700 hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-all duration-300 group-hover:bg-amber-500/20">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-stone-100 mb-2 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats/Counter Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "10K+", label: "Happy Customers", icon: "😊" },
            { number: "50+", label: "Expert Technicians", icon: "👨‍🔧" },
            { number: "15min", label: "Response Time", icon: "⚡" },
            { number: "4.9", label: "Customer Rating", icon: "⭐" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl bg-gradient-to-br from-stone-800/50 to-stone-900/50 border border-stone-700 transition-all duration-300 hover:border-amber-500/30 hover:shadow-lg ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${(index + 8) * 100}ms` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-amber-400 mb-1">{stat.number}</div>
              <div className="text-sm text-stone-400">{stat.label}</div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default HowWeWorkWhyChooseUs;