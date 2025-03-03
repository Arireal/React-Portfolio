import React from 'react';
import { FaUser } from 'react-icons/fa';

const Hero = ({ darkMode }) => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Ariane Souza</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">Frontend React Developer</h2>
          <p className="text-lg mb-8 leading-relaxed max-w-xl">
          I build fast, responsive, and engaging React-based user interfaces, 
          focusing on seamless user experiences and modern frontend technologies.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className={`px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors`}>
              Contact Me
            </a>
            <a href="#projects" className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
              View Work
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className={`w-64 h-64 rounded-full overflow-hidden border-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <img 
              src="/images/logo.png" alt="Profile"
            />
            <div className={`w-full h-full flex items-center justify-center text-5xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <FaUser />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
