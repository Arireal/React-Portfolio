import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';


const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Ariane Souza</div>
        <nav className="hidden md:flex space-x-6">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">
              {item}
            </a>
          ))}
        </nav>
        
        <button 
          onClick={toggleDarkMode} 
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-gray-600" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
