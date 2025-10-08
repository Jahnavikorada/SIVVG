import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1a1f3c] to-[#0d1128] text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-2">
              
            </div>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              SIVVG
            </h1>
          </div>
          <p className="text-gray-400 leading-6">
            Professional trading tips and investment strategies to maximize your
            portfolio performance.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <a href="/home" className="hover:text-cyan-400 transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-cyan-400 transition">About</a>
            </li>
            <li>
              <a href="/ourassistance" className="hover:text-cyan-400 transition">Our Assistance</a>
            </li>
            <li>
              <a href="/letstalk" className="hover:text-cyan-400 transition">Let's Talk</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <div className="flex items-center space-x-2 mb-3">
            <Mail className="w-5 h-5 text-cyan-400" />
            <a
              href="mailto:contact@sivvg.com"
              className="hover:text-cyan-400 transition"
            >
              sivvginfo@gmail.com
            </a>
          </div>
          <p className="text-gray-400">Mon-Fri: 8:30 AM - 4:00 PM </p>
           
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex space-x-5">
            <a href="#" aria-label="Twitter" className="hover:text-cyan-400 transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 SIVVG Trading. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
