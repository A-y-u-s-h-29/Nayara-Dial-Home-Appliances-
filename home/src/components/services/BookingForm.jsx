import React, { useState } from "react";

const BookingForm = ({ service, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter valid 10-digit number";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate API call
    console.log("Booking submitted:", { ...formData, service: service.name });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      if (onSuccess) onSuccess();
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 text-green-700 p-4 rounded-xl text-center">
        <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <p className="font-medium">Booking Request Sent!</p>
        <p className="text-sm mt-1">We'll contact you shortly to confirm.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="10-digit mobile number"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={2}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition ${
            errors.address ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Your complete address"
        />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
      </div>

      <button
        type="submit"
        className="w-full btn-primary bg-primary-600 hover:bg-primary-700 text-center"
      >
        Book Now → 
      </button>
    </form>
  );
};

export default BookingForm;