const services = [
  {
    id: 1,
    name: "AC Repair Service",
    location: "Delhi",
    description: "Professional AC repair, gas refilling, and maintenance at your doorstep. Our certified technicians ensure your AC works efficiently with same-day service.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "RightCliq Repair/Service all brands of Air conditioner no matter where you bought them from.",
      warranty: "RightCliq provides a 90-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and experienced professionals.",
      pricingNote: "Standard market prices apply separately for repairs and additional materials. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "AC Repair",
    iconUrl: "/ac.png", // AC Repair icon
    imageUrl: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400"
  },
  {
    id: 2,
    name: "Plumbing Service",
    location: "Delhi",
    description: "Expert plumbers for all your needs - leak repairs, pipe installation, faucet replacement, and drainage cleaning. 24/7 emergency service available.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "RightCliq Repair/Service all plumbing issues no matter the complexity.",
      warranty: "RightCliq provides a 60-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and experienced professionals with 5+ years experience.",
      pricingNote: "Standard market prices apply separately for repairs and additional materials. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Plumbing",
    iconUrl: "/icon1 (2).png", // Plumbing icon
    imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400"
  },
  {
    id: 3,
    name: "Home Cleaning Service",
    location: "Delhi",
    description: "Deep cleaning, sofa cleaning, carpet cleaning, and bathroom sanitization. Eco-friendly products used for a healthy home.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "RightCliq Cleaning Service for all types of homes and offices.",
      warranty: "RightCliq provides a 30-day Satisfaction Guarantee on cleaning service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and trained cleaning professionals.",
      pricingNote: "Standard market prices apply separately for deep cleaning and additional areas. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Cleaning",
    iconUrl: "/icon1 (1).png", // Cleaning icon
    imageUrl: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400"
  },
  {
    id: 4,
    name: "Electrical Repair Service",
    location: "Noida",
    description: "Licensed electricians for wiring, fixture installation, circuit repair, and safety checks. Same-day service guaranteed.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "RightCliq Electrical Services for all residential and commercial needs.",
      warranty: "RightCliq provides a 90-day Service Warranty on electrical repairs",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and licensed electricians.",
      pricingNote: "Standard market prices apply separately for parts and additional work. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Electrical",
    iconUrl: "/icon1 (4).png", // Electrical icon
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a26e3?w=400"
  },
  {
    id: 5,
    name: "Painting Service",
    location: "Noida",
    description: "Professional wall painting, texture painting, and waterproofing. Quality materials and skilled painters for perfect finish.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "RightCliq Painting Service for all types of walls and surfaces.",
      warranty: "RightCliq provides a 180-day Service Warranty on painting work",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and skilled painting professionals.",
      pricingNote: "Standard market prices apply separately for materials and additional areas. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Painting",
    iconUrl: "/icon1 (3).png", // Painting icon
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400"
  },
  {
    id: 6,
    name: "AC Repair Service",
    location: "Gurugram",
    description: "Complete AC solutions including repair, maintenance, gas charging, and installation. 1-year warranty on repairs.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "RightCliq Repair/Service all brands of Air conditioner no matter where you bought them from.",
      warranty: "RightCliq provides a 90-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and experienced professionals.",
      pricingNote: "Standard market prices apply separately for repairs and additional materials. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "AC Repair",
    iconUrl: "/ac.png",
    imageUrl: "https://images.unsplash.com/photo-1636006030403-6d1d59f5b216?w=400"
  },
  {
    id: 7,
    name: "Plumbing Service",
    location: "Gurugram",
    description: "Emergency plumbing services, drain unblocking, bathroom fitting repair, and pipeline installation.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "RightCliq Repair/Service all plumbing issues no matter the complexity.",
      warranty: "RightCliq provides a 60-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and experienced professionals with 5+ years experience.",
      pricingNote: "Standard market prices apply separately for repairs and additional materials. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Plumbing",
    iconUrl: "/icon1 (2).png",
    imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400"
  },
  {
    id: 8,
    name: "Home Cleaning Service",
    location: "Bangalore",
    description: "Complete home sanitization, kitchen cleaning, bathroom deep clean, and upholstery cleaning.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "RightCliq Cleaning Service for all types of homes and offices.",
      warranty: "RightCliq provides a 30-day Satisfaction Guarantee on cleaning service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and trained cleaning professionals.",
      pricingNote: "Standard market prices apply separately for deep cleaning and additional areas. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Cleaning",
    iconUrl: "/icon1 (1).png",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400"
  },
  {
    id: 9,
    name: "Electrical Repair Service",
    location: "Bangalore",
    description: "Quick electrical repairs, switch replacement, fan installation, and circuit troubleshooting.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "RightCliq Electrical Services for all residential and commercial needs.",
      warranty: "RightCliq provides a 90-day Service Warranty on electrical repairs",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and licensed electricians.",
      pricingNote: "Standard market prices apply separately for parts and additional work. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Electrical",
    iconUrl: "/icon1 (4).png",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a26e3?w=400"
  },
  {
    id: 10,
    name: "Painting Service",
    location: "Bangalore",
    description: "Interior and exterior painting, texture design, and wall repair services.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "RightCliq Painting Service for all types of walls and surfaces.",
      warranty: "RightCliq provides a 180-day Service Warranty on painting work",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and skilled painting professionals.",
      pricingNote: "Standard market prices apply separately for materials and additional areas. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Painting",
    iconUrl: "/icon1 (3).png",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400"
  },
  {
    id: 11,
    name: "AC Repair Service",
    location: "Delhi",
    description: "Professional AC gas refilling for all brands. Same-day service with quality check.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "RightCliq Repair/Service all brands of Air conditioner no matter where you bought them from.",
      warranty: "RightCliq provides a 90-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and experienced professionals.",
      pricingNote: "Standard market prices apply separately for repairs and additional materials. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "AC Repair",
    iconUrl: "/ac.png",
    imageUrl: "https://images.unsplash.com/photo-1636006030403-6d1d59f5b216?w=400"
  },
  {
    id: 12,
    name: "Plumbing Service",
    location: "Noida",
    description: "Bathroom fitting repair, faucet replacement, and leakage fixing.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "RightCliq Repair/Service all plumbing issues no matter the complexity.",
      warranty: "RightCliq provides a 60-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and experienced professionals with 5+ years experience.",
      pricingNote: "Standard market prices apply separately for repairs and additional materials. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Plumbing",
    iconUrl: "/icon1 (2).png",
    imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400"
  },
];

export default services;