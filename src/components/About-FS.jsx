import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 leading-relaxed">
          As a Full-Stack UX/UI Developer, I specialize in building fast, secure, and scalable web applications.
           I craft dynamic, user-friendly interfaces with React and power the backend with Node.js, ensuring seamless 
           server-side logic and efficient database management.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
          With a deep understanding of RESTful APIs and efficient data management,
          I ensure seamless communication between the client and server. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
