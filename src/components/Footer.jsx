import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Ariane Souza</p>
      </div>
    </footer>
  );
};

export default Footer;
