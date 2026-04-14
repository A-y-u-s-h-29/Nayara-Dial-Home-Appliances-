import React from "react";

const FilterDropdown = ({ locations, selectedLocation, onLocationChange }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-stone-800">
          Our <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-stone-500 mt-1">Choose from our range of professional home services</p>
      </div>

      <div className="relative">
        <select
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value)}
          className="appearance-none bg-white border-2 border-orange-100 rounded-xl px-5 py-3 pr-10 text-stone-700 font-medium focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition cursor-pointer hover:border-orange-300 hover:shadow-md"
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              📍 {location}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
          <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;