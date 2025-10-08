import React from 'react';
import { Star, AlertCircle, TargetIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import cardsimg from './assets/cardsimg.png';

const cards = [
  {
    icon: <Star className="text-yellow-500 w-6 h-6" />,
    title: 'Our Mission',
    text: 'To empower traders daily with actionable insights, smart tools and proven strategies.',
    border: 'border-l-4 border-yellow-500',
    shadow: 'shadow-lg',
  },
  {
    icon: <AlertCircle className="text-yellow-500 w-6 h-6" />,
    title: 'Our Vision',
    text: 'To build a community of self-reliant traders guided by clarity, confidence and consistency.',
    border: 'border-l-4 border-purple-600',
    shadow: 'shadow-lg',
  },
  {
    icon: <TargetIcon className="text-yellow-500 w-6 h-6" />,
    title: 'Our Goal',
    text: 'To become India’s most trusted source for intraday signals and market intelligence.',
    border: 'border-l-4 border-blue-500',
    shadow: 'shadow-lg',
  },
];

// Reusable Card component with slide-in animation
const SlideInCard = ({ card, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2,
  });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0, ease: 'easeOut', delay: index * 0.6 }} // 👈 delay per card
        className={`bg-white ${card.border} ${card.shadow} rounded-md p-4 flex gap-4 items-start transform transition duration-300 ease-in-out hover:scale-105`}
      >
        <div>{card.icon}</div>
        <div>
          <h3 className="text-lg font-bold text-[#2C2CA0]">{card.title}</h3>
          <p className="text-sm text-gray-700 mt-1">{card.text}</p>
        </div>
      </motion.div>
    </div>
  );
};

const Section4 = () => {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Cards */}
        <div className="space-y-6">
          {cards.map((card, idx) => (
            <SlideInCard key={idx} card={card} index={idx} />
          ))}
        </div>

        {/* Right: Image */}
        <div>
          <img
            src={cardsimg}
            alt="About"
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;
