import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const LanguageToggle = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isOpen, setIsOpen] = useState(false);

  const languages = ['EN', 'BR', 'FR'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-400 transition-colors"
      >
        {selectedLanguage} <FaChevronDown className="ml-2" />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-10 text-gray-900 dark:text-white">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => selectLanguage(lang)}
              className={`block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-400 transition-colors ${selectedLanguage === lang ? 'font-bold' : ''}`}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
