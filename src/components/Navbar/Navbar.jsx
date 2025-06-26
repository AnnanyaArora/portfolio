import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons
import { Link } from "react-scroll";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Annanya.dev</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth
              duration={500}
              className="cursor-pointer hover:text-blue-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Toggle Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 text-xl"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-4 bg-white dark:bg-gray-900">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth
              duration={500}
              className="cursor-pointer hover:text-blue-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
