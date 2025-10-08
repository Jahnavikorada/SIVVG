// src/components/DownloadAppSection.jsx
import React from "react";
import { FaBell, FaChartLine, FaMobileAlt, FaApple, FaGooglePlay } from "react-icons/fa";
import iphone from "../assets/iphone.png";
import iphone2 from "../assets/iphone2.png";
import qr from "../assets/qr.png";

const DownloadAppSection = () => {
  return (
    <section className="bg-[#6768c9] text-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-8xl mx-auto max-h-auto grid grid-cols-1 lg:grid-cols-3 gap-15 items-center text-center lg:text-left">
        
        {/* Left Column - Features */}
        <div className="space-y-6 mr-4">
          <h2 className="text-2xl lg:text-4xl font-extrabold">
            Download the{" "}
            <span className="text-white">SIVVG App</span>
          </h2>

          <p className="text-gray-300">
            Trade smarter, grow faster and achieve financial freedom with SIVVG by your side.
          </p>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaBell className="text-white text-xl mt-1" />
              <h3 className="font-semibold text-lg">Real-time Alerts</h3>
            </div>
            <div className="flex items-start gap-3">
              <FaChartLine className="text-white text-xl mt-1" />
              <h3 className="font-semibold text-lg">Accurate Tips</h3>
            </div>
            <div className="flex items-start gap-3">
              <FaMobileAlt className="text-white text-xl mt-1" />
              <h3 className="font-semibold text-lg">Transparent & Efficient</h3>
            </div>
          </div>
           <div className="flex gap-4 mt-4">
            <a
              href="https://apps.apple.com/app/idYOUR_APP_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-cyan-400 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition shadow-md"
            >
              <FaApple size={18} /> App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-green-300 px-4 py-2 rounded-lg font-medium hover:bg-green-400/10 transition shadow-md"
            >
              <FaGooglePlay size={18} /> Google Play
            </a>
          </div>

          <p className="text-xs text-gray-300 mt-2">
            * Free download. Premium features available with subscription.
          </p>
          <p className="text-sm text-white mt-1">
            SEBI Registration Number - INR0017042821
          </p>
        </div>

        {/* Middle Column - QR + CTA */}
        <div className="flex flex-col items-center space-y-6">
          <p className="text-white font-semibold text-base sm:text-lg">
            Scan here — your trading journey starts soon
          </p>
          <img src={qr} alt="QR Code" className="w-24 sm:w-28 md:w-32" />
          <p className="text-green-300 font-semibold text-sm sm:text-base md:text-lg">
            #Made for tip recommendations
          </p>

          <h3 className="text-lg sm:text-xl md:text-2xl font-medium mt-2">
            Open your SIVVG account in minutes!
          </h3>

          <a
            href="https://w3schools.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex justify-center"
          >
            <button className="bg-yellow-400 text-black px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-yellow-300 transition">
              Get Started Now →
            </button>
          </a>

         
        </div>

        {/* Right Column - Phone Mockups */}
       <div className="flex flex-col items-center md:w-1/2 mt-12 lg:mb-20 space-y-8 ml-30"> {/* Stacked Phone Images */} 
       <div className="relative w-48 md:w-64 lg:w-72 h-[300px] md:h-[400px] lg:h-[480px] mb-20 flex justify-center"> 
        <img src={iphone2} alt="Android App" className="absolute md:w-40 rotate-[0deg] w-80 lg:w-[400px] rounded-2xl "
         style={{ top: "20px", left: "-120px" }} /> 
        <img src={iphone} alt="iOS App" className="absolute md:w-40 w-100 lg:w-[400px] rounded-2xl "
         style={{ top: "80px", left: "140px" }} /> 
         </div>
          </div>
          </div>
    </section>
  );
};

export default DownloadAppSection;
