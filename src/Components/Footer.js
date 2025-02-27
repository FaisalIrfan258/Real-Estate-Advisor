import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current page location

  const scrollToSchedule = (event) => {
    event.preventDefault(); // Prevent default link behavior

    if (location.pathname === "/privacy-policy" || location.pathname === "/terms-and-conditions") {
      // If on the Privacy Policy or Terms & Conditions page, navigate to the home page and scroll to the HeroSection start
      navigate("/"); // Navigate to the home page
      setTimeout(() => {
        const heroSection = document.getElementById("hero"); // Ensure the ID matches the Hero section
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0); // Timeout to ensure navigation happens before scrolling
    } else if (location.pathname === "/") {
      // If already on the main page, scroll to the schedule button
      const emailSection = document.getElementById("email");
      if (emailSection) {
        emailSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // In case you're on any other page, first navigate to the home page and then scroll to the schedule button
      navigate("/"); 
      setTimeout(() => {
        const emailSection = document.getElementById("email");
        if (emailSection) {
          emailSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  const navigateToHero = (event) => {
    event.preventDefault();

    if (location.pathname === "/") {
      // If already on the main page, scroll to the Hero section
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If on another page, navigate to the homepage first, then scroll to Hero section
      navigate("/");
      setTimeout(() => {
        const heroSection = document.getElementById("hero");
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  };

  return (
    <footer className="text-gray-700 py-6" style={{ backgroundColor: "#ECE9F7" }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <a href="/" onClick={navigateToHero}>
          <img
            src="/pier-logo-hdd.png"
            alt="Company Logo"
            className="mx-auto mb-4 w-24 h-auto"
          />
        </a>
        <div className="border-t border-gray-300 my-4"></div>

        {/* Links for Schedule and Contact Us */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-4">
          <a href="#email" onClick={scrollToSchedule} className="text-sm md:text-lg text-gray" style={{ color: "#444853" }}>
            Schedule a Demo
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a href="https://facebook.com" className="text-gray-700 text-2xl font-bold">
            <img src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook" className="w-6 h-6 inline" />
          </a>
          <a href="https://twitter.com" className="text-gray-700 text-2xl font-bold">
            <img src="/x-logo.svg" alt="X" className="w-6 h-6 inline" />
          </a>
          <a href="https://instagram.com" className="text-gray-700 text-2xl font-bold">
            <img src="/instagram.svg" alt="instagram" className="w-6 h-6 inline" />
          </a>
        </div>

        {/* Terms and Privacy */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-500">
          <Link to="/terms-and-conditions" className="mr-0 sm:mr-2">
            Terms & Conditions
          </Link>
          <Link to="/privacy-policy" className="mr-0 sm:mr-2">
            Privacy Policy
          </Link>
        </div>

        {/* Copyright Section */}
        <div className="text-xs text-gray-400 mt-4">
          © 2025 Pier. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
