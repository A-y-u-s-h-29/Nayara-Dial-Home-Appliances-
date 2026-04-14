import React, { useState } from "react";

const ServiceCard = ({ service, onClick }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      onClick={() => onClick(service)}
      className="group relative bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl shadow-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 border border-stone-700"
    >
      {/* Animated gradient border with dark theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-stone-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" style={{ padding: '2px' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl -z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative p-6">
        {/* Icon and Badge */}
        <div className="flex justify-between items-start mb-5">
          <div className="p-3 bg-stone-700/50 rounded-xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm border border-stone-600">
            <img 
              src={service.iconUrl} 
              alt={service.category}
              className="w-6 h-6 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://cdn-icons-png.flaticon.com/512/1040/1040239.png"; // Fallback icon
              }}
            />
          </div>
          
          {/* Modern Badge - Dark Theme */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <span className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-lg">
              <svg className="w-3 h-3 mr-1.5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Same Day
            </span>
          </div>
        </div>

        {/* Service Name */}
        <h3 className="text-xl font-bold text-stone-100 mb-2 group-hover:text-amber-400 transition-colors duration-300">
          {service.name}
        </h3>

        {/* Location with modern icon */}
        <div className="flex items-center text-stone-400 text-sm mb-3">
          <div className="p-1 bg-stone-700/50 rounded-full mr-2 border border-stone-600">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="font-medium text-stone-300">{service.location}</span>
        </div>

        {/* Visit Charge - New Design */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-amber-400">
              {service.visitCharge}
            </span>
            <span className="text-stone-400 text-sm">Visit Charge</span>
          </div>
          <p className="text-xs text-stone-500 mt-1">
            Technician will visit and quote final price | Negotiable on contact
          </p>
        </div>

        {/* Description Preview */}
        <div className="relative mb-4">
          <div className="absolute -top-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
          <p className="text-stone-300 text-sm leading-relaxed mt-3">
            {service.description.substring(0, 85)}...
          </p>
        </div>

        {/* Quick Info Chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-1 px-2 py-1 bg-stone-700/30 rounded-full border border-stone-600">
            <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs text-stone-300">90-day Warranty</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-stone-700/30 rounded-full border border-stone-600">
            <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs text-stone-300">Verified Pro</span>
          </div>
        </div>

        {/* Modern View Details Button - Dark Theme */}
        <div className="group/btn flex items-center justify-between pt-2 border-t border-stone-700">
          <span className="text-sm font-semibold text-stone-300 group-hover/btn:text-amber-400 transition-all">
            View Details
          </span>
          <div className="w-8 h-8 rounded-full bg-stone-700/50 flex items-center justify-center group-hover/btn:bg-stone-700 transition-all group-hover/btn:scale-110 border border-stone-600">
            <svg className="w-4 h-4 text-amber-400 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative elements - Dark Theme */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500/5 to-amber-600/5 rounded-bl-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-500/5 to-stone-600/5 rounded-tr-full pointer-events-none"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;