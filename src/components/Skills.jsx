import React from 'react';
import { FaCode, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Skills = ({ darkMode }) => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { title: 'Dev.', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'], icon: <FaCode /> },
            { title: 'Tools', skills: ['Git', 'Webpack', 'Framer', 'Figma'], icon: <FaBriefcase /> },
            { title: 'Other', skills: ['UI/UX Design', 'Performance Optimization', 'SEO'], icon: <FaGraduationCap /> }
          ].map((category, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} ${darkMode ? '' : 'shadow-lg'}`}
            >
              <div className="text-blue-500 text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
