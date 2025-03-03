import React, { useState } from 'react';
import ProjectModal from './ProjectModal'; // Make sure you have the modal component in the right path

const Prototypes = ({ darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    
      { 
        title: 'React & Node.js E-commerce', 
        cardSkills: ['React,', 'Node.js,', 'Express'].join('  '), 
        modalSkills: ['React', 'Node.js', 'Express', 'JSON', 'API calls', 'Problem Solving'], 
        cardDescription: 'Built a dynamic frontend using React to display product data.',
        modalDescription: `<strong>My Role: Full Stack Developer UX/UI</strong>
        <br />
        <br />
        Built a dynamic frontend using React to display product data, fetching JSON data from an external server via Node.js. 
        Managed CORS settings for seamless communication between the frontend and backend. Deployed the application on Render, ensuring smooth performance and accessibility. 
        <br />
        <a href="https://www.adwstudium.com/" target="_blank" class="text-blue-600 hover:underline">See the live website</a> 
        | 
        <a href="https://github.com/Arireal/storefront" target="_blank" class="text-blue-600 hover:underline">See the code</a>`,
        visuals: ["/images/storefront/s2.png", "/images/storefront/s00.png", "/images/storefront/s3.png"],
        features: ['Well-organized components with separate stylesheets', 'Polyrepo Setup: the frontend and backend are maintained in independent repositories, allowing independent scaling', 'Real-time inventory management', 'Reusable components like Header, Footer, and MasonryGrid,', 
            'Use of useState for dynamic UI changes'],
        ux:['Custom grid layouts for displaying products', 'Smooth animations for page transitions', 'A user-friendly navigation system controlled by the footer buttons'],
        process: ['User Research', 'Wireframing', 'UI Design', 'Frontend and Backend Development'],
        image: [process.env.PUBLIC_URL + "/images/genotec/comercethumb.png"],
        Role:'Full Stack Developer UX/UI',
        codeUrl: "https://github.com/Arireal/storefront",
        liveUrl:'https://www.adwstudium.com/'
      },
      { 
        title: 'Genotec Web App', 
        cardSkills: ['PHP,', 'CSS,', 'UX'].join('  '), 
        modalSkills: ['PHP', 'CSS', 'UX/UI Analysis', 'Debugging', 'Problem Solving'], 
        cardDescription: 'Created and debugged a WordPress PHP layout.',
        modalDescription: `<strong>My Role: Full Stack Developer UX/UI</strong>
        <br />
        <br />
        Developed and optimized the WordPress PHP layout for a client website, focusing on resolving complex plugin conflicts to ensure seamless functionality.  
        Implemented tailored solutions to enhance UX/UI, improving site navigation, responsiveness, and user engagement. My approach to problem-solving ensured smooth integration of third-party plugins,  
        leading to an optimized user experience and more efficient website performance. <br /> 
        <a href="https://portalgenotec.com.br/" target="_blank" class="text-blue-600 hover:underline">See the live website</a>`,
      
        visuals: ["/images/genotec/g1.png", "/images/genotec/g2.png", "/images/genotec/g3.png", "/images/genotec/g5.png", "/images/genotec/g6.png", "/images/genotec/g7.gif" ],
        image: [process.env.PUBLIC_URL + "/images/genotec/g1.png"],
        Role:'Full Stack Developer UX/UI',

        codeUrl: "https://portalgenotec.com.br/", 
        liveUrl: "https://portalgenotec.com.br/"
      },
    { 
      title: 'Blog with React and Node.js', 
      cardSkills: ['React,', 'Node.js,', 'Express'].join('  '), 
        modalSkills: ['React', 'Node.js', 'Express'], 
        cardDescription: 'A simple blog built with React and Node.js, with API-powered posts.',
        modalDescription: `<strong>My Role: Full Stack Developer UX/UI</strong>
        <br />
        <br />
        This is a simple blog application built using React for the frontend and Node.js with Express.js for the backend. 
         It allows users to create and view posts while fetching data from an API. The project emphasizes a clean, minimalistic design with smooth scrolling interactions, ensuring a seamless user experience.
        <br />
        <a href="https://www.garoihouse.com/" target="_blank" class="text-blue-600 hover:underline">See the live website</a> 
        | 
        <a href="https://github.com/Arireal/node-blog" target="_blank" class="text-blue-600 hover:underline">See the code</a>` ,
      visuals: [process.env.PUBLIC_URL + "/images/genotec/b0.png","/images/genotec/b3.png", "/images/genotec/b4.png","/images/genotec/b5.png" ],
      features: ['Frontend: Built with React, featuring a user-friendly interface for reading and creating posts',
        'Backend: Uses Express.js to handle API requests and serve mock data.', 'Smooth Scrolling: Implemented scroll-to-section functionality for better navigation.'
      ],
      ux: ['Designed from scratch, including initial wireframes and layout planning.'],
       image: [process.env.PUBLIC_URL + "/images/genotec/b1.png"],
       Role:'Full Stack Developer UX/UI',
      codeUrl: "https://github.com/Arireal/node-blog",
      liveUrl:'https://www.garoihouse.com/'
    },
   
      { 
        title: 'React Portfolio', 
        cardSkills: ['React,', 'Dashboard UI,', 'Tailwind'].join('  '), 
        modalSkills: ['React', 'Dashboard UI', 'UX/UI', 'Tailwind CSS'], 
        cardDescription: 'A React-based portfolio showcasing selected projects.',
        modalDescription: `<strong>My Role: Full Stack Developer UX/UI</strong>
        <br />
        <br />
        This React portfolio serves as a structured, interactive way to present my selected projects, technical skills, and professional insights.
         Designed with a dashboard-like layout, and Tailwind CSS, it offers a Collapsible menu for smooth navigation, making it easy for recruiters to explore my work. The project emphasizes React-based interactivity, 
         grid-based organization (dashboard style), and a minimalist aesthetic to provide a practical and efficient user experience.
         <br />
        <a href="https://www.arianesouza.com/" target="_blank" class="text-blue-600 hover:underline">See the live website</a> 
        | 
        <a href="https://github.com/Arireal/React-Portfolio" target="_blank" class="text-blue-600 hover:underline">See the code</a>` ,
        visuals: [ "/images/react-portfolio/rthumb.png"],
        features: ['Dashboard-Style UI – Organized sections for projects, skills, and personal insights', 
          'Tailwind Css - For a sleek, responsive, and modern design',
          'React-Based Grid Layout – Built to practice structured component placement',
          'Smooth Scroll Navigation – Enhances UX with seamless transitions',
          'Lucide & React Icons – Adds clean and modern UI elements',
          'Integrated Recharts – Displays skills in a visual, engaging way'
        ],
        ux: ['Minimalist Design – A clean, professional aesthetic for readability and focus', 
          'Compact, Collapsible Menu – Keeps navigation intuitive and unobtrusive',
          'Structured Information Flow – Ensures clarity in presenting skills and work approach',
          'Interactive Project Showcase – Enables recruiters to explore projects effortlessly'
        ],
        image:["/images/react-portfolio/rthumb.png"],
        Role:'Full Stack Developer UX/UI',
        codeUrl: "https://github.com/Arireal/React-Portfolio" ,
        liveUrl: "https://www.arianesouza.com/"

      },

      { 
        title: 'Task App', 
        cardSkills: ['Python', 'GUI', 'Streamlit'], 
        modalSkills: ['Python', 'GUI', 'Streamlit'], 
        cardDescription: 'based Task application that helps manage daily tasks efficiently.',
        modalDescription: `This task web app is crafted to streamline task management, helping users enhance their productivity by efficiently creating and completing tasks. 
        Developed using Python, the project highlights my skills in software development and version control. 
        <br />
        The use of Git ensures robust version tracking and collaboration capabilities, demonstrating my proficiency in managing codebases and working in team environments. 
        The user interface is crafted using a GUI library, providing a clean and intuitive experience for users.
        <br />
        <a href="https://arireal-my-todo-web-app-web-app-yuez5x.streamlit.app/" target="_blank" class="text-blue-600 hover:underline">See the live app</a> 
        | 
        <a href="https://github.com/Arireal/my-todo-web-app" target="_blank" class="text-blue-600 hover:underline">See the code</a>`,
        features: ['Streamlit library','Git Version Control'],
        visuals:["/images/todoapp/td1.png"],
        image: ["/images/todoapp/td1.png"],
        codeUrl: "https://github.com/Arireal/my-todo-web-app", 
        liveUrl:'https://arireal-my-todo-web-app-web-app-yuez5x.streamlit.app/'
      },
    { 
      title: 'Weather API', 
      cardSkills: ['Streamlit', 'Plotly', 'Python'], 
        modalSkills: ['Python', 'Plotly', 'Streamlit','Git Version Control'], 
        cardDescription: 'A python forecast API, using Plotly and Streamlit for data visualization.',
        modalDescription: `This weather forecast API is designed to provide accurate and visually engaging weather data, showcasing my expertise in Python development, 
        version control, and data visualization. The project is managed using Git, ensuring robust version control and collaborative potential, which underscores my proficiency 
        in managing codebases and working in team environments.
        <br />
        The API leverages Plotly for creating interactive and high-quality visualizations, while Streamlit is used to develop an intuitive and user-friendly interface. 
        These choices highlight my ability to integrate and utilize powerful libraries to enhance the functionality and visual appeal of applications.
        <a href="https://arianesouza-weather-api.streamlit.app/" target="_blank" class="text-blue-600 hover:underline">See the live App</a> 
        | 
        <a href="https://github.com/Arireal/Weather_API_Dashboard" target="_blank" class="text-blue-600 hover:underline">See the code</a>` ,
      visuals: ["/images/weather-app/w1.png" ],
      features: ['Data Manipulation', 'API Development'],
      image:["/images/weather-app/wthumb.png"],
      codeUrl: "https://github.com/Arireal/Weather_API_Dashboard" ,
      liveUrl:'https://arianesouza-weather-api.streamlit.app/'
    },
     
  ];

  const handleOpenModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <section id="projects" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-transform hover:-translate-y-2`}
            >
              <div className={`h-48 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} flex items-center justify-center`}>
              <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
            </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                • <strong>Role:</strong> {project.Role}
                  <br />
                  • <strong>Tech Stack:</strong> {project.cardSkills}
                  <br />
                  • <strong>Highlights:</strong> {project.cardDescription}
                </p>
                <div className="flex gap-2">
                <a
                href={project.liveUrl}
                className="px-4 py-2 text-blue-400 border border-blue-400 rounded hover:bg-blue-50 text-center"
                target="_blank"
                rel="noopener noreferrer"
                >
                Live Web App
                </a>

                
                {/* Conditionally render either 'Prototype' or 'View Code' */}
                {project.prototypeUrl ? (
                  <a 
                    href={project.prototypeUrl} 
                    className="px-4 py-2 text-blue-400 border border-blue-400 rounded hover:bg-blue-50 text-center" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Prototype
                  </a>
                ) : (
                  <a 
                    href={project.codeUrl} 
                    className="px-4 py-2 text-blue-400 border border-blue-400 rounded hover:bg-blue-50 text-center" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
              </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render modal with dynamic content */}
      {isModalOpen && currentProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          projectData={currentProject}
        />
      )}
    </section>
  );
};

export default Prototypes;
