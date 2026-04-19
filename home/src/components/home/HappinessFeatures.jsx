import React from 'react';

const HappinessAndHowItWorks = () => {
  // Happiness Guarantee Features
  const happinessFeatures = [
    {
      title: 'Choose Service',
      description: 'We have over 40+ services for you to choose with a certified professional to help you.',
      iconPath: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
    },
    {
      title: 'Book Service',
      description: 'Booking a service is easy, just fill in the simple form and wait for our professional to contact.',
      iconPath: "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
    },
    {
      title: 'Value for Money',
      description: 'We deliver exceptional value with expert services at affordable prices, ensuring top-quality results.',
      iconPath: "M12 6v12m-3-2.818l.879.659a1 1 0 001.141-1.56L10.34 12l1.68-2.281a1 1 0 00-1.141-1.56L9 8.818m6 0l-.879-.659a1 1 0 00-1.141 1.56L13.66 12l-1.68 2.281a1 1 0 001.141 1.56L15 15.182M3 3h18v18H3V3z"
    },
    {
      title: 'Service Done',
      description: 'Experts will resolve your problem completely. Full service support is provided if needed.',
      iconPath: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];

  // How It Works Steps
  const howItWorksSteps = [
    {
      title: 'Schedule Your Service',
      description: 'Choose your service, share details, and select your preferred time slot.',
      iconPath: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
    },
    {
      title: 'Service At Doorstep',
      description: 'Our professional visits your location and confirms pricing before starting work.',
      iconPath: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
    },
    {
      title: 'Complete Task',
      description: 'The task is completed efficiently with quality assurance.',
      iconPath: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
    },
    {
      title: 'Professional Support',
      description: 'Enjoy after-service support and assistance whenever required.',
      iconPath: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
    }
  ];

  return (
    <section className="w-full bg-gray-100 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: Happiness Guarantee */}
        <div>
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 uppercase text-center mb-3">
            HAPPINESS GUARANTEE
          </h2>
          
          {/* Subtitle */}
          <p className="text-center text-gray-600 text-lg mb-12">
            Because your happiness is our goal!
          </p>
          
          {/* Features Grid - Shows 2 columns on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {happinessFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-4 p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <svg 
                    className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 transition-transform duration-300 group-hover:scale-110"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.iconPath} />
                  </svg>
                </div>
                
                {/* Heading */}
                <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: How It Works */}
        <div className="mt-16">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
            How <span className="text-blue-900 underline">Nayara DialHome</span> Works
          </h2>
          
          {/* Steps Grid - Shows 2 columns on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {howItWorksSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Icon with step number indicator */}
                <div className="relative mb-4">
                  <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                    <svg 
                      className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 transition-transform duration-300 group-hover:scale-110"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.iconPath} />
                    </svg>
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappinessAndHowItWorks;