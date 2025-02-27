import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ServicesSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true,     // Trigger animation only once
    });
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 -mt-10 overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-0 lg:max-w-full">
        <div
          className="flex flex-col justify-center items-center"
          data-aos="fade-up"
        >
          <div className="mb-2 flex justify-center">
            <h1
              className="text-[22px] font-bold font-urbanist bg-clip-text text-transparent"
              data-aos="fade-up"
              style={{
                backgroundImage:
                  "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
              }}
            >
              OUR SERVICES
            </h1>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[40px] font-bold mb-16 p-2 text-transparent bg-clip-text text-center mt-8"
            style={{
              background:
                "linear-gradient(91.21deg, #8CA8BE 35.19%, #325098 99.73%)",
              WebkitBackgroundClip: "text",
              fontWeight: 1000,
              fontFamily: "Urbanist",
              letterSpacing: 1,
            }}
            data-aos="fade-up"
          >
            How Our Platform Works
          </h2>

          <p
            className="mb-6 text-center mt-2 max-w-2xl mx-auto"
            style={{
              color: "#332D4F",
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "18px",
            }}
          >
            We offer a range of innovative services designed to streamline your real estate investments and operations.
          </p>
        </div>

        <div className="flex flex-col mt-10 lg:flex-row lg:items-start">
          {/* Image Section */}
          <div
            className="w-full lg:w-6/12  lg:mt-24 lg:ml-10"
            data-aos="fade-right"
          >
            <img
              src="/images/feature4.png"
              alt="An illustration of a city in hand, representing our platform's capabilities"
              className="w-full h-auto max-h-[800px] object-cover shadow-lg"
              style={{
                height: "auto", // Auto height to maintain aspect ratio
                borderBottomRightRadius: "50px"
              }}
            />
          </div>

          {/* Text Section */}
          <div
            className="w-full lg:w-1/2 mt-8  lg:pl-12 px-4 lg:ml-16 lg:mt-10"
            data-aos="fade-left"
          >
            <h3
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-semibold mb-4"
              style={{
                background:
                  "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Best Service <span>For You</span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mt-6 lg:mt-10 ">
              Leverage state-of-the-art AI technology to gain deep insights into market trends, property values, and emerging opportunities. 
              Our analytics tools provide actionable data to help you make informed investment decisions. Obtain accurate and reliable property valuations using our advanced algorithms. Whether you’re buying, selling, or managing properties, our appraisals help ensure fair market value.
            </p>
            <ul className="list-disc list-inside mt-6 lg:mt-10 mb-6 text-[#325098] text-sm sm:text-base md:text-lg lg:text-xl">
              <li key="predictive-analytics" className="mb-2">
                Predictive Analytics
              </li>
              <li key="future-value-insights" className="mb-2">
                Future Value Insights
              </li>
              <li key="investment-opportunities" className="mb-2">
                Investment Opportunities
              </li>
            </ul>

            {/* Button to navigate to Main.jsx */}
            <button
              onClick={() => navigate('/dashboard')} 
              className="mt-8 px-6 py-2 bg-[#325098] text-white rounded shadow hover:bg-[#25468b]"
            >
              Dashboard  
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

