import React from 'react';

const Experience = ({ darkMode }) => {
  const jobs = [
    {
      role: 'Full Stack React & Node.js Developer',
     
      period: '2024 - 2025',
      description: 'Designed and developed user-friendly interfaces, improved design systems, and optimized accessibility.'
    },
    {
      role: 'Associate Frontend Developer and UX/UI Analyst',
      
      period: '2022 - 2024',
      description: 'Worked closely with cross-functional teams to enhance frontend architecture and implement best UX practices.'
    },
    {
      role: 'UX/UI Frontend Developer',
     
      period: '2019 - Present',
      description: 'Provided UX/UI consultation, designed custom web solutions, and developed high-performance applications for clients.'
    },
   
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {jobs.map((job, index) => (
            <div key={index} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} ${darkMode ? '' : 'shadow-lg'}`}>
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold">{job.role}</h3>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{job.period}</span>
              </div>
              <div className="text-blue-500 mb-4">{job.company}</div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
