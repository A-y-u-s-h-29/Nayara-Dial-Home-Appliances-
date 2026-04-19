import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useServices } from '../../context/ServicesContext';

const ServicesWeProvide = () => {
  const navigate = useNavigate();
  const { services } = useServices();
  
  // Use the first 8 services from your dataset
  const displayServices = services.slice(0, 8);

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <section className="w-full bg-gray-100 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">
          Services We Provide
        </h2>

        {/* Changed grid to show 2 columns on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {displayServices.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.imageUrl || service.iconUrl || '/service.jpg'}
                  alt={service.name}
                  className="w-full h-36 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x300/3b82f6/white?text=' + service.name;
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              <div className="p-3 sm:p-4 pt-2 sm:pt-3">
                <button className="w-full bg-blue-900 hover:bg-blue-800 text-white text-sm sm:text-base md:text-lg font-semibold py-2 sm:py-3 px-2 sm:px-4 rounded-lg transition-all duration-300">
                  {service.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesWeProvide;