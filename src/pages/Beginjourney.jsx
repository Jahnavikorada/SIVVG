import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const nextVideo = new URL("../assets/section4vedio.mp4", import.meta.url).href;
const nextPoster = new URL("../assets/section.png", import.meta.url).href;

const NextSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.loop = true;
    v.playsInline = true;

    const p = v.play();
    if (p && typeof p.then === "function") {
      p.catch(() => {});
    }
  }, []);

  return (
    <motion.section className="py-2 px-4 md:px-20 text-center">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-800  mb-16 mt-6 md:mt-16 lg:mt-20 ">
        <span className="bg-[#4b4d9c] bg-clip-text text-transparent">
          Explore Our Features
        </span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
        <motion.div className="w-full max-w-md md:max-w-lg">
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            <div className="hidden md:block w-full">
              <video
                ref={videoRef}
                src={nextVideo}
                poster={nextPoster}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="block md:hidden w-full">
              <img
                src={nextPoster}
                alt="Feature poster"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        <motion.div className="text-gray-800 max-w-2xl text-left md:text-left">
          <h3 className="text-xl text-[#4b4d9c] sm:text-2xl md:text-3xl font-semibold mb-4">
            Powerful Trading Insights
          </h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Discover advanced trading tools designed to make your market analysis faster and smarter.
            Our features provide live stock data, trend visualization, and actionable insights so you can stay ahead in any market condition.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NextSection;
