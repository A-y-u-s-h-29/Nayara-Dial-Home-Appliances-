import { useState, useMemo } from "react";
import servicesData from "../data/servicedata";

const locations = ["All Locations", "Delhi", "Noida", "Gurugram", "Bangalore"];

export const useServices = () => {
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = useMemo(() => {
    if (selectedLocation === "All Locations") {
      return servicesData;
    }
    return servicesData.filter(
      (service) => service.location === selectedLocation
    );
  }, [selectedLocation]);

  return {
    locations,
    selectedLocation,
    setSelectedLocation,
    filteredServices,
    selectedService,
    setSelectedService,
  };
};