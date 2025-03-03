import React from 'react';
import Hero from './components/Hero-react';
import About from './components/About-react';
import Skills from './components/Skills-react';
import Experience from './components/Experience-react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from "./components/Header";
import ProjectReact from './components/Projects-front';

function ReactCategory({ darkMode, toggleDarkMode }) { 
    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
            {/* Pass toggleDarkMode to Header */}
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <ProjectReact darkMode={darkMode} />
            <Experience darkMode={darkMode} />
            <Contact darkMode={darkMode} />
            <Footer darkMode={darkMode} />
        </div>
    );
}

export default ReactCategory;
