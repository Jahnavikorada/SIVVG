import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import newlogo from "../assets/newlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

 const bgColor =
  scrolled || isOpen
    ? "bg-[#4b4d9c] text-white shadow-lg"
    : "bg-transparent text-white";

const mobileBg =
  scrolled || isOpen
    ? "bg-white text-black shadow-lg"
    : "bg-[#4b4d9c] text-white";
    
  const isActive = (path) => location.pathname === path;
  const linkClasses = (path) =>
    `transition-colors duration-200 ${
      isActive(path)
        ? "text-yellow-400 font-bold"
        : scrolled
        ? "hover:text-blue-300"
        : "hover:text-blue-200"
    }`;

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/home" className="flex items-center space-x-2">
          <img
            src={newlogo}
            alt="SIVVG Logo"
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
          />
          <span className="text-xl md:text-3xl font-bold tracking-wide">SIVVG</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-lg md:text-xl">
          <Link to="/home" className={linkClasses("/home")}>Home</Link>
          <Link to="/about" className={linkClasses("/about")}>About</Link>
          <Link to="/ourassistance" className={linkClasses("/ourassistance")}>Our Assistance</Link>
          <Link to="/letstalk" className={linkClasses("/letstalk")}>Let’s Talk</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
           <button
    onClick={() => setIsOpen(!isOpen)}
    className={`p-2 rounded-md transition-colors ${
      scrolled || isOpen
        ? "bg-white text-black"
        : "bg-[#4b4d9c] text-white"
    }`}
  >
    {isOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden px-4 pb-4 flex flex-col space-y-3 ${mobileBg}`}>
          <Link
            to="/home"
            onClick={() => setIsOpen(false)}
            className={`${linkClasses("/home")} block text-center py-2`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`${linkClasses("/about")} block text-center py-2`}
          >
            About
          </Link>
          <Link
            to="/ourassistance"
            onClick={() => setIsOpen(false)}
            className={`${linkClasses("/ourassistance")} block text-center py-2`}
          >
            Our Assistance
          </Link>
          <Link
            to="/letstalk"
            onClick={() => setIsOpen(false)}
            className={`${linkClasses("/letstalk")} block text-center py-2`}
          >
            Let’s Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
