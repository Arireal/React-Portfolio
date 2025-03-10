import React from 'react';
import { FaCode, FaBriefcase, FaGraduationCap, FaServer, FaPalette, FaUserCheck } from 'react-icons/fa';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

const skillsData = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Redux", "Zustand"],
    icon: <FaCode />,
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "GraphQL", "REST API", "Prisma", "Firebase"],
    icon: <FaServer />,
  },
  {
    title: "Tools",
    skills: ["Git", "Jest", "Storybook", "Webpack", "CI/CD", "Framer Motion", "Vite", "Docker"],
    icon: <FaBriefcase />,
  },
  {
    title: "UI/UX & Design",
    skills: ["Wireframing", "Prototyping", "Figma/Framer", "Accessibility (a11y)", "Design Systems", "Motion Design"],
    icon: <FaPalette />,
  },
  {
    title: "Other",
    skills: ["Performance Optimization", "SEO", "Agile/Scrum", "Mentorship", "Technical Writing"],
    icon: <FaGraduationCap />,
  },
  {
    title: "Soft Skills",
    skills: [
      { skill: "Problem-Solving", level: 10 },
      { skill: "Autonomy", level: 11 },
      { skill: "Leadership", level: 9 },
      { skill: "Creativity", level: 11 },
      { skill: "Adaptability", level: 9 },
      { skill: "Collaboration", level: 9 }
    ],
    icon: <FaUserCheck />,
  },
];

// 📌 Renders a single Skill Card
const SkillsCard = ({ title, skills, icon, darkMode }) => {
  // Custom tick component for breaking the labels
  const renderTick = ({ x, y, payload }, darkMode) => {
    const words = payload.value.split(" ");
    return (
      <text x={x} y={y} textAnchor="middle" fill={darkMode ? "#ffffff" : "#000000"} fontSize={12}>
        {words.map((word, index) => (
          <tspan key={index} x={x} dy={index === 0 ? 0 : 14}>
            {word}
          </tspan>
        ))}
      </text>
    );
  };

  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} ${darkMode ? '' : 'shadow-lg'}`}>
      <div className="text-blue-500 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      {title === "Soft Skills" ? (
        // 🔹 Render Radar Chart for Soft Skills
        <ResponsiveContainer width="100%" height={200}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" tick={(props) => renderTick(props, darkMode)} />
            <Radar name="Skills" dataKey="level" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      ) : (
        // 🔹 Render Normal Skills List
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Skills = ({ darkMode }) => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skillsData.map((category, index) => (
            <SkillsCard 
              key={index} 
              title={category.title} 
              skills={category.skills} 
              icon={category.icon} 
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
