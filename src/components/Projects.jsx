import React, { useState } from 'react';
import ProjectModal from './ProjectModal'; // Make sure you have the modal component in the right path

const Prototypes = ({ darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    { 
        title: 'Extranet Relayout', 
        cardSkills: ['Framer,',  'UX Analysis,','Prototyping'].join('  '),
        modalSkills: ['Framer', 'UX Analysis', 'Research', 'Persona Creation','User Interviews', 'Problem Solving', 'Wireframing','Prototyping'], 
        cardDescription: 'Extranet system redesign for a modern, user-friendly experience.',
        modalDescription: `<strong>My Role: UX/UI Analyst & Designer</strong>
        <br />
        <br />
        The goal of this redesign was to modernize an outdated extranet system and address key
         pain points experienced by the primary users—largely senior stakeholders and company owners. The project involved 
         extensive user research, persona creation, and interviews to ensure that the design solution would meet the needs of the target audience.
        <br />
        <br />
        The system was prototyped in Framer, chosen for its ability to bring dynamic micro-interactions and smooth animations to life, making the 
        interface feel modern while providing a seamless user experience.
        <br />
        You can interact with the tablet live prototype below. To access the desktop and mobile versions, you can click here: 
        <a href="https://gentle-imagine-000316.framer.app/" target="_blank" class="text-blue-600 hover:underline">See the live Prototype</a> 
         <br />
          <br />
       <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" 
        src="https://gentle-imagine-000316.framer.app/" allowfullscreen></iframe>`,
        features: ['A modular, responsive layout to ensure the interface adapts seamlessly to various devices (desktops, tablets, etc.)',
           'Simplified navigation, utilizing card sorting and progressive disclosure techniques for better information prioritization', 
           'A customizable dashboard that allows users to tailor the interface based on their specific needs', 
           'Focused on modern design trends like minimalism with functionality, ensuring that the system feels sleek, organized, and user-friendly',
           'Enhanced the commercial appeal of the design by adding CTAs and sales buttons in the daily-use table' 
         ],
        visuals: ["/images/vl/vl1.png", "/images/vl/vl2.png", "/images/vl/vl3.png", 
          "/images/vl/4.png", "/images/vl/5.png", "/images/vl/6.gif", "/images/vl/15.gif",
          "/images/vl/8.png","/images/vl/9.png", "/images/vl/10.png", "/images/vl/11.png",
          "/images/vl/12.png", "/images/vl/13.png", "/images/vl/14.png", "/images/vl/18.gif",
          "/images/vl/16.png", "/images/vl/17.png", "/images/vl/10.gif","/images/vl/19.png",
          "/images/vl/20.png"
        ],
        
        image: ["/images/vl/vl0.png"],
        Role:'UX/UI Analyst & Designer',
        prototypeUrl: "https://gentle-imagine-000316.framer.app/" 
      },
    { 
      title: 'Van Tour Website', 
      cardSkills: ['Figma,', 'UX/UI Analysis,', 'Prototyping'].join('  '), 
        modalSkills: ['Figma', 'UX/UI Analysis', 'Persona Creation', 'Prototyping'], 
        cardDescription: 'Designed a clean, one-page website layout in Figma for a van tour service.',
        modalDescription: `<strong>My Role: UX/UI Designer</strong>
        <br />
        <br />
        I created a one-page website layout in Figma for a van tour service based in Salvador, showcasing their services and van models. 
        The primary audience—tourists—required an intuitive, visually appealing design. To enhance user experience,
          I incorporated animated interactions and a smooth navigation flow, ensuring the website was both engaging and easy to use.
        <br />
        You can interact with the live prototype below or also access it here: 
        <a href="https://www.figma.com/proto/uLWAsONKTcmhrZC0z0zvdS/Ariane-Souza-Projetos?node-id=929-24&t=ow9rhSQmMhTRQLFp-1" target="_blank" class="text-blue-600 hover:underline">See the live prototype</a> 
        <br />
        <br />
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" 
        src="https://embed.figma.com/proto/uLWAsONKTcmhrZC0z0zvdS/Ariane-Souza-Projetos?node-id=929-24&embed-host=share" allowfullscreen></iframe>` ,
      visuals: ["/images/vantour/v1.png","/images/vantour/v2.png", "/images/vantour/v3.png","/images/vantour/v4.gif","/images/vantour/v5.gif","/images/vantour/v6.png", 
        "/images/vantour/v7.png", "/images/vantour/v8.png", "/images/vantour/v9.png", "/images/vantour/v10.png", "/images/vantour/v11.gif", "/images/vantour/v12.png",
        "/images/vantour/v14.png", "/images/vantour/v15.png", "/images/vantour/v16.png", "/images/vantour/v17.png"
      ],
      image:["/images/vantour/vthumb.png"],
      Role:'UX/UI Designer',
      prototypeUrl: "https://www.figma.com/proto/uLWAsONKTcmhrZC0z0zvdS/Ariane-Souza-Projetos?node-id=929-24&t=ow9rhSQmMhTRQLFp-1" 
    },
    { 
        title: 'Kinkoa Web App', 
        cardSkills: ['UX Thinking,', 'Prototyping,', 'User-flow'].join('  '),
        modalSkills: ['Figma','User-centric Thinking', 'Wireframing', 'UX/UI Analysis', 'Problem Solving'], 
        cardDescription: 'Designed a UX experience for Kinkoa, a fruit milk-based juice brand.',
        modalDescription: `<strong>My Role: UX/UI Designer</strong>
        <br />
        <br />
        For Kinkoa, a fruit milk-based juice brand operating a juice truck, I developed a user experience design tailored for in-store tablets. 
        The goal was to create an intuitive interface that effectively showcased their limited selection of juice flavors while aligning with their brand identity. 
        Since Kinkoa proposed the tablet concept, my design optimized user interaction for quick, engaging browsing. Additionally, I emphasized their sustainability 
        efforts by integrating messaging about their recycled glass bottles, reinforcing their eco-conscious brand values.`,
        visuals: ["/images/kinkoa/k1.png", "/images/kinkoa/k2.gif", "/images/kinkoa/k3.png", "/images/kinkoa/k4.png",
          "/images/kinkoa/k5.gif", "/images/kinkoa/k6.png", "/images/kinkoa/k7.png",  "/images/kinkoa/k8.gif", "/images/kinkoa/k9.png",
          "/images/kinkoa/k10.mp4",  "/images/kinkoa/11.mp4", "/images/kinkoa/k12.gif" ],
        image:["/images/kinkoa/k1.png"],
        Role:'UX/UI Designer',
        
         
      },
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
        codeUrl: "https://github.com/Arireal/storefront" 
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
      codeUrl: "https://github.com/Arireal/node-blog" 
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

        codeUrl: "https://portalgenotec.com.br/" 
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
        codeUrl: "https://github.com/Arireal/React-Portfolio" 

      }
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
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
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
                <button
                  onClick={() => handleOpenModal(project)}
                  className="px-4 py-2 text-blue-400 border border-blue-400 rounded hover:bg-blue-50"
                >
                  View Project
                </button>
                
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
                    View Code
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
