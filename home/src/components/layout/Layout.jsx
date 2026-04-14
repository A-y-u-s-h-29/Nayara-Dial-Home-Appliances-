import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import FloatingButtons from "../common/FloatingButtons";
import HowWeWorkWhyChooseUs from "../home/HowWeWorkWhyChooseUs";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <HowWeWorkWhyChooseUs />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;