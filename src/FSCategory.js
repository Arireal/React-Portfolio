import React from 'react';
import Hero from './components/Hero-FS';
import About from './components/About-FS';
import Skills from './components/Skills-FS';
import Experience from './components/Experience-react';
import Contact from './components/Contact';
import ProjectFS from './components/Projects-fs';

function ReactCategory({ darkMode, toggleDarkMode }) { 
    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
            {/* Pass toggleDarkMode to Header */}
            
            <Hero darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <ProjectFS darkMode={darkMode} />
            <Experience darkMode={darkMode} />
            <Contact darkMode={darkMode} />
           
        </div>
    );
}

export default ReactCategory;
