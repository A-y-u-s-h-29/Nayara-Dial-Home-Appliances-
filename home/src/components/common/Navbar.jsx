import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Phone, 
  Menu, 
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useServices } from '../../context/ServicesContext';
import logo from "/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [localLocation, setLocalLocation] = useState('Delhi NCR');
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const { 
    setSearchQuery, 
    setSelectedLocation,
  } = useServices();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(localSearchQuery);
  };

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocalLocation(newLocation);
    setSelectedLocation(newLocation === 'Delhi NCR' ? 'all' : newLocation);
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919760075738';
  };

  const handleBookNowClick = () => {
    navigate('/service/1');
  };

  const navLinks = [
    { name: 'Home Appliances', href: '#', onClick: () => navigate('/') },
    { name: 'Handyman Services', href: '#', onClick: () => navigate('/') },
    { name: 'Book Now', href: '#', highlight: true, onClick: handleBookNowClick },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-3 sm:px-4">
          
          {/* Mobile Layout (2 rows) - visible on small screens, hidden on large */}
          <div className="lg:hidden py-2">
            {/* ROW 1: Top Bar */}
            <div className="flex items-center justify-between mb-3">
              {/* LEFT: Logo + Brand */}
              <div className="flex items-center gap-2">
                <img 
                  src={logo} 
                  alt="Nayara DialHome Service Logo" 
                  className="h-8 w-auto object-contain cursor-pointer"
                  onClick={() => navigate('/')}
                />
                
              </div>
              
              {/* RIGHT: Phone */}
              <div 
                onClick={handlePhoneClick}
                className="flex items-center gap-1 cursor-pointer"
              >
                <Phone className="h-4 w-4 text-gray-700" />
                <span className="font-bold text-sm text-gray-800">
                  9760075738
                </span>
              </div>
            </div>

            {/* ROW 2: Search Section */}
            <div className="flex gap-2">
              {/* Location Dropdown */}
              <div className="relative">
                <select 
                  value={localLocation}
                  onChange={handleLocationChange}
                  className="appearance-none rounded-lg border border-gray-300 px-3 py-2 pr-7 text-sm bg-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option>Delhi NCR</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Kolkata</option>
                  <option>Noida</option>
                  <option>Gurugram</option>
                </select>
                <MapPin className="absolute right-2 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400 pointer-events-none" />
              </div>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex-1">
                <div className="flex rounded-lg border border-gray-300 overflow-hidden bg-white">
                  <input
                    type="text"
                    placeholder="Search for a service..."
                    value={localSearchQuery}
                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                    className="flex-1 px-3 py-2 text-sm outline-none"
                  />
                  <button type="submit" className="bg-gray-900 px-3 py-2 hover:bg-gray-800 transition-colors">
                    <Search className="h-4 w-4 text-white" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Desktop Layout - unchanged */}
          <div className="hidden lg:flex flex-col lg:flex-row lg:items-center lg:justify-between py-3 gap-4">
            
            {/* Logo - Click to go home */}
            <div 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img 
                src={logo} 
                alt="Nayara DialHome Service Logo" 
                className="h-10 w-auto object-contain"
              />
              
            </div>

            {/* Search and Location */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:flex-1 lg:max-w-2xl">
              
              {/* Location Dropdown */}
              <div className="relative w-full sm:w-auto">
                <select 
                  value={localLocation}
                  onChange={handleLocationChange}
                  className="w-full appearance-none border rounded-lg px-4 py-2 bg-white pr-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Delhi NCR</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Kolkata</option>
                  <option>Noida</option>
                  <option>Gurugram</option>
                </select>
                <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex-1 w-full">
                <div className="flex border rounded-lg overflow-hidden bg-white focus-within:ring-2 focus-within:ring-blue-500">
                  <input
                    type="text"
                    placeholder="Search for a service..."
                    value={localSearchQuery}
                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                    className="px-3 sm:px-4 py-2 flex-1 outline-none text-sm sm:text-base"
                  />
                  <button type="submit" className="bg-blue-900 px-3 sm:px-4 py-2 hover:bg-blue-800 transition-colors">
                    <Search className="h-5 w-5 text-white" />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info - Click to dial */}
            <div 
              onClick={handlePhoneClick}
              className="flex items-center justify-between sm:justify-start gap-2 bg-white rounded-lg px-3 sm:px-4 py-2 border border-gray-200 shadow-sm w-full sm:w-auto cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <Phone className="h-5 w-5 text-blue-900" />
              <span className="font-bold text-sm sm:text-base text-gray-800">
                9760075738
              </span>

              {/* Mobile Menu Button - moved to mobile section */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="lg:hidden ml-auto p-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Navigation Bar - unchanged */}
      <nav className="bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between py-2">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.onClick) {
                      link.onClick();
                    }
                  }}
                  className={`text-white hover:text-blue-300 transition-colors cursor-pointer font-medium ${
                    link.highlight ? 'bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-600' : ''
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-blue-800">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-white py-2 ${
                      link.highlight ? 'bg-blue-700 px-4 rounded-lg text-center' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.onClick) {
                        link.onClick();
                      }
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;