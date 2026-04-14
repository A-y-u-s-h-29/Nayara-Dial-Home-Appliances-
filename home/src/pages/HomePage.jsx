import React from "react";
import Hero from "../components/home/Hero";
import ServiceCard from "../components/common/ServiceCard";
import FilterDropdown from "../components/services/FilterDropdown";
import ServiceModal from "../components/services/ServiceModal";
import { useServices } from "../hooks/useServices";

const HomePage = () => {
  const {
    locations,
    selectedLocation,
    setSelectedLocation,
    filteredServices,
    selectedService,
    setSelectedService,
  } = useServices();

  const closeModal = () => setSelectedService(null);

  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container-custom">
          <FilterDropdown
            locations={locations}
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
          />

          {/* Services Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 text-lg">No services available in {selectedLocation} yet.</p>
              <p className="text-gray-400">Please check back later or select another location.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onClick={setSelectedService}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal service={selectedService} onClose={closeModal} />
    </div>
  );
};

export default HomePage;