import React, { useState, useRef } from 'react';
import { X, Menu } from 'lucide-react';
import { ProjectsSection, Prototypes, Python } from './Projects';
import Profile from './Profile';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Github, Linkedin, Mail, LucideSettings, LucideArrowUp } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import "./App.css";


const Portfolio = () => {
  const [activeView, setActiveView] = useState('home');
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false); // You need this for the collapse functionality
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedProject, setSelectedProject] = useState(null); // To store the selected project
  const projectsRef = useRef(null);
  const prototypesRef = useRef(null);
  const pythonRef = useRef(null);


  
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isProfileView = activeView === 'profile';

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className={`bg-white fixed h-full border-r p-4 transition-all flex flex-col justify-between ${isMenuCollapsed ? 'w-20' : 'w-64'}`}>
  {/* Menu Toggle Button */}
  <button 
    onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
  >
    <Menu size={24} />
  </button>

  {/* Logo */}
<div className={`flex items-center justify-center mx-auto mt-8 ${isMenuCollapsed ? 'w-16 h-16' : 'w-24 h-24'}`}>
  <img 
    src="/images/logo.png" 
    alt="Logo" 
    className="w-full h-full object-contain rounded-full"
  />
</div>

  {/* Menu Content (Pushed Down a Bit) */}
  <div className="flex flex-col flex-grow mt-6">
    <nav className={`space-y-2 ${isMenuCollapsed ? 'hidden' : 'block'}`}>
      <button 
        onClick={() => setActiveView('home')} 
        className={`block w-full text-left px-4 py-2 rounded-lg transition-colors 
        ${activeView === 'home' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
      >
        Home
      </button>
      <button
        onClick={() => setActiveView('profile')}
        className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${activeView === 'profile' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
      >
        Profile
      </button>
      <button
        onClick={() => scrollToSection(projectsRef)}
        disabled={isProfileView}
        className={`block w-full text-left px-4 py-2 rounded-lg ${isProfileView ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'}`}
      >
        Full Stack and Frontend
      </button>
      <button
        onClick={() => scrollToSection(prototypesRef)}
        disabled={isProfileView}
        className={`block w-full text-left px-4 py-2 rounded-lg ${isProfileView ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'}`}
      >
        UX/UI
      </button>
      <button
        onClick={() => scrollToSection(pythonRef)}
        disabled={isProfileView}
        className={`block w-full text-left px-4 py-2 rounded-lg ${isProfileView ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'}`}
      >
        Python
      </button>
    </nav>
  </div>

  {/* Social Icons & Copyright (Now Closer to the Bottom) */}
  <div className="mt-auto mb-4">
    <div className={`flex space-x-4 justify-center ${isMenuCollapsed ? 'hidden' : 'block'}`}>
      <a href="#" className="text-gray-600 hover:text-blue-500"><Github className="cursor-pointer" size={20} /></a>
      <a href="#" className="text-gray-600 hover:text-blue-500"><Linkedin className="text-gray-600 cursor-pointer" size={20} /></a>
      <a href="#" className="text-gray-600 hover:text-blue-500"><Mail className="text-gray-600 cursor-pointer" size={20} /></a>
    </div>

    {/* Copyright */}
    <p className={`text-center text-sm text-gray-500 mt-4 ${isMenuCollapsed ? 'hidden' : 'block'}`}>
      © 2025 Ariane Souza. 
      
    </p>
  </div>
</aside>

      {/* Main Content */}
      <main className={`transition-all ${isMenuCollapsed ? 'ml-20' : 'ml-64'} flex-1 p-8`}>
        {activeView === 'profile' ? (
          <Profile />
        ) : (
          <>
            <Header />
            
            <InterestsSection />

            <section ref={projectsRef} className="mb-12">
              <ProjectsSection onProjectClick={(project) => {
                setSelectedProject(project);
                setIsModalOpen(true);
              }} />
            </section> 

            <section ref={prototypesRef} className="mb-12">
              <AboutSection onProjectClick={(project) => {
                setSelectedProject(project);
                setIsModalOpen(true);
              }} />
            </section>

            <section ref={prototypesRef} className="mb-12">
              <Prototypes onProjectClick={(project) => {
                setSelectedProject(project);
                setIsModalOpen(true);
              }} />
            </section>

            <section ref={pythonRef}>
              <Python onProjectClick={(project) => {
                setSelectedProject(project);
                setIsModalOpen(true);
              }} />
            </section>
          </>
        )}
      </main>

      {/* Project Modal */}
      {isModalOpen && (
        <ProjectModal 
          onClose={() => setIsModalOpen(false)} 
          project={selectedProject}
        />
      )}
    </div>
  );
};

// Header Component
const Header = () => (
  <div className="mb-12 text-center">
    <h1 className="text-4xl font-bold mb-2">Ariane Souza</h1>
    <h2 className="text-xl text-gray-600">Full Stack UX/UI Developer</h2>
  </div>
);

  // About Section
  const AboutSection = () => {
    const chartData = [
      { name: 'JS: 40%', value: 40 },
      { name: 'CSS: 30%', value: 30 },
      { name: 'HTML: 20%', value: 20 },
      { name: 'Python: 10%', value: 10 }
    ];
  
    const total = chartData.reduce((sum, item) => sum + item.value, 0);
  const formattedChartData = chartData.map(item => ({
    ...item,
    percentage: ((item.value / total) * 100).toFixed(1) + '%'
  }));

  const COLORS = ['#5285ff', '#1ddd92', '#984fff', '#9fcdff'];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">About</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Profile Info</h3>
          <p className="text-gray-600 mb-4">
          I'm a Frontend UX/UI Developer with 5 years of experience, also skilled in backend technologies like Python and Node.js. My workflow mindset involves creating fluid, clean layouts that serve practical, 
          everyday purposes. Whether it’s data-driven interfaces, portfolios, or business projects, you can expect user-focused solutions with thoughtful design and seamless functionality.
          I collaborate effortlessly with backend teams, ensuring smooth integration and timely delivery. I’m highly deadline-driven and thrive in environments with minimal micromanagement and open communication.
          </p>
          <button 
         className="text-blue-600 hover:text-black hover:no-underline hover:tracking-wider transition-all duration-300">
  Read More
</button>

        </div>

        {/* Chart Container */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Languages % according to my GitHub</h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={formattedChartData} layout="vertical" margin={{ left: 50 }}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip
                formatter={(value, name, props) => [`${value} (${props.payload.percentage})`, name]}
                cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
              />
              <Bar dataKey="value" barSize={20} radius={[0, 10, 10, 0]}>
                {formattedChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
    

// Interests Section
const InterestsSection = () => {
  const interests = [
    { title: "UX/UI Analysis", level: "Expert Level", icon: <LucideSettings size={28} strokeWidth={1.5} stroke="#5285ff" /> },
    { title: "React", level: "Refining Expertise", icon: <FaReact size={28} className="text-blue-500" stroke="#5285ff" /> },
    { title: "Node & Express.js", level: "Strong Progress", icon: <FaNodeJs size={28} className="text-[#5285ff]"/> },
    { title: "Python & Data Visualization", level: "Expanding Skillset", icon: <FaPython size={28} className="text-[#5285ff]"/> },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {interests.map((interest, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl mb-3">{interest.icon}</div>
            <h3 className="font-semibold mb-2 flex items-center">
              {interest.title}
              <LucideArrowUp size={16} className="text-green-500 ml-1" />
            </h3>
            <p className="text-sm text-green-600">{interest.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Project Modal Component
const ProjectModal = ({ onClose, project }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white w-full max-w-4xl mx-4 rounded-lg relative">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <X size={24} />
      </button>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">{project?.title}</h2>
        <p>{project?.description}</p>
      </div>
    </div>
  </div>
);

export default Portfolio;

