import { CheckCircle, Eye, Lightbulb, Users, TrendingUp, Shield, HeartHandshake, ShieldCheck } from "lucide-react";
import About from './assets/about.png';
import Letstalk from "./pages/Letstalk";

export default function AboutSection() {
  return (
    <div className="bg-white text-gray-800">
      {/* Who We Are */}
     {/* First Section */}
<section className="max-w-8xl mx-auto px-4 py-60 grid md:grid-cols-2 gap-15 items-center ml-10">
  {/* Text */}
  <div>
    <h1 className="text-5xl text-[#26215f] font-bold mb-10">
      Empowering Your Trading Journey
    </h1>
    <p className="text-2xl mt-2 leading-relaxed ">
      In SIVVG, we empower traders with clear, reliable and data-driven intraday insights.
      Our journey began with a simple vision to turn every effort into tomorrow’s success. Challenges strengthened our commitment and today
      we are a trusted partner for traders at every level.
    </p>
  </div>

  {/* Image */}
  <div className="flex justify-center mr-2">
    <img
      src={About}
      alt="about"
      className="rounded-lg shadow-lg w-full sm:w-1000 lg:w-full h-auto"
    />
  </div>
</section>

{/* Our Pillars */}
<section className="bg-purple-50 py-30">
  <h2 className="text-center text-5xl font-bold mb-10">
    What is SIVVG..!
  </h2>
  <p className="text-center text-3xl mb-10">
    “Built on principles of excellence, innovation and success.”
  </p>

  {/* Align paragraph width to first section */}
  <div className="max-w-7xl mx-auto px-6">
    <p className="text-2xl leading-relaxed text-center">
      At SIVVG,we are dedicated to providing smart trading solutions and practical strategies that empower every trader.
      With a forward-looking vision, we help clients achieve lasting success while staying flexible and responsive in dynamic markets. 
      Our focus on sustainable progress ensures that both financial growth and personal development move together, making trading a 
      confident and rewarding experience. 
      Real-time performance tracking allows traders to clearly see results, bringing transparency and confidence to every decision.
    </p>
  </div>
</section>



      {/* Our Values */}
      <section className="max-w-6xl mx-auto py-50">
        <h2 className="text-center text-5xl font-bold mb-20 -mt-30">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-start space-x-4">
            <TrendingUp className="text-purple-600 w-10 h-10" />
            <div>
              <h4 className="font-semibold text-3xl mb-4 space-x-4">Sustainable Growth</h4>
              <p className="text-xl mb-20 ">Empowering long-term success through discipline, innovation, and consistency.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Shield className="text-purple-600 w-10 h-10" />
            <div>
              <h4 className="font-semibold text-3xl mb-4">Safety</h4>
              <p className="text-xl" >Smart risk awareness ensures stronger decisions and safer trading outcomes.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <HeartHandshake className="text-purple-600 w-10 h-10" />
            <div>
              <h4 className="font-semibold text-3xl mb-4">Teamwork</h4>
              <p className="text-xl">United efforts spark innovation 
                and success we achieve more together.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <ShieldCheck className="text-purple-600 w-10 h-10" />
            <div>
              <h4 className="font-semibold text-3xl mb-4">Integrity</h4>
              <p className="text-xl">Honest and reliable insights you can trust—every signal, every session.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Future of Trading */}
     <section className="bg-[#6768c9] text-white py-16 text-center">
  <h2 className="text-4xl font-bold mb-4">Join Us To Build Your Future</h2>
  <p className="max-w-3xl text-lg mx-auto">
    Start your journey to trading excellence with SIVVG today.
  </p>

  <a href="/Letstalk">
    <button
      type="button"
      className="w-[200px] bg-white text-[#4B50A5] py-2 rounded-md font-semibold mt-10 gap-2 hover:opacity-90 transition"
    >
      <span className="text-xl">Let's Talk</span>
    </button>
  </a>
</section>

    </div>
  );
}
