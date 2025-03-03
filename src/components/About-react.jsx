import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 leading-relaxed">
          With over 5+ as a Frontend React Developer, I specialize in building dynamic, scalable, 
          and performance-optimized web applications. With expertise in React, Redux, 
          and modern JavaScript, I create fast and interactive user interfaces that deliver 
          exceptional user experiences.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
          My focus is on clean, maintainable code, responsive design, 
          and ensuring that every interface is intuitive and accessible. 
          I thrive in collaborative and innovative environments where I can create.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
