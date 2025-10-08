import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section4 from './Section4';
import inte from './assets/inte.png';
import team from './assets/team.png';
import secure from './assets/secure.png';
import growth from './assets/growth.png';

const values = [
  {
    icon: growth,
    alt: 'Growth',
    title: 'Sustainable Growth',
    description: 'Empowering traders to grow steadily - with data, discipline and direction.',
  },
  {
    icon: secure,
    alt: 'Secure',
    title: 'Safety',
    description: 'Risk awareness is the foundation of successful trading.',
  },
  {
    icon: team,
    alt: 'Team',
    title: 'TeamWork',
    description: 'Collaboration fuels our innovation. We grow together.',
  },
  {
    icon: inte,
    alt: 'Integrity',
    title: 'Integrity',
    description: 'Transparent, reliable insights. Every signal, every session.',
  },
];

// Component for each value with scroll-based animation
const ValueItem = ({ val, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false }); // 👈 repeat animation

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, opacity: 1 });
    } else {
      controls.start({ scale: 0.8, opacity: 0 });
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="flex items-start gap-4">
      <motion.div
        className="border-r-2 border-gray-200 pr-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      >
        <img src={val.icon} alt={val.alt} className="w-10 h-10" />
      </motion.div>
      <div>
        <h3 className="text-lg md:text-xl font-bold text-[#6C3BFF]">{val.title}</h3>
        <p className="text-gray-700 mt-1">{val.description}</p>
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <>
      <section className="w-full bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl text-center sm:text-4xl md:text-5xl font-bold text-blue-800 mb-16 mt-5">
            <span className="bg-[#4b4d9c] bg-clip-text text-transparent">
              Our Values
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {values.map((val, index) => (
              <ValueItem key={index} val={val} index={index} />
            ))}
          </div>
        </div>
      </section>
      <Section4 />
    </>
  );
};

export default Section3;
