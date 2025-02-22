import React, { useState } from 'react';
import ProjectModal from './ProjectModal'; // Import the reusable modal


const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    { 
        title: 'React & Node.js E-commerce', 
        cardSkills: ['React', 'Node.js', 'Express'], 
        modalSkills: ['React', 'Node.js', 'Express', 'JSON', 'API calls', 'Problem Solving'], 
        cardDescription: 'Built a dynamic frontend using React to display product data.',
        modalDescription: `Built a dynamic frontend using React to display product data, fetching JSON data from an external server via Node.js. 
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
        image: ["/images/storefront/s1.png"],
        codeUrl: "https://github.com/Arireal/storefront" 
      },
    { 
      title: 'Blog with React and Node.js', 
      cardSkills: ['React', 'Node.js', 'Express'], 
        modalSkills: ['React', 'Node.js', 'Express'], 
        cardDescription: 'A simple blog built with React and Node.js, with API-powered posts.',
        modalDescription: `This is a simple blog application built using React for the frontend and Node.js with Express.js for the backend. 
         It allows users to create and view posts while fetching data from an API. The project emphasizes a clean, minimalistic design with smooth scrolling interactions, ensuring a seamless user experience.
        <br />
        <a href="https://www.garoihouse.com/" target="_blank" class="text-blue-600 hover:underline">See the live website</a> 
        | 
        <a href="https://github.com/Arireal/node-blog" target="_blank" class="text-blue-600 hover:underline">See the code</a>` ,
      visuals: ["/images/blog-react/b0.png","/images/blog-react/b3.png", "/images/blog-react/b4.png","/images/blog-react/b5.png" ],
      features: ['Frontend: Built with React, featuring a user-friendly interface for reading and creating posts',
        'Backend: Uses Express.js to handle API requests and serve mock data.', 'Smooth Scrolling: Implemented scroll-to-section functionality for better navigation.'
      ],
      ux: ['Designed from scratch, including initial wireframes and layout planning.'],
      image:["/images/blog-react/b1.png"],
      codeUrl: "https://github.com/Arireal/node-blog" 
    },
    { 
        title: 'Genotec Web App', 
        cardSkills: ['PHP', 'CSS', 'UX'], 
        modalSkills: ['PHP', 'CSS', 'UX/UI Analysis', 'Debugging', 'Problem Solving'], 
        cardDescription: 'Created and debugged a WordPress PHP layout.',
        modalDescription: 'Developed and optimized the WordPress PHP layout for a client website, focusing on resolving complex plugin conflicts to ensure seamless functionality. ' +
        'Implemented tailored solutions to enhance UX/UI, improving site navigation, responsiveness, and user engagement. My approach to problem-solving ensured smooth integration of third-party plugins, ' +
        'leading to an optimized user experience and more efficient website performance. <br />' +
        '<a href="https://portalgenotec.com.br/" target="_blank" class="text-blue-600 hover:underline">See the live website</a>',
      
        visuals: ["/images/genotec/g1.png", "/images/genotec/g2.png", "/images/genotec/g3.png", "/images/genotec/g5.png", "/images/genotec/g6.png", "/images/genotec/g7.gif" ],
        image:["/images/Genotec/g1.png"],
        codeUrl: "https://portalgenotec.com.br/" 
      },
      { 
        title: 'React Portfolio', 
        cardSkills: ['React', 'Dashboard UI', 'UX'], 
        modalSkills: ['React', 'Dashboard UI', 'UX/UI'], 
        cardDescription: 'A React-based portfolio showcasing selected projects.',
        modalDescription: `This React portfolio serves as a structured, interactive way to present my selected projects, technical skills, and professional insights.
         Designed with a dashboard-like layout, it offers a recoiling short menu for smooth navigation, making it easy for recruiters to explore my work. The project emphasizes React-based interactivity, 
         grid-based organization (dashboard style), and a minimalist aesthetic to provide a practical and efficient user experience.
         <br />
        <a href="https://www.arianesouza.com/" target="_blank" class="text-blue-600 hover:underline">See the live website</a> 
        | 
        <a href="https://github.com/Arireal/React-Portfolio" target="_blank" class="text-blue-600 hover:underline">See the code</a>` ,
        visuals: ["/images/react-portfolio/r1.png", "/images/react-portfolio/rthumb.png"],
        features: ['Dashboard-Style UI – Organized sections for projects, skills, and personal insights', 
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
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-2">Full Stack & Frontend UX/UI Projects</h2>
      <p className="text-gray-600 mb-6">React, Node.js + Express, Gsap, SQL</p>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="bg-purple-100 h-48 w-full flex items-center justify-center overflow-hidden">
              {project.image && project.image.length > 0 ? (
                <img src={project.image[0]} alt={project.title} className="h-full w-full object-cover" />
              ) : (
                <p className="text-gray-500">No image available</p>
              )}
            </div>
  
            <div className="p-4">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.cardSkills.join(', ')}</p> {/* Card-specific skills */}
              <p className="text-sm text-gray-600 mb-4">{project.cardDescription}</p> {/* Card-specific description */}
              <div className="flex gap-2">
  <button
    onClick={() => handleOpenModal(project)}
    className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
  >
    View Project
  </button>
  <a 
  href={project.codeUrl} 
  className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 text-center" 
  target="_blank" 
  rel="noopener noreferrer"
>
  View Code
</a>
</div>

            </div>
          </div>
        ))}
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
  
const Prototypes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    { 
        title: 'Extranet Relayout', 
        cardSkills: ['Framer', 'UX Analysis', 'Prototyping'], 
        modalSkills: ['Framer', 'UX Analysis', 'Problem Solving', 'Prototyping'], 
        cardDescription: 'Extranet system redesign for a modern, user-friendly experience.',
        modalDescription: `The goal of this redesign was to modernize an outdated extranet system and address key
         pain points experienced by the primary users—largely senior stakeholders and company owners. The project involved 
         extensive user research, persona creation, and interviews to ensure that the design solution would meet the needs of the target audience.
        <br />
        <br />
        The system was prototyped in Framer, chosen for its ability to bring dynamic micro-interactions and smooth animations to life, making the 
        interface feel modern while providing a seamless user experience.
        <br />
        You can interact with the tablet live prototype below. To access the desktop and mobile versions, you can click here: 
        <br />
        <a href="https://gentle-imagine-000316.framer.app/" target="_blank" class="text-blue-600 hover:underline">See the live Prototype</a> 
       <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" 
        src="https://gentle-imagine-000316.framer.app/" allowfullscreen></iframe>`,
        features: ['A modular, responsive layout to ensure the interface adapts seamlessly to various devices (desktops, tablets, etc.)',
           'Simplified navigation, utilizing card sorting and progressive disclosure techniques for better information prioritization', 
           'A customizable dashboard that allows users to tailor the interface based on their specific needs', 
           'Focused on modern design trends like minimalism with functionality, ensuring that the system feels sleek, organized, and user-friendly', 
         ],
        visuals: ["/images/storefront/s2.png", "/images/storefront/s00.png", "/images/storefront/s3.png"],
        
       
  
        image: ["/images/vl/vl0.png"],
        codeUrl: "https://gentle-imagine-000316.framer.app/" 
      },
    { 
      title: 'Van Tour Website', 
      cardSkills: ['Figma', 'UX/UI Analysis', 'Prototyping'], 
        modalSkills: ['Figma', 'UX/UI Analysis', 'Persona Creation', 'Prototyping'], 
        cardDescription: 'Designed a clean, one-page website layout in Figma for a van tour service.',
        modalDescription: `I created a one-page website layout in Figma for a van tour service based in Salvador, showcasing their services and van models. 
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
      codeUrl: "https://www.figma.com/proto/uLWAsONKTcmhrZC0z0zvdS/Ariane-Souza-Projetos?node-id=929-24&t=ow9rhSQmMhTRQLFp-1" 
    },
    { 
        title: 'Kinkoa Web App', 
        cardSkills: ['UX Thinking', 'Prototyping', 'User-flow'], 
        modalSkills: ['Figma','User-centric Thinking', 'Wireframing', 'UX/UI Analysis', 'Problem Solving'], 
        cardDescription: 'Designed a UX experience for Kinkoa, a fruit milk-based juice brand.',
        modalDescription: `For Kinkoa, a fruit milk-based juice brand operating a juice truck, I developed a user experience design tailored for in-store tablets. 
        The goal was to create an intuitive interface that effectively showcased their limited selection of juice flavors while aligning with their brand identity. 
        Since Kinkoa proposed the tablet concept, my design optimized user interaction for quick, engaging browsing. Additionally, I emphasized their sustainability 
        efforts by integrating messaging about their recycled glass bottles, reinforcing their eco-conscious brand values.`,
        visuals: ["/images/kinkoa/k1.png", "/images/kinkoa/k2.gif", "/images/kinkoa/k3.png", "/images/kinkoa/k4.png",
          "/images/kinkoa/k5.gif", "/images/kinkoa/k6.png", "/images/kinkoa/k7.png",  "/images/kinkoa/k8.gif", "/images/kinkoa/k9.png",
          "/images/kinkoa/k10.mp4",  "/images/kinkoa/11.mp4", "/images/kinkoa/k12.gif" ],
        image:["/images/kinkoa/k1.png"],
         
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

  const isVideo = (url) => {
    const videoExtensions = ['mp4', 'webm', 'ogg'];
    const extension = url.split('.').pop().toLowerCase();
    return videoExtensions.includes(extension);
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-2">UX/UI Prototypes</h2>
      <p className="text-gray-600 mb-6">Framer, Figma, UX/UI Analysis</p>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="bg-purple-100 h-48 w-full flex items-center justify-center overflow-hidden">
  {project.image && project.image.length > 0 ? (
    isVideo(project.image[0]) ? (
      <video 
        src={project.image[0]} 
        className="h-full w-full object-cover" 
        controls
        muted
        playsInline
      />
    ) : (
      <img src={project.image[0]} alt={project.title} className="h-full w-full object-cover" />
    )
  ) : (
    <p className="text-gray-500">No image available</p>
  )}
</div>
  
            <div className="p-4">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.cardSkills.join(', ')}</p> {/* Card-specific skills */}
              <p className="text-sm text-gray-600 mb-4">{project.cardDescription}</p> {/* Card-specific description */}
              <div className="flex gap-2">
  <button
    onClick={() => handleOpenModal(project)}
    className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
  >
    View Project
  </button>
  <a 
  href={project.codeUrl} 
  className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 text-center" 
  target="_blank" 
  rel="noopener noreferrer"
>
  View Prototype
</a>
</div>

            </div>
          </div>
        ))}
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
  
const Python = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
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
        codeUrl: "https://github.com/Arireal/my-todo-web-app" 
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
      codeUrl: "https://github.com/Arireal/Weather_API_Dashboard" 
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
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-2">Python Playground</h2>
      <p className="text-gray-600 mb-6">Streamlit, Plotly, Git Version Control, Pandas</p>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="bg-purple-100 h-48 w-full flex items-center justify-center overflow-hidden">
              {project.image && project.image.length > 0 ? (
                <img src={project.image[0]} alt={project.title} className="h-full w-full object-cover" />
              ) : (
                <p className="text-gray-500">No image available</p>
              )}
            </div>
  
            <div className="p-4">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.cardSkills.join(', ')}</p> {/* Card-specific skills */}
              <p className="text-sm text-gray-600 mb-4">{project.cardDescription}</p> {/* Card-specific description */}
              <div className="flex gap-2">
  <button
    onClick={() => handleOpenModal(project)}
    className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
  >
    View Project
  </button>
  <a 
  href={project.codeUrl} 
  className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 text-center" 
  target="_blank" 
  rel="noopener noreferrer"
>
  View Code
</a>
</div>

            </div>
          </div>
        ))}
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
  
  const Projects = ({ onProjectClick }) => {
    return (
      <div className="container mx-auto px-4">
        <ProjectsSection onProjectClick={onProjectClick} />
        <Prototypes onProjectClick={onProjectClick} />
        <Python onProjectClick={onProjectClick} />
      </div>
    );
  };
  
  export { ProjectsSection, Prototypes, Python };
export default Projects;

  