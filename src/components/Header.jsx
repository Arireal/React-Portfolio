import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Smooth scroll function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header height
        behavior: 'smooth'
      });
      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };
  
  return (
    <header className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Ariane Souza</div>
        <nav className="flex items-center justify-between p-4 mr-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {['About', 'Skills', 'Projects', 'Contact'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-blue-500 transition-colors"
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
              >
                {item}
              </a>
            ))}
            <a
              href="https://ariane-souza.myportfolio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              Ux Core
            </a>
          </div>
          {/* Desktop Dark Mode Toggle */}
          <div className="hidden md:block ml-4">
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-gray-600" />}
            </button>
          </div>
          {/* Mobile and Tablet Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-3xl text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? '×' : '≡'}
            </button>
            {isMobileMenuOpen && (
              <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4">
                {['About', 'Skills', 'Projects', 'Contact'].map(item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-lg hover:text-blue-500 py-2"
                    onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="https://ariane-souza.myportfolio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg hover:text-blue-500 py-2"
                  onClick={toggleMenu}
                >
                  Ux Core
                </a>
                
                {/* Dark Mode Toggle in Mobile Menu */}
                <button 
                  onClick={toggleDarkMode} 
                  className={`block mt-4 p-2 rounded-full w-full text-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <FaSun className="text-yellow-300 inline" /> : <FaMoon className="text-gray-600 inline" />}
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;