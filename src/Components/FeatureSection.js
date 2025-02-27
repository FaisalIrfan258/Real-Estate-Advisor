import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: false, // Allow animation to happen more than once
      mirror: true, // Enable animation on scroll up
    });
  }, []);

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-40 overflow-x-hidden">
      {/* Core Features Header */}
      <div className="mb-2 flex justify-center">
        <h1
          className="text-[22px] font-bold font-urbanist bg-clip-text text-transparent"
          data-aos="fade-up"
          style={{
            backgroundImage: "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
          }}
        >
          CORE FEATURES
        </h1>
      </div>

      {/* Main Features Header */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold mb-12 text-transparent bg-clip-text text-center mt-16"
        style={{
          background: "linear-gradient(91.21deg, #8CA8BE 35.19%, #325098 99.73%)",
          WebkitBackgroundClip: "text",
          fontWeight: 1000,
          fontFamily: "Urbanist",
          letterSpacing: 1,
        }}
        data-aos="fade-up"
      >
        Main Features Of Our Platform
      </h2>

      {/* AI Integration Section */}
      <div
        className="flex flex-col md:flex-row bg-white overflow-hidden mb-12 rounded-lg md:space-x-4 lg:space-x-8"
        data-aos="fade-right"
      >
        <div className="w-full md:w-1/2 p-4">
          <img
            src="/image1.png"
            alt="AI Integration"
            className="w-full h-full object-cover rounded-lg"
            style={{ aspectRatio: "16/9", borderRadius: "12px" }}
          />
        </div>

        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-left">
          <h1
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              WebkitBackgroundClip: "text",
            }}
          >
            AI Integration
          </h1>
          <h4
            className="mb-4 text-sm md:text-base lg:text-lg"
            style={{ color: "#8CA8BE" }}
          >
            Advanced AI for Market Trend Analysis
          </h4>
          <p className="text-gray-500 mb-4 text-sm md:text-base lg:text-lg">
            In today’s fast-paced financial landscape, staying ahead of market trends is crucial. 
            Our Advanced AI for Market Trend Analysis leverages state-of-the-art artificial intelligence to provide you with unparalleled insights and predictive power.
          </p>
          <p className="text-gray-500 text-sm md:text-base lg:text-lg">
            Transform complex data into actionable insights with intuitive and interactive visualizations. 
            Our platform presents data in a clear, visually engaging format, making it easier to interpret and act upon.
          </p>
        </div>
      </div>

      {/* Analytics Tools Section (Image on the right, text on the left) */}
      <div
        className="flex flex-col md:flex-row bg-white overflow-hidden mb-12 rounded-lg md:space-x-4 lg:space-x-8"
        data-aos="fade-left"
      >
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-left">
          <h1
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              WebkitBackgroundClip: "text",
            }}
          >
            Analytics Tools
          </h1>
          <h4
            className="mb-4 text-sm md:text-base lg:text-lg"
            style={{ color: "#8CA8BE" }}
          >
            Comprehensive Analytics Tools
          </h4>
          <p className="text-gray-500 mb-4 text-sm md:text-base lg:text-lg">
            Access real-time insights with our dynamic analytics tools. Monitor performance, 
            track key metrics, and respond to emerging trends instantly, 
            ensuring that you stay ahead in a fast-paced market.
          </p>
          <p className="text-gray-500 text-sm md:text-base lg:text-lg">
            Seamlessly integrate data from multiple sources, including CRM systems, social media platforms, financial databases, 
            and more. Our tools unify your data into a single, 
            accessible platform, providing a holistic view of your business.
          </p>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <img
            src="/image2.png"
            alt="Analytics Tools"
            className="w-full h-full object-cover rounded-lg"
            style={{ aspectRatio: "16/9", borderRadius: "12px" }}
          />
        </div>
      </div>

      {/* Real Estate Insights Section */}
      <div
        className="flex flex-col md:flex-row bg-white overflow-hidden mb-12 rounded-lg md:space-x-4 lg:space-x-8"
        data-aos="fade-right"
      >
        <div className="w-full md:w-1/2 p-4">
          <img
            src="/image3.png"
            alt="Real Estate Insights"
            className="w-full h-full object-cover rounded-lg"
            style={{ aspectRatio: "16/9", borderRadius: "12px" }}
          />
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-left">
          <h1
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              WebkitBackgroundClip: "text",
            }}
          >
            Real Estate Insights
          </h1>
          <h4
            className="mb-4 text-sm md:text-base lg:text-lg"
            style={{ color: "#8CA8BE" }}
          >
            Actionable Real Estate Insights
          </h4>
          <p className="text-gray-500 mb-4 text-sm md:text-base lg:text-lg">
            Our AI models analyze vast amounts of data from multiple sources, offering detailed market analysis that highlights emerging trends, 
            price fluctuations, and investment opportunities. Whether you are looking to invest in residential or commercial properties, 
            our tools provide actionable insights to help you make the best decisions.
          </p>
          <p className="text-gray-500 text-sm md:text-base lg:text-lg">
            For real estate investors managing multiple properties,
            Monitor growth, assess market positioning, and make strategic adjustments to optimize your returns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
