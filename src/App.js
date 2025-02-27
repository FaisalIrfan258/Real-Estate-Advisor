import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing Components
import Service from "./Components/Service.js";
import HeroSection from "./Components/HeroSection.js";
import Footer from "./Components/Footer.js";
import FeatureSection from "./Components/FeatureSection.js";
import PrivacyPolicy from "./Components/PrivacyPolicy.js";
import Termsconditons from "./Components/Termsconditons.js";
import AppDashboard from "./pages/dashboard.jsx"
import Main from "./pages/Main.jsx";
import MainDashboard from "./pages/mainDashboard.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing page with Footer */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeatureSection />
                <Service />
                <Footer /> {/* Footer on landing page */}
              </>
            }
          />
         <Route path="/map" element={<Main />} />
          <Route path="/dashboardtwo" element={<AppDashboard/>} />
          <Route path="/dashboard" element={<MainDashboard />} />

          <Route
            path="/privacy-policy"
            element={
              <>
                <PrivacyPolicy />
                <Footer />
              </>
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <>
                <Termsconditons />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




