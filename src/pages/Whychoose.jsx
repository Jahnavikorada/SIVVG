import React from "react";
import { Handshake, Search, Target, Compass } from "lucide-react"; // icons

const WhyChooseSIVVG = () => {
  const features = [
    {
      icon: <Handshake className="w-10 h-10 text-purple-700" />,
      title: "Trusted",
      desc: "We are a Reliable partner for traders, guided by honesty and transparency.",
      gradient: "bg-gradient-to-r from-purple-100 to-indigo-100",
    },
    {
      icon: <Search className="w-10 h-10 text-blue-700" />,
      title: "Research Based Tips",
      desc: "Deep market analysis and strong team collaboration create effective strategies.",
      gradient: "bg-gradient-to-r from-blue-100 to-cyan-100",
    },
    {
      icon: <Target className="w-10 h-10 text-orange-700" />,
      title: "Focus",
      desc: "Careful attention to every trade and market movement ensures accurate decisions.",
      gradient: "bg-gradient-to-r from-orange-100 to-amber-100",
    },
    {
      icon: <Compass className="w-10 h-10 text-teal-700" />,
      title: "Smart Moves & Determination",
      desc: "Even after setbacks, consistent effort and learning from experience lead to lasting success.",
      gradient: "bg-gradient-to-r from-teal-100 to-emerald-100",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Why Choose <span className="text-indigo-600">SIVVG</span>
        </h2>
        <p className="text-lg text-gray-600 mb-15">
          We provide the right guidance, strategies and support to help every trader succeed.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className={`${item.gradient} rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300`}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSIVVG;
