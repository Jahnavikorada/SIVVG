import React from "react";
import welcome from "../assets/welcome.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.06,
    },
  },
};

const leftVariant = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const rightVariant = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function WelcomeSection() {
  return (
    <section className="bg-white px-6 md:px-16 py-20 min-h-[60vh]">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }} // triggers when ~35% visible
      >
        {/* Left Content - slides from left */}
        <motion.div variants={leftVariant} className="px-2">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center md:text-left">
            Welcome to{" "}
            <span className="text-[#4b4d9c]">SIVVG</span>{" "}
            <span className="text-green-500">World</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6 text-center md:text-left leading-relaxed">
            Upgrade your trading journey with practical market insights, expert strategies,
            and solid risk management. Join thousands of successful traders who trust SIVVG for market-beating returns.
             SIVVG Infotech provides traders with precise, actionable intraday strategies and clear market analysis.
            Built on thorough market research, dedicated effort, effective strategies and outcome-oriented guidance
            we deliver consistent support to help every trader achieve financial growth and long-term independence.
          </p>

          {/* <p className="text-lg md:text-xl text-gray-700 mb-6 text-center md:text-left leading-relaxed">
            SIVVG Infotech provides traders with precise, actionable intraday strategies and clear market analysis.
            Built on thorough market research, dedicated effort, effective strategies and outcome-oriented guidance,
            we deliver consistent support to help every trader achieve financial growth and long-term independence.
          </p> */}
        </motion.div>

        {/* Right Image - slides from right (with fallback if import fails) */}
        <motion.div
          variants={rightVariant}
          className="flex justify-center md:justify-end px-2"
        >
          {welcome ? (
            <img
              src={welcome}
              alt="Welcome"
              className="w-full max-w-md md:max-w-xl rounded-lg shadow-lg object-cover"
            />
          ) : (
            <div className="w-full max-w-md md:max-w-xl h-64 rounded-lg shadow-lg bg-gray-100 flex items-center justify-center text-gray-500">
              Image not found
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
