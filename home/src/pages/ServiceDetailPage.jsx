import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Phone, MapPin, Clock, Shield, Award, Calendar, ChevronLeft, Star, Users, ThumbsUp, Truck, Wrench, CheckCircle, Clock as ClockIcon, Headphones, CreditCard, Home, Zap, Droplet, Wind, Thermometer, Settings, Briefcase, Heart, Smile, Globe, Lock, FileText, MessageCircle, Mail } from 'lucide-react';
import { useServices } from '../context/ServicesContext';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { services } = useServices();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    additionalNotes: ''
  });

  useEffect(() => {
  if (services && services.length > 0 && id) {
    // Try to find by ID as number or string
    const foundService = services.find(s => String(s.id) === String(id));
    if (foundService) {
      setService(foundService);
      setLoading(false);
    } else {
      // Don't redirect immediately - show a "not found" message instead
      setLoading(false);
      setService(null);
    }
  } else if (services && services.length === 0) {
    setLoading(false);
  }
}, [id, services]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking request sent for ${service.name}! We'll contact you shortly at ${formData.phone}.`);
    setFormData({
      customerName: '',
      phone: '',
      email: '',
      address: '',
      additionalNotes: ''
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading service details...</p>
      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-blue-900 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Side - Service Info with Image (No text overlay) */}
            <div className="w-full lg:w-1/2 relative min-h-[500px]">
              <div 
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/20"></div>
              </div>
              
              {/* Clean image section - no text overlay */}
              <div className="relative z-10 w-full h-full min-h-[500px]">
                {/* Empty - image only */}
              </div>
            </div>

            {/* Right Side - Booking Form */}
            <div className="w-full lg:w-1/2 p-8 lg:p-10">
              <div className="mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                  Book Your Service
                </h2>
                <p className="text-gray-600 text-sm">
                  Fill in the details below and our professional will contact you shortly
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    required
                    value={formData.customerName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Address *
                  </label>
                  <textarea
                    name="address"
                    required
                    rows="2"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your full address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    rows="2"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Any specific requirements or issues?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Book Now
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  You'll receive a confirmation call within 2 hours.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section - Extensive Content */}
        <div className="mt-8 space-y-8">
          
          {/* Section 1: Company Info & Service Overview */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Nayara DialHome Service</h3>
                <p className="text-gray-600">Making Life Easy</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {service.iconUrl && (
                    <img 
                      src={service.iconUrl}
                      alt={service.name}
                      className="w-16 h-16 object-contain bg-gray-100 rounded-xl p-2 mb-4"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <h1 className="text-2xl font-bold text-gray-800 mb-3">{service.name}</h1>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{service.location}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4" />
                    <span>Same-day service available</span>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="font-semibold text-gray-800 mb-3">Service Highlights</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-blue-600" />
                      <span>Quick response within 60 minutes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="h-4 w-4 text-blue-600" />
                      <span>Latest tools and equipment used</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Headphones className="h-4 w-4 text-blue-600" />
                      <span>Dedicated customer support team</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-blue-600" />
                      <span>Multiple payment options available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Trust Indicators */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-10">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Why Customers Trust Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="h-8 w-8 text-yellow-500 fill-current" />
                  </div>
                  <p className="font-bold text-gray-800">4.8/5 Rating</p>
                  <p className="text-xs text-gray-500">Based on 5,000+ reviews</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="font-bold text-gray-800">10,000+</p>
                  <p className="text-xs text-gray-500">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ThumbsUp className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="font-bold text-gray-800">98%</p>
                  <p className="text-xs text-gray-500">Satisfaction Rate</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Truck className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="font-bold text-gray-800">Same-Day</p>
                  <p className="text-xs text-gray-500">Service Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Why Choose Us - Detailed */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-10">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Why Choose Nayara DialHome Service?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Verified & Trained Professionals</h4>
                      <p className="text-sm text-gray-600">All technicians undergo background verification and regular training to ensure quality service.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClockIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">On-Time Service Guarantee</h4>
                      <p className="text-sm text-gray-600">We respect your time and ensure our professionals arrive exactly when scheduled.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wrench className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Genuine Spare Parts</h4>
                      <p className="text-sm text-gray-600">We use only genuine manufacturer-approved spare parts for all repairs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Transparent Pricing</h4>
                      <p className="text-sm text-gray-600">No hidden charges. Get upfront pricing before any work begins.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Home className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Doorstep Service</h4>
                      <p className="text-sm text-gray-600">We come to your location - no need to take your appliances anywhere.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Headphones className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">24/7 Customer Support</h4>
                      <p className="text-sm text-gray-600">Our support team is available round the clock to assist you.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">100% Satisfaction Guarantee</h4>
                      <p className="text-sm text-gray-600">If you're not satisfied, we'll redo the service at no extra cost.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smile className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Friendly & Courteous Staff</h4>
                      <p className="text-sm text-gray-600">Our professionals are trained to be respectful and polite.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Our Process */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-10">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">How It Works</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Book Service</h4>
                  <p className="text-xs text-gray-500">Fill the booking form with your details</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-blue-600">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Get Confirmation</h4>
                  <p className="text-xs text-gray-500">Receive confirmation call within 2 hours</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-blue-600">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Service at Doorstep</h4>
                  <p className="text-xs text-gray-500">Professional visits at scheduled time</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-blue-600">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Service Complete</h4>
                  <p className="text-xs text-gray-500">Quality check and service completion</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Professional Info */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-10">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-800">About Our Professionals</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {service.detailedInfo?.professionalInfo || "All our technicians are background-verified, licensed, and have minimum 5+ years of experience. They undergo regular training to stay updated with the latest technologies and repair techniques."}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-gray-600">Police verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-gray-600">ID proof available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-gray-600">Experienced professionals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-gray-600">Trained & certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Customer Support & Policies */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Headphones className="h-5 w-5 text-blue-600" />
                    Customer Support
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our customer support team is available 24/7 to assist you with any queries or concerns.
                  </p>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-700">+91 9760075738</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Service Policies
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Free cancellation up to 24 hours before service</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">•</span>
                      <span>No hidden charges - upfront pricing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Quality service guaranteed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Secure payment options available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Contact & Support Footer */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-10 text-center text-white">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
              <p className="text-blue-100 mb-6">Our support team is just a call away</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">+91 9760075738</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
                  <Mail className="h-5 w-5" />
                  <span>support@nayaradial.com</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;