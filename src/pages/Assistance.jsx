import React from 'react';
import promo from '../assets/promo.png';
import { useNavigate } from 'react-router-dom';
import { ChartBar, TrendingUp, LineChart, HandCoins } from 'lucide-react';
import { motion } from "framer-motion";
import MarketSection from './MarketSection';
import Investment from './Investment';

const services = [
  {
    title: "Market Analysis",
    description: "Comprehensive market analysis and insights to help you make informed trading decisions.",
    icon: <ChartBar className="h-10 w-10 text-amber-500" />,
    gradient: "from-amber-500/80 to-amber-600/80",
    features: ["Real-time market data", "Technical Analysis", "Trend identification", "Risk assessment"],
  },
  {
    title: "Portfolio Management",
    description: "Professional management of your investment portfolio to optimize returns and minimize risks.",
    icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
    gradient: "from-emerald-500/80 to-emerald-600/80",
    features: ["Asset allocation","Diversification strategies", "Regular rebalancing", "Understanding market movements"],
  },
  {
    title: "Market Guidance",
    description: "Clear practical insights and step-by-step support help traders succeed at every level.",
    icon: <LineChart className="h-10 w-10 text-indigo-500" />,
    gradient: "from-indigo-500/80 to-indigo-600/80",
    features: ["Smart Risk Management", "Real-Time Clarity", "Stepwise Smart Decisions", "Market updates"],
  },
  {
    title: "Capital Growth",
    description: "Track understand and grow your capital with clarity and confidence.",
    icon: <HandCoins className="h-10 w-10 text-purple-500" />,
    gradient: "from-purple-500/80 to-purple-600/80",
    features: ["Weekly P&L overview", "Tip-driven growth Awareness", "Clear Decision View", "Goal-focused Strategy"],
  },
];

const Assistance = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-16 flex flex-col items-center justify-center gap-8 p-6 md:p-12 bg-white">
      
      {/* Text */}
       {/* Image */}
      <div className="w-full flex justify-center">
        <img
          src={promo}
          alt="Trading Dashboard"
        className="w-full max-w-5xl h-auto max-h-[600px] rounded shadow-lg mb-4 mt-6 object-cover"

        />
      </div>
      <div className="w-full text-center">
        <motion.h2
          className="w-full md:w-2/3 lg:w-1/2 mx-auto text-xl md:text-2xl lg:text-3xl font-bold px-4 text-center"
          style={{ color: '#4A51A3' }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
           “Step into the market with clarity, move forward with confidence, and secure your financial future.” 
        </motion.h2>
      </div>

     

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-x-10 gap-y-10 w-full max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="rounded-xl shadow-md overflow-hidden relative bg-gradient-to-br text-white w-full hover:scale-[1.02] transition-transform duration-300"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Card Content */}
            <div className={`p-6 bg-gradient-to-b ${service.gradient}`}>
              <div className="mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-lg mb-4">{service.description}</p>
              <ul className="text-lg space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              {/* Learn More Button */}
              <button
                className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm rounded-md py-2 mt-4 transition-all duration-300"
                onClick={() => navigate('/letstalk')}
              >
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <MarketSection />
      <Investment />
    </section>
  );
};

export default Assistance;
