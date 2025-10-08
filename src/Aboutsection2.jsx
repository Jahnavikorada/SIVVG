import React from 'react'
import Section3 from './Section3'

const AboutSection2 = () => {
  return (
    <>
    <section>
  <div className="w-full h-auto  bg-white"> {/* py-8 px-4  */}
      {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8"> */}
        <div className="p-15"> {/*shadow-sm rounded-lg p-6 bg-[#E6E6FA]*/}
          <h2 className="text-3xl md:text-3xl font-bold text-[#4b4d9c] text-center  mb-10">
            Who we are
          </h2>
          <p className="text-gray-800 text-base leading-relaxed mb-4 text-center md:text-xl max-w-7xl mx-auto">
            At SIVVG Trading, we believe in making smart trading simple. We're a passionate team driven by the power of markets and data,
            working to deliver reliable, real-time trading solutions. Our goal is clear: to bridge the gap between opportunity and success.
            With a focus on transparency, integrity and innovation, we offer trading services that are easy to access, secure and built for results.
            Whether you're just starting out or scaling up, SIVVG Trading is here to support your journey - step by step, trade by trade.
          </p>
          {/* <p className="text-gray-800 text-base leading-relaxed text-center md:text-left">
            We believe trading isn't just about luck—it's about learning, adapting and staying ahead. That's why our platform is built to guide your every move with clarity, confidence and consistency.
          </p> */}
        </div>
      </div>
      </section>
  <Section3 />
    </>
    
  )
}

export default AboutSection2;
