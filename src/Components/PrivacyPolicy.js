import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom

const PrivacyPolicy = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogoClick = () => {
    navigate('/#hero'); // Navigate to the Hero section
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Fixed Logo */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between p-10 bg-white z-50"> {/* Increased padding */}
        <div className="h-16 pl-9 -mt-3">
          {/* Logo */}
          <img
            src={`${process.env.PUBLIC_URL}/pier-logo-hdd.png`}
            alt="Logo"
            className="h-full cursor-pointer" // Add cursor-pointer for clickable logo
            onClick={handleLogoClick} // Handle logo click
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 relative min-h-screen w-full flex flex-col justify-center items-center mt-20 px-6 sm:px-10 lg:px-16"
        style={{ backgroundImage: "url('/hero.png')" }}> {/* Increased padding */}
        <header
          className="mb-12 relative z-10 bg-opacity-100 mt-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1
            className="text-4xl font-bold text-center"
            style={{
              background: 'linear-gradient(89.87deg, #FFFFFF -50.75%, #325098 70%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            Privacy Policy
          </h1>
          <p
            className="text-lg text-center mt-4"
            style={{
              padding: '1rem',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              color: '#444853',
            }}
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            Learn more about what information we collect and how we use it.
          </p>
        </header>

        <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-screen-2xl bg-white bg-opacity-90 shadow-xl rounded-lg">
          {/* Main Content with Sidebar */}
          <main className="flex flex-col lg:flex-row w-full p-4 lg:p-20 bg-gradient-to-b from-white to-[#E7F0FF] rounded-lg "> {/* Increased padding */}
            {/* Sidebar */}
            <nav className="w-full lg:w-1/4 lg:pr-20 mt-6 lg:mt-16 p-4 lg:p-10 space-y-14 text-lg flex-shrink-0 lg:sticky lg:top-48 lg:h-[calc(100vh-12rem)] lg:overflow-y-auto"
              data-aos="fade-up"
              data-aos-duration="1000">
              <a
                href="#heading1"
                className="block hover:text-blue-600"
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 700,
                  color: '#325098',
                }}>
                Type of information we collect online
              </a>
              <a
                href="#heading2"
                className="block hover:text-blue-600"
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 700,
                  color: '#325098',
                }}>
                Information that may be collected automatically
              </a>
              <a
                href="#heading3"
                className="block hover:text-blue-600"
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 700,
                  color: '#325098',
                }}>
                How we use your information
              </a>
              <a
                href="#heading4"
                className="block hover:text-blue-600"
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 700,
                  color: '#325098',
                }}>
                Information we share
              </a>
              <a
                href="#heading5"
                className="block hover:text-blue-600"
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 700,
                  color: '#325098',
                }}>
                Children privacy
              </a>
              <a
                href="#heading6"
                className="block hover:text-blue-600"
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 700,
                  color: '#325098',
                }}>
                Your privacy choices
              </a>
              <a
                href="#heading7"
                className="block hover:text-blue-600"
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 700,
                  color: '#325098',
                }}>
                Data security
              </a>
              <a
                href="#heading8"
                className="block hover:text-blue-600"
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 700,
                  color: '#325098',
                }}>
                Third party site and social media plug-ins
              </a>

            </nav>

            {/* Content Area */}
            <div className="flex-1 lg:w-3/4 lg:pl-10 p-4 lg:p-16"> {/* Increased padding */}

              <section id="heading1" className="mb-12" data-aos="fade-up">
                <h1 className="text-blue-600" style={{
                  // fontFamily: 'Urbanist', 
                  fontWeight: 700,
                  fontSize: '36px',
                  lineHeight: '50px',
                  letterSpacing: '2%',
                  background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>
                  Type of information we collect online
                </h1>
                <p className="text-lg mt-4" style={{ fontFamily: 'Poppins', color: '#325098', fontWeight: 400, fontSize: '16px' }}>
                  We collect various types of information from and about users of our website and services, including:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                  <li>Personal identifiers (e.g., name, address, email address, phone number)</li>
                  <li>Financial information (e.g., payment details for services)</li>
                  <li>Professional or employment-related information</li>
                  <li>Real estate preferences and search history</li>
                </ul>
              </section>



              <section id="heading2" className="mb-12" data-aos="fade-up">
                <h1 className="text-blue-600" style={{
                  // fontFamily: 'Urbanist', 
                  fontWeight: 700,
                  fontSize: '36px',
                  lineHeight: '50px',
                  letterSpacing: '2%',
                  background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>
                  Information That May Be Collected Automatically
                </h1>
                <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize: 16 }}>
                  When you visit our website or use our online services, we may automatically collect certain information about your equipment,
                  browsing actions, and patterns, including:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                  <li>IP address and device identifiers</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Time zone setting and location</li>
                  <li>Pages viewed and links clicked</li>
                  <li>Date and time stamps of visits</li>
                  <li>Referring website addresses</li>
                </ul>
                <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize: 16 }}>
                  We collect this data using cookies, web beacons, and other similar technologies.
                </p>
              </section>


              <section id="heading3" className="mb-12" data-aos="fade-up">
                <h1 className="text-blue-600" style={{
                  // fontFamily: 'Urbanist', 
                  fontWeight: 700,
                  fontSize: '36px',
                  lineHeight: '50px',
                  letterSpacing: '2%',
                  background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>
                  How We Use Your Information
                </h1>
                <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize: '16px' }}>
                  We use the information we collect about you or that you provide to us, including any personal information:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                  <li>To provide and improve our real estate advisory services</li>
                  <li>To process transactions and send related information</li>
                  <li>To send promotional communications about our services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To personalize your website experience and deliver content relevant to your interests</li>
                  <li>To analyze website usage and optimize our marketing efforts</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section id="heading4" className="mb-12" data-aos="fade-up">
                <h1 className="text-blue-600" style={{
                  // fontFamily: 'Urbanist', 
                  fontWeight: 700,
                  fontSize: '36px',
                  lineHeight: '50px',
                  letterSpacing: '2%',
                  background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>
                  Information We Share
                </h1>
                <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize: '16px' }}>
                  We may disclose aggregated information about our users without restriction. We may share your personal information with:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                  <li>Service providers and contractors who perform services on our behalf</li>
                  <li>Real estate partners to facilitate transactions or services you've requested</li>
                  <li>Legal and regulatory authorities, as required by applicable laws</li>
                  <li>Potential buyers or investors in the event of a business transaction like a merger or acquisition</li>
                </ul>
                <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize: '16px' }}>
                  We do not sell your personal information to third parties.
                </p>
              </section>


              <section id="heading5" className="mb-12" data-aos="fade-up">
                <h1 className="text-blue-600" style={{
                  // fontFamily: 'Urbanist', 
                  fontWeight: 700,
                  fontSize: '36px',
                  lineHeight: '50px',
                  letterSpacing: '2%',
                  background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>
                  Children Privacy
                </h1>
                <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize: '16px' }}>
                  Our website and services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                  If you are under 13, please do not provide any information on this website.
                </p>
              </section>



              <section id="heading6" className="mb-12" data-aos="fade-up">
                <h1 className="text-blue-600" style={{
                  // fontFamily: 'Urbanist', 
                  fontWeight: 700,
                  fontSize: '36px',
                  lineHeight: '50px',
                  letterSpacing: '2%',
                  background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>
                  Your Privacy Choices
                </h1>
                <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize: '16px' }}>
                  You have several choices regarding the use of information on our services:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400 }}>
                  <li>Tracking Technologies: You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent</li>
                  <li>Promotional Offers: You can opt-out of receiving promotional emails by following the unsubscribe link in each email.</li>
                  <li>Access and Correction: You can review and change your personal information by logging into your account or contacting us directly.</li>
                  <li>Do Not Track Signals: We currently do not respond to "do not track" signals from web browsers</li>
                </ul>
              </section>


              <section id="heading7" className="mb-12" data-aos="fade-up">
                <h1 className="text-blue-600" style={{
                  // fontFamily: 'Urbanist', 
                  fontWeight: 700,
                  fontSize: '36px',
                  lineHeight: '50px',
                  letterSpacing: '2%',
                  background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>
                  Data Security
                </h1>
                <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize: '16px' }}>
                  We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use,
                  alteration, and disclosure. However,
                  the transmission of information via the internet is not completely secure, and we cannot guarantee the security of your personal information transmitted to our website.
                </p>
              </section>



              <section id="heading8" className="mb-12" data-aos="fade-up">
                <h1 className="text-blue-600" style={{
                  // fontFamily: 'Urbanist', 
                  fontWeight: 700,
                  fontSize: '36px',
                  lineHeight: '50px',
                  letterSpacing: '2%',
                  background: 'linear-gradient(to right, #8CA8BE 10%, #325098 100%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}>
                  Third-Party Site and social media plug-ins
                </h1>
                <p className="text-lg mt-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#325098', fontWeight: 400, fontSize: '16px' }}>
                  Our website may contain links to third-party websites or include social media features.
                  These third-party sites have separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked sites. However,
                  we seek to protect the integrity of our site and welcome any feedback about these sites.
                </p>
              </section>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

