import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useServices } from '../../context/ServicesContext';

const MostUsedServices = () => {
  const navigate = useNavigate();
  const { filteredServices, searchQuery, selectedLocation, setSearchQuery, setSelectedLocation } = useServices();
  
  const staticServices = [
    { id: 1, name: 'Air Conditioner', imagePath: '/s (3).png' },
    { id: 2, name: 'Water Purifier', imagePath: '/s (2).png' },
    { id: 3, name: 'Washing Machine', imagePath: '/s (1).png' },
    { id: 4, name: 'Refrigerator', imagePath: '/s (6).webp' },
    { id: 5, name: 'Chimney Service', imagePath: '/s (5).webp' },
    { id: 6, name: 'Gas Stove', imagePath: '/s (4).webp' },
    { id: 7, name: 'Gas Pipeline', imagePath: '/s (3).webp' },
    { id: 8, name: 'Plumber', imagePath: '/s (2).webp' },
  ];

  const hasActiveFilter = searchQuery !== '' || selectedLocation !== 'all';
  const displayServices = hasActiveFilter && filteredServices.length > 0 
    ? filteredServices.map(service => ({
        id: service.id,
        name: service.name,
        imagePath: service.imagePath || '/s (3).png',
        location: service.location,
      }))
    : staticServices;

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <section className="w-full bg-gray-100 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Most Used Services
        </h2>

        {hasActiveFilter && (
          <div className="mb-6 text-center">
            <p className="text-sm text-gray-600">
              Showing {displayServices.length} result(s) for 
              {searchQuery && <span className="font-semibold"> "{searchQuery}"</span>}
              {selectedLocation !== 'all' && <span className="font-semibold"> in {selectedLocation}</span>}
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedLocation('all');
              }}
              className="text-xs text-blue-600 hover:text-blue-800 underline mt-1"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Use flexbox with justify-center for better centering */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-10">
          {displayServices.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className="flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:scale-105 group"
              style={{ width: 'calc(16.666% - 2.5rem)', minWidth: '120px' }}
            >
              <div className={`
                w-20 h-20 rounded-2xl bg-white shadow-md 
                flex items-center justify-center mb-3
                transition-all duration-300 group-hover:shadow-xl
                border border-gray-200 overflow-hidden p-2
              `}>
                <img 
                  src={service.imagePath}
                  alt={service.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/80x80/3b82f6/white?text=' + service.name;
                  }}
                />
              </div>
              
              <span className="text-lg text-gray-700 font-medium transition-colors duration-300 group-hover:text-blue-900">
                {service.name}
              </span>
              {service.location && hasActiveFilter && (
                <span className="text-xs text-gray-500 mt-1">{service.location}</span>
              )}
            </div>
          ))}
        </div>

        {hasActiveFilter && displayServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No services found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedLocation('all');
              }}
              className="mt-4 text-blue-600 hover:text-blue-800 underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MostUsedServices;