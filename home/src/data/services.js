// const services = [
//   {
//     id: 1,
//     name: "AC Repair Service",
//     location: "Delhi",
//     description: "Professional AC repair, gas refilling, and maintenance at your doorstep. Our certified technicians ensure your AC works efficiently with same-day service.",
//     detailedInfo: {
//       bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
//       brandInfo: "RightCliq Repair/Service all brands of Air conditioner no matter where you bought them from.",
//       warranty: "RightCliq provides a 90-day Service Warranty on the provided service",
//       visitCharge: "₹200",
//       professionalInfo: "Background-verified and experienced professionals.",
//       pricingNote: "Standard market prices apply separately for repairs and additional materials. The final price is quoted after inspecting the scope of work.",
//       negotiable: "Price can be discussed on contact"
//     },
//     visitCharge: "₹200",
//     category: "AC Repair",
//     iconUrl: "/ac.png",
//     imageUrl: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400"
//   },
//   {
//     id: 2,
//     name: "Plumbing Service",
//     location: "Delhi",
//     description: "Expert plumbers for all your needs - leak repairs, pipe installation, faucet replacement, and drainage cleaning. 24/7 emergency service available.",
//     detailedInfo: {
//       bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
//       brandInfo: "RightCliq Repair/Service all plumbing issues no matter the complexity.",
//       warranty: "RightCliq provides a 60-day Service Warranty on the provided service",
//       visitCharge: "₹200",
//       professionalInfo: "Background-verified and experienced professionals with 5+ years experience.",
//       pricingNote: "Standard market prices apply separately for repairs and additional materials. The final price is quoted after inspecting the scope of work.",
//       negotiable: "Price can be discussed on contact"
//     },
//     visitCharge: "₹200",
//     category: "Plumbing",
//     iconUrl: "/icon1 (2).png",
//     imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400"
//   },
//   {
//     id: 3,
//     name: "Home Cleaning Service",
//     location: "Delhi",
//     description: "Deep cleaning, sofa cleaning, carpet cleaning, and bathroom sanitization. Eco-friendly products used for a healthy home.",
//     detailedInfo: {
//       bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
//       brandInfo: "RightCliq Cleaning Service for all types of homes and offices.",
//       warranty: "RightCliq provides a 30-day Satisfaction Guarantee on cleaning service",
//       visitCharge: "₹200",
//       professionalInfo: "Background-verified and trained cleaning professionals.",
//       pricingNote: "Standard market prices apply separately for deep cleaning and additional areas. The final price is quoted after inspecting the scope of work.",
//       negotiable: "Price can be discussed on contact"
//     },
//     visitCharge: "₹200",
//     category: "Cleaning",
//     iconUrl: "/icon1 (1).png",
//     imageUrl: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400"
//   },
//   {
//     id: 4,
//     name: "Electrical Repair Service",
//     location: "Noida",
//     description: "Licensed electricians for wiring, fixture installation, circuit repair, and safety checks. Same-day service guaranteed.",
//     detailedInfo: {
//       bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
//       brandInfo: "RightCliq Electrical Services for all residential and commercial needs.",
//       warranty: "RightCliq provides a 90-day Service Warranty on electrical repairs",
//       visitCharge: "₹200",
//       professionalInfo: "Background-verified and licensed electricians.",
//       pricingNote: "Standard market prices apply separately for parts and additional work. The final price is quoted after inspecting the scope of work.",
//       negotiable: "Price can be discussed on contact"
//     },
//     visitCharge: "₹200",
//     category: "Electrical",
//     iconUrl: "/icon1 (4).png",
//     imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a26e3?w=400"
//   },
//   {
//     id: 5,
//     name: "Painting Service",
//     location: "Noida",
//     description: "Professional wall painting, texture painting, and waterproofing. Quality materials and skilled painters for perfect finish.",
//     detailedInfo: {
//       bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
//       brandInfo: "RightCliq Painting Service for all types of walls and surfaces.",
//       warranty: "RightCliq provides a 180-day Service Warranty on painting work",
//       visitCharge: "₹200",
//       professionalInfo: "Background-verified and skilled painting professionals.",
//       pricingNote: "Standard market prices apply separately for materials and additional areas. The final price is quoted after inspecting the scope of work.",
//       negotiable: "Price can be discussed on contact"
//     },
//     visitCharge: "₹200",
//     category: "Painting",
//     iconUrl: "/icon1 (3).png",
//     imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400"
//   },
//   {
//     id: 6,
//     name: "AC Repair Service",
//     location: "Gurugram",
//     description: "Complete AC solutions including repair, maintenance, gas charging, and installation. 1-year warranty on repairs.",
//     detailedInfo: {
//       bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
//       brandInfo: "RightCliq Repair/Service all brands of Air conditioner no matter where you bought them from.",
//       warranty: "RightCliq provides a 90-day Service Warranty on the provided service",
//       visitCharge: "₹200",
//       professionalInfo: "Background-verified and experienced professionals.",
//       pricingNote: "Standard market prices apply separately for repairs and additional materials. The final price is quoted after inspecting the scope of work.",
//       negotiable: "Price can be discussed on contact"
//     },
//     visitCharge: "₹200",
//     category: "AC Repair",
//     iconUrl: "/ac.png",
//     imageUrl: "https://images.unsplash.com/photo-1636006030403-6d1d59f5b216?w=400"
//   },
//   {
//     id: 7,
//     name: "Plumbing Service",
//     location: "Gurugram",
//     description: "Emergency plumbing services, drain unblocking, bathroom fitting repair, and pipeline installation.",
//     detailedInfo: {
//       bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
//       brandInfo: "RightCliq Repair/Service all plumbing issues no matter the complexity.",
//       warranty: "RightCliq provides a 60-day Service Warranty on the provided service",
//       visitCharge: "₹200",
//       professionalInfo: "Background-verified and experienced professionals with 5+ years experience.",
//       pricingNote: "Standard market prices apply separately for repairs and additional materials. The final price is quoted after inspecting the scope of work.",
//       negotiable: "Price can be discussed on contact"
//     },
//     visitCharge: "₹200",
//     category: "Plumbing",
//     iconUrl: "/icon1 (2).png",
//     imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400"
//   },
//   {
//     id: 8,
//     name: "Home Cleaning Service",
//     location: "Bangalore",
//     description: "Complete home sanitization, kitchen cleaning, bathroom deep clean, and upholstery cleaning.",
//     detailedInfo: {
//       bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
//       brandInfo: "RightCliq Cleaning Service for all types of homes and offices.",
//       warranty: "RightCliq provides a 30-day Satisfaction Guarantee on cleaning service",
//       visitCharge: "₹200",
//       professionalInfo: "Background-verified and trained cleaning professionals.",
//       pricingNote: "Standard market prices apply separately for deep cleaning and additional areas. The final price is quoted after inspecting the scope of work.",
//       negotiable: "Price can be discussed on contact"
//     },
//     visitCharge: "₹200",
//     category: "Cleaning",
//     iconUrl: "/icon1 (1).png",
//     imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400"
//   },
//   {
//     id: 9,
//     name: "Electrical Repair Service",
//     location: "Bangalore",
//     description: "Quick electrical repairs, switch replacement, fan installation, and circuit troubleshooting.",
//     detailedInfo: {
//       bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
//       brandInfo: "RightCliq Electrical Services for all residential and commercial needs.",
//       warranty: "RightCliq provides a 90-day Service Warranty on electrical repairs",
//       visitCharge: "₹200",
//       professionalInfo: "Background-verified and licensed electricians.",
//       pricingNote: "Standard market prices apply separately for parts and additional work. The final price is quoted after inspecting the scope of work.",
//       negotiable: "Price can be discussed on contact"
//     },
//     visitCharge: "₹200",
//     category: "Electrical",
//     iconUrl: "/icon1 (4).png",
//     imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a26e3?w=400"
//   },
//   {
//     id: 10,
//     name: "Painting Service",
//     location: "Bangalore",
//     description: "Interior and exterior painting, texture design, and wall repair services.",
//     detailedInfo: {
//       bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
//       brandInfo: "RightCliq Painting Service for all types of walls and surfaces.",
//       warranty: "RightCliq provides a 180-day Service Warranty on painting work",
//       visitCharge: "₹200",
//       professionalInfo: "Background-verified and skilled painting professionals.",
//       pricingNote: "Standard market prices apply separately for materials and additional areas. The final price is quoted after inspecting the scope of work.",
//       negotiable: "Price can be discussed on contact"
//     },
//     visitCharge: "₹200",
//     category: "Painting",
//     iconUrl: "/icon1 (3).png",
//     imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400"
//   }
// ];

// export default services;






const services = [
  {
    id: 1,
    name: "AC Repair Service",
    location: "Delhi",
    description: "Professional AC repair, gas refilling, and maintenance at your doorstep. Our certified technicians ensure your AC works efficiently with same-day service. We handle all brands including LG, Samsung, Voltas, Daikin, Blue Star, and Hitachi.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "Nayara DialHome Service repairs all brands of Air Conditioners no matter where you bought them from.",
      warranty: "Nayara DialHome Service provides a 90-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and experienced AC technicians with 5+ years of experience.",
      pricingNote: "Standard market prices apply separately for repairs and additional materials like gas, capacitors, or compressors. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "AC Repair",
    iconUrl: "/s (3).png",
    imageUrl: "/service.jpg"
  },
  {
    id: 2,
    name: "Water Purifier Repair Service",
    location: "Delhi",
    description: "Expert water purifier repair and maintenance service. We fix all types of water purifiers including RO, UV, and UF systems. Services include filter replacement, membrane change, tank cleaning, and leakage repair. We handle brands like Kent, Aquaguard, Pureit, Livpure, and HUL.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "Nayara DialHome Service repairs all brands of Water Purifiers no matter where you bought them from.",
      warranty: "Nayara DialHome Service provides a 60-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and experienced water purifier technicians with 5+ years experience.",
      pricingNote: "Standard market prices apply separately for replacement parts like filters, membranes, and UV lamps. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Water Purifier",
    iconUrl: "/s (2).png",
    imageUrl: "/service1.jpg"
  },
  {
    id: 3,
    name: "Washing Machine Repair Service",
    location: "Delhi",
    description: "Professional washing machine repair and servicing for both front-load and top-load machines. Services include drum cleaning, motor repair, drainage issues, water leakage fix, and electronic board repair. We handle all brands including Samsung, LG, Whirlpool, Bosch, IFB, and Godrej.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "Nayara DialHome Service repairs all brands of Washing Machines no matter where you bought them from.",
      warranty: "Nayara DialHome Service provides a 90-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and trained washing machine technicians with 5+ years experience.",
      pricingNote: "Standard market prices apply separately for replacement parts like motors, belts, and electronic boards. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Washing Machine",
    iconUrl: "/s (1).png",
    imageUrl: "/service2.avif"
  },
  {
    id: 4,
    name: "Refrigerator Repair Service",
    location: "Noida",
    description: "Expert refrigerator repair and maintenance services for single-door, double-door, side-by-side, and French door refrigerators. Services include cooling issues, gas refilling, compressor repair, thermostat replacement, and door seal fix. We handle brands like LG, Samsung, Whirlpool, Godrej, Haier, and Bosch.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "Nayara DialHome Service repairs all brands of Refrigerators no matter where you bought them from.",
      warranty: "Nayara DialHome Service provides a 90-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and licensed refrigerator technicians with 5+ years experience.",
      pricingNote: "Standard market prices apply separately for parts like compressors, thermostats, and gas. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Refrigerator",
    iconUrl: "/s (6).webp",
    imageUrl: "/service3.jpg"
  },
  {
    id: 5,
    name: "Chimney Repair Service",
    location: "Gurugram",
    description: "Professional chimney cleaning and repair services for all types of kitchen chimneys. Services include filter cleaning, motor repair, suction issues, oil leakage fix, and light replacement. We handle brands like Faber, Elica, Hindware, Glen, and Bosch.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "Nayara DialHome Service repairs all brands of Chimneys no matter where you bought them from.",
      warranty: "Nayara DialHome Service provides a 60-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and experienced chimney technicians with 5+ years experience.",
      pricingNote: "Standard market prices apply separately for replacement parts like motors, filters, and switches. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Chimney",
    iconUrl: "/s (5).webp",
    imageUrl: "/service4.jpg"
  },
  {
    id: 6,
    name: "Gas Stove Repair Service",
    location: "Gurugram",
    description: "Expert gas stove repair and maintenance services for both automatic and manual gas stoves. Services include burner cleaning, ignition switch repair, gas leakage fix, flame adjustment, and knob replacement. We handle all brands including Prestige, Pigeon, Butterfly, Sunflame, and Glen.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "Nayara DialHome Service repairs all brands of Gas Stoves no matter where you bought them from.",
      warranty: "Nayara DialHome Service provides a 60-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and experienced gas stove technicians with 5+ years experience.",
      pricingNote: "Standard market prices apply separately for replacement parts like burners, knobs, and ignition switches. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Gas Stove",
    iconUrl: "/s (4).webp",
    imageUrl: "/service5.jpg"
  },
  {
    id: 7,
    name: "Gas Pipeline Service",
    location: "Bangalore",
    description: "Professional gas pipeline installation, repair, and maintenance services. Services include pipeline leakage detection, regulator replacement, rubber pipe change, and safety inspection. We work with all types of gas connections including PNG and LPG cylinders.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "Nayara DialHome Service provides professional gas pipeline services for homes and businesses.",
      warranty: "Nayara DialHome Service provides a 90-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and licensed gas pipeline technicians with 5+ years experience.",
      pricingNote: "Standard market prices apply separately for replacement parts like pipes, regulators, and connectors. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Gas Pipeline",
    iconUrl: "/s (3).webp",
    imageUrl: "/service6.avif"
  },
  {
    id: 8,
    name: "Plumber Service",
    location: "Bangalore",
    description: "Expert plumbing services for all your home and office needs. Services include tap and faucet repair, pipe installation, drain cleaning, bathroom fitting replacement, geyser installation, and toilet repair. 24/7 emergency service available for urgent plumbing issues.",
    detailedInfo: {
      bookingInfo: "Book for Instant Service at your doorstep. Get Quick Assistance in same day service",
      brandInfo: "Nayara DialHome Service provides professional plumbing services for all residential and commercial needs.",
      warranty: "Nayara DialHome Service provides a 60-day Service Warranty on the provided service",
      visitCharge: "₹200",
      professionalInfo: "Background-verified and licensed plumbers with 5+ years experience.",
      pricingNote: "Standard market prices apply separately for replacement parts like taps, pipes, and fittings. The final price is quoted after inspecting the scope of work.",
      negotiable: "Price can be discussed on contact"
    },
    visitCharge: "₹200",
    category: "Plumbing",
    iconUrl: "/s (2).webp",
    imageUrl: "/service7.avif"
  }
];

export default services;