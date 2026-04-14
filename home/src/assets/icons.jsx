import React from "react";

export const AcIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C10 2 9 4 9 6H15C15 4 14 2 12 2Z" fill="#3B82F6" />
    <rect x="6" y="8" width="12" height="12" rx="2" fill="#60A5FA" />
    <path d="M9 11L15 17M15 11L9 17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="14" r="1.5" fill="#FFFFFF" />
  </svg>
);

export const PlumbingIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L8 8H16L18 12" stroke="#3B82F6" strokeWidth="2" fill="none" />
    <path d="M10 12L12 16L14 12" fill="#60A5FA" />
    <rect x="5" y="16" width="14" height="4" rx="1" fill="#3B82F6" />
  </svg>
);

export const CleaningIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13L7 7H17L19 13" fill="#60A5FA" />
    <path d="M8 13L10 9H14L16 13" fill="#3B82F6" />
    <rect x="4" y="16" width="16" height="3" rx="1" fill="#3B82F6" />
  </svg>
);

export const ElectricIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L10 8H14L12 14" stroke="#3B82F6" strokeWidth="2" fill="none" />
    <rect x="8" y="14" width="8" height="8" rx="2" fill="#60A5FA" />
    <circle cx="12" cy="18" r="1" fill="#FFFFFF" />
  </svg>
);

export const PaintingIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="12" height="12" rx="2" fill="#60A5FA" />
    <circle cx="12" cy="10" r="3" fill="#3B82F6" />
    <path d="M12 13L14 16H10L12 13Z" fill="#FFFFFF" />
  </svg>
);

export const DefaultIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#60A5FA" />
    <path d="M12 8V12M12 16H12.01" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const getIconByName = (name) => {
  const iconMap = {
    "AC Repair": AcIcon,
    "Plumbing": PlumbingIcon,
    "Cleaning": CleaningIcon,
    "Electrical": ElectricIcon,
    "Painting": PaintingIcon,
  };
  const IconComponent = iconMap[name] || DefaultIcon;
  return <IconComponent />;
};