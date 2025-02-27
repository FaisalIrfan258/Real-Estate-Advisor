import React from "react";

const AdvisorsSection = () => {
  const advisors = [
    {
      name: "James Thompson",
      title: "Senior Real Estate Investment Advisor",
      image: "images/advisor1.png",
      description:
        "James Thompson is our Senior Real Estate Investment Advisor, bringing a wealth of expertise and a strategic mindset to our team. With over a decade of experience in real estate investment and market analysis,",
      link: "#",
    },
    {
      name: "Alex Jordan",
      title: "Strategic Reality Partner",
      image: "images/advisor2.png",
      description:
        "Alex Jordan is our Strategic Reality Partner, a seasoned professional with a keen eye for strategic opportunities and a passion for driving success. With a background in both strategic planning and real estate, Alex excels in forging valuable partnerships and navigating complex market.",
      link: "#",
    },
    {
      name: "Taylor Morgan",
      title: "Senior Real Estate Investment Advisor",
      image: "images/advisor3.png",
      description:
        "Taylor Morgan is our Senior Real Estate Investment Advisor, bringing a wealth of experience and a deep understanding of the real estate market. With a track record of successful investments and a strategic approach to real estate.",
      link: "#",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 font-poppins" data-aos="fade-up">
      <div className="mb-2 flex justify-center">
        <span
          className="px-6 py-2 text-[22px] font-semibold font-urbanist rounded-[4px]"
          style={{
            background:
              "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
            color: "#FFFFFF",
          }}
          data-aos="fade-in"
        >
          OUR ADVISOR
        </span>
      </div>
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[40px] font-bold mb-12 p-2 text-transparent bg-clip-text text-center mt-12"
        style={{
          background: "linear-gradient(91.21deg, #8CA8BE 35.19%, #325098 99.73%)",
          WebkitBackgroundClip: "text",
          fontFamily: "Urbanist",
          fontWeight: 1000,
          letterSpacing: 1,
        }}
        data-aos="fade-up"
      >
        Meet Our Advisor
      </h1>
      <p className="mb-2 text-center mt-10 max-w-2xl mx-auto" style={{ color: "#332D4F", fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px'}}>
      Our mission to deliver exceptional service and results is our dedicated advisor, 
      who brings a wealth of experience and knowledge to the table. Our advisor plays a crucial role in steering our strategic direction.
      </p>
      <div className="container mx-auto pt-8 sm:pt-16 lg:pt-32">
        <div className="flex flex-col lg:flex-row justify-start items-start lg:space-x-4 space-y-6 lg:space-y-0">
          {/* Advisors Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-2/3">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className={`relative group w-full ${
                  index === 0
                    ? "lg:h-[400px] sm:h-[450px] h-[450px] mt-24"
                    : index === 1
                    ? "lg:h-[500px] sm:h-[450px] h-[450px] mt-12"
                    : "lg:h-[500px] sm:h-[450px] h-[450px]"
                } rounded-xl overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:-translate-y-2`}
                data-aos="fade-up"
                data-aos-delay={index * 100} // Add delay for staggered effect
              >
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={advisor.image}
                  alt={advisor.name}
                />
                {/* Name and Title are fixed at bottom */}
                <div className="absolute bottom-0 left-0 w-full opacity-90 text-white p-4 z-10">
                  <div className="font-poppins text-lg">{advisor.name}</div>
                  <p className="text-sm">{advisor.title}</p>
                </div>
                {/* Shutter Effect for Description */}
                <div className="absolute inset-0 flex flex-col justify-start">
                  <div className="absolute inset-0 flex flex-col justify-start transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                    <div
                      className="w-full h-full flex flex-col p-4"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(50, 80, 152, 1) 0%, rgba(68, 72, 83, 0.5) 100%)",
                      }}
                    >
                      <h2 className="text-xl text-white mb-2 mt-4">
                        Investment Advisor
                      </h2>
                      <p className="text-white text-base text-left">
                        {advisor.description}
                      </p>
                      <a
                        href={advisor.link}
                        className="text-white font-semibold mt-4 inline-block"
                      >
                        Learn More &#x2B9E;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Why Our Advisors Stand Out Section */}
          <div className="lg:w-1/3 p-4">
            <h1
              className="text-2xl sm:text-3xl font-semibold mb-4 text-transparent bg-clip-text text-left"
              style={{
                background:
                  "linear-gradient(90.46deg, #325098 -24.51%, #FBD0E1 104.69%)",
                WebkitBackgroundClip: "text",
              }}
              data-aos="fade-left"
            >
              Why Our Advisors Stand Out
            </h1>
            <p
              className="text-gray-600 mb-6"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "30px",
              }}
              data-aos="fade-up"
            >
              With years of industry experience, our advisor has a deep understanding of the market and the challenges that businesses face. 
              Their extensive background equips them with the skills and knowledge necessary to navigate complex scenarios and drive successful outcomes.
            </p>
            <p
              className="text-gray-600 mb-8"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "30px",
              }}
              data-aos="fade-up"
            >
              Our advisor is committed to supporting you throughout your journey. 
              From initial consultations to ongoing strategy refinement, they are here to ensure your success and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;
