import React, { createContext, useState, useContext } from 'react';

const ServicesContext = createContext();

export const useServices = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error('useServices must be used within ServicesProvider');
  }
  return context;
};

export const ServicesProvider = ({ children, servicesData = [] }) => {
  const [services] = useState(servicesData);
  const [selectedService, setSelectedService] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const handleServiceClick = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetail = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  // Get unique locations from services
  const locations = services && services.length > 0 
    ? ['all', ...new Set(services.map(s => s.location))]
    : ['all'];

  // Filter services based on search and location for MostUsedServices
  const filteredServices = services && services.length > 0 
    ? services.filter(service => {
        const matchesSearch = searchQuery === '' || 
          service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (service.description && service.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (service.category && service.category.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesLocation = selectedLocation === 'all' || service.location === selectedLocation;
        
        return matchesSearch && matchesLocation;
      })
    : [];

  return (
    <ServicesContext.Provider value={{
      services,
      filteredServices,
      selectedService,
      selectedLocation,
      searchQuery,
      locations,
      setSearchQuery,
      setSelectedLocation,
      handleServiceClick,
      handleCloseDetail
    }}>
      {children}
    </ServicesContext.Provider>
  );
};