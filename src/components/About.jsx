import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 leading-relaxed">
            With over 5 years of experience as a UX/UI Developer, I blend design and development
            to create interfaces that are both beautiful and highly functional. With a keen eye for 
            detail and a user-first approach, I design intuitive and accessible interfaces that enhance
            user experiences. 
          </p>
          <p className="text-lg mb-6 leading-relaxed">
          My skills span UX research, wireframing, prototyping, and frontend development, ensuring that the 
          final product not only meets user needs but also performs seamlessly across all devices. I am committed to 
          continuous learning and keeping up with the latest design trends and technologies to deliver the best possible
          results for my clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
