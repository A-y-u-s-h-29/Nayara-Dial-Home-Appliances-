import React, { useState } from "react";
import BookingForm from "./BookingForm";

const ServiceModal = ({ service, onClose }) => {
  const [activeTab, setActiveTab] = useState("details");

  if (!service) return null;

  const handleCallNow = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in your ${service.name} service in ${service.location}. Please share more details.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-slide-up border border-stone-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-stone-800 to-stone-900 border-b border-stone-700 px-6 py-4 flex justify-between items-center backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-stone-700/50 rounded-xl border border-stone-600">
              <img 
                src={service.iconUrl} 
                alt={service.category}
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://cdn-icons-png.flaticon.com/512/1040/1040239.png";
                }}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-100">{service.name}</h2>
              <div className="flex items-center gap-2 text-sm text-stone-400">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {service.location}
                <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Same Day Service
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-200 transition text-3xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-700"
          >
            ×
          </button>
        </div>

        {/* Mobile Tabs */}
        <div className="lg:hidden border-b border-stone-700 bg-stone-800/50">
          <div className="flex">
            <button
              onClick={() => setActiveTab("details")}
              className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                activeTab === "details"
                  ? "text-amber-400 border-b-2 border-amber-400"
                  : "text-stone-400 hover:text-stone-300"
              }`}
            >
              Service Details
            </button>
            <button
              onClick={() => setActiveTab("booking")}
              className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                activeTab === "booking"
                  ? "text-amber-400 border-b-2 border-amber-400"
                  : "text-stone-400 hover:text-stone-300"
              }`}
            >
              Book Service
            </button>
          </div>
        </div>

        {/* Main Content - Split Layout */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Service Details */}
          <div className={`lg:w-1/2 p-6 lg:border-r border-stone-700 ${activeTab === "details" ? "block" : "hidden lg:block"}`}>
            {/* Visit Charge Banner */}
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-amber-400">{service.visitCharge}</span>
                    <span className="text-stone-400 text-sm">Visit Charge</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Technician will visit and quote final price | Negotiable on contact
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleCallNow}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="px-4 py-2 bg-[#25D366] hover:bg-[#20b859] text-white text-sm font-semibold rounded-lg transition flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-stone-200 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About This Service
              </h3>
              <p className="text-stone-300 leading-relaxed">{service.description}</p>
            </div>

            {/* Detailed Information from Dataset */}
            {service.detailedInfo && (
              <div className="space-y-4 mb-6">
                {/* Booking Info */}
                <div className="flex gap-3 p-3 bg-stone-700/30 rounded-lg border border-stone-700">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-stone-300">{service.detailedInfo.bookingInfo}</p>
                </div>

                {/* Brand Info */}
                <div className="flex gap-3 p-3 bg-stone-700/30 rounded-lg border border-stone-700">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-sm text-stone-300">{service.detailedInfo.brandInfo}</p>
                </div>

                {/* Warranty */}
                <div className="flex gap-3 p-3 bg-stone-700/30 rounded-lg border border-stone-700">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-sm text-stone-300">{service.detailedInfo.warranty}</p>
                </div>

                {/* Professional Info */}
                <div className="flex gap-3 p-3 bg-stone-700/30 rounded-lg border border-stone-700">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm text-stone-300">{service.detailedInfo.professionalInfo}</p>
                </div>

                {/* Pricing Note */}
                <div className="flex gap-3 p-3 bg-amber-500/5 rounded-lg border border-amber-500/20">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-stone-300">{service.detailedInfo.pricingNote}</p>
                    <p className="text-xs text-amber-400 mt-1">{service.detailedInfo.negotiable}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h3 className="font-semibold text-stone-200 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Key Features
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-stone-300">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Same Day Service
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-300">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Certified Professionals
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-300">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {service.detailedInfo?.warranty || "90-day Warranty"}
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-300">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Background Verified
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className={`lg:w-1/2 bg-stone-800/30 ${activeTab === "booking" ? "block" : "hidden lg:block"}`}>
            <div className="p-6">
              <div className="sticky top-20">
                <h3 className="font-semibold text-stone-200 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book This Service
                </h3>
                
                {/* Quick Info Bar */}
                <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-lg p-3 mb-4 border border-amber-500/20">
                  <p className="text-xs text-stone-400 text-center">
                    🚀 Get instant confirmation • 📞 Free consultation • ✅ No hidden charges
                  </p>
                </div>

                <BookingForm service={service} onSuccess={onClose} />
                
                {/* Trust Badges */}
                <div className="mt-6 flex justify-center gap-4">
                  <div className="flex items-center gap-1 text-xs text-stone-500">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    100% Secure
                  </div>
                  <div className="flex items-center gap-1 text-xs text-stone-500">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    24/7 Support
                  </div>
                  <div className="flex items-center gap-1 text-xs text-stone-500">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Best Price Guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;