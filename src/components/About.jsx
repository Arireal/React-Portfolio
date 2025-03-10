import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 leading-relaxed">
          I’m a Senior Frontend Engineer & UX/UI Designer with a strong foundation in art direction, 
          web design, and interactive experiences. Over the past 7+ years, I’ve specialized in creating 
          user-centric digital products that seamlessly merge functionality and aesthetics. My expertise spans React, JavaScript, 
          UX research, and design systems, ensuring intuitive and engaging experiences.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
          With a background in branding, visual identity, and full-stack development, I bring a holistic approach to problem-solving—whether 
          designing intuitive interfaces, optimizing user flows, or developing scalable frontends. Passionate about accessibility, performance, 
          and modern UI trends, I thrive at the intersection of design and code.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
