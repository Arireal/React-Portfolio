import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = ({ darkMode }) => {
  const socialLinks = [
    "https://github.com/Arireal", 
    "https://www.linkedin.com/in/ariane-souza-dev/",
   
  ];

  return (
    <section id="contact" className={`py-16 flex flex-col items-center justify-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Interested in working together? Feel free to reach out. I'm always open to discussing new projects and opportunities.
        </p>
        <div className="flex items-center justify-center space-x-6">
          <a href="mailto:arianesouzareal@gmail.com" className="flex items-center space-x-2 text-lg hover:text-blue-500 transition-colors">
            <FaEnvelope className="text-xl" />
            <span>contact@arianesouza.com</span>
          </a>
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          {[FaGithub, FaLinkedin].map((Icon, index) => (
            <a 
              key={index} 
              href={socialLinks[index]} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-2xl ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
