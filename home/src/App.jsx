import React from "react";
import { Routes, Route } from "react-router-dom";  // Remove BrowserRouter import
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import FloatingButtons from "./components/common/FloatingButtons";
import Hero from "./components/home/Hero";
import MostUsedServices from "./components/home/MostUsedServices";
import ServicesWeProvide from "./components/services/ServicesWeProvide";
import HappinessAndHowItWorks from "./components/home/HappinessFeatures";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import { ServicesProvider } from "./context/ServicesContext";
import servicesData from "./data/services";

function HomePage() {
  return (
    <>
      <Hero />
      <MostUsedServices />
      <ServicesWeProvide />
      <HappinessAndHowItWorks />
    </>
  );
}

function App() {
  return (
    <ServicesProvider servicesData={servicesData}>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service/:id" element={<ServiceDetailPage />} />
          </Routes>
        </main>
        <FloatingButtons />
        <Footer />
      </div>
    </ServicesProvider>
  );
}

export default App;