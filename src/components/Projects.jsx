import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';

const ProjectList  = ({ darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Extranet Relayout', 
      client: "Vila Vela Insurance Broker",
      technologies: ['Framer',  'UX Analysis','Prototyping'],
        modalSkills: ['Framer', 'UX Analysis', 'Research', 'Persona Creation','User Interviews', 'Problem Solving', 'Wireframing','Prototyping'], 
        description: 'Extranet system redesign for a modern, user-friendly experience.',
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
        categories: ["uxui"],
        Role:'UX/UI Analyst & Designer',
      links: {
        demo: "https://gentle-imagine-000316.framer.app/",
        caseStudy: "https://gentle-imagine-000316.framer.app/"
      }
    },
    {
      id: 2,
      title: 'Colab Start', 
      client: "Google for Education",
      technologies: ['Sketch',  'UX Analysis','Prototyping'],
        description: 'Designed an engaging prototype to showcase Google for Education Colab Start program.',
        categories: ["uxui"],
        Role:'UX/UI Analyst & Designer',
      links: {
        demo: "https://ariane-souza.myportfolio.com/copia-de-influlab-visual-identity",
        caseStudy: "https://ariane-souza.myportfolio.com/copia-de-influlab-visual-identity",
        
      }
    },
    { 
      id: 3,
      title: 'React & Node.js E-commerce', 
      client: "ADW Studium",
      technologies:['React', 'Node.js', 'Express'], 
      modalSkills: ['React', 'Node.js', 'Express', 'JSON', 'API calls', 'Problem Solving'], 
      description: 'Built a dynamic frontend using React to display product data.',
      categories: ["fullstack", "frontend", "uxui"],
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
      Role:'Full Stack Developer UX/UI',
      links: {
        demo: "https://ariane-souza.myportfolio.com/copia-de-influlab-visual-identity",
        caseStudy: "https://github.com/Arireal/storefront",
        code:"https://github.com/Arireal/storefront"
        
      }
    },
    { 
      id: 4,
      title: 'Blog with React and Node.js', 
      client: "Garoi House",
      technologies: ['React', 'Node.js', 'Express'],
        modalSkills: ['React', 'Node.js', 'Express'], 
        description: 'A simple blog built with React and Node.js, with API-powered posts.',
        categories: ["fullstack", "frontend","uxui"],
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

       links: {
        demo: "https://www.garoihouse.com/",
        caseStudy: "https://github.com/Arireal/node-blog",
        code:"https://github.com/Arireal/node-blog"
        
      }
    },
    { 
      id: 5,
      title: 'Van Tour Website', 
      client: "Bahia Van Tour",
      technologies: ['Figma,', 'UX/UI Analysis,', 'Prototyping'], 
        modalSkills: ['Figma', 'UX/UI Analysis', 'Persona Creation', 'Prototyping'], 
        description: 'Designed a clean, one-page website layout in Figma for a van tour service.',
        categories: ["uxui"],
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
      links: {
        demo: "https://www.figma.com/proto/uLWAsONKTcmhrZC0z0zvdS/Ariane-Souza-Projetos?node-id=929-24&t=ow9rhSQmMhTRQLFp-1",
        caseStudy: "https://www.figma.com/proto/uLWAsONKTcmhrZC0z0zvdS/Ariane-Souza-Projetos?node-id=929-24&t=ow9rhSQmMhTRQLFp-1",
            
      }
      
    },
    { 
      id: 6,
      title: 'Kinkoa Web App', 
      client: "Kinkoa",
      technologies: ['UX Thinking', 'Prototyping', 'User-flow'],
      modalSkills: ['Figma','User-centric Thinking', 'Wireframing', 'UX/UI Analysis', 'Problem Solving'], 
      description: 'Designed a UX experience for Kinkoa, a fruit milk-based juice brand.',
      categories: ["uxui"],
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
      Role:'UX/UI Designer',
      links: {
        caseStudy: "https://example.com/case-study"
      }
             
    },
    { 
      id: 7,
      title: 'Genotec Web App', 
      client: "Client",
      technologies: ['PHP', 'CSS', 'UX', 'Wordpress'], 
      modalSkills: ['PHP', 'CSS', 'UX/UI Analysis', 'Debugging', 'Problem Solving', 'Wordpress'], 
      description: 'Created and debugged a WordPress PHP layout.',
      categories: ["fullstack", "frontend"],
      modalDescription: `<strong>My Role: Full Stack Developer UX/UI</strong>
      <br />
      <br />
      Developed and optimized the WordPress PHP layout for a client website, focusing on resolving complex plugin conflicts to ensure seamless functionality.  
      Implemented tailored solutions to enhance UX/UI, improving site navigation, responsiveness, and user engagement. My approach to problem-solving ensured smooth integration of third-party plugins,  
      leading to an optimized user experience and more efficient website performance. <br /> 
      <a href="https://portalgenotec.com.br/" target="_blank" class="text-blue-600 hover:underline">See the live website</a>`,
    
      visuals: ["/images/genotec/g1.png", "/images/genotec/g2.png", "/images/genotec/g3.png", "/images/genotec/g5.png", "/images/genotec/g6.png", "/images/genotec/g7.gif" ],
      Role:'Full Stack Developer UX/UI',

      links: {
        demo: "https://portalgenotec.com.br/",
        caseStudy: "https://example.com/case-study"
      }
    },
    {
      id: 8,
      title: 'Book Web App', 
      client: "A. O. Garoi",
      technologies: ['Html', 'Javascript','CSS', 'UX/UI'],
        description: 'Developed the front end of a fiction book website using Bootstrap for a smooth, interactive storytelling experience.',
        categories: ["uxui", "frontend"],
      links: {
        demo: "https://www.hofindatheresumptionofties.aogaroi.com/",
        
      }
    },
    { 
      id: 8,
      title: 'React Portfolio', 
      client: "Personal Project",
      technologies: ['React', 'Grid UI', 'Tailwind'],
      modalSkills: ['React', 'Grid UI', 'UX/UI', 'Tailwind CSS'], 
      description: 'A React-based portfolio showcasing selected projects.',
      categories: ["uxui", "frontend"],
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
      Role:'Full Stack Developer UX/UI',


      links: {
      code: "https://github.com/Arireal/React-Portfolio",
      demo: "https://www.arianesouza.com",
      caseStudy: "https://example.com/case-study"

        
      }

     
    },
    { 
      id: 8,
      title: 'Task API', 
      client: "Personal Project",
      technologies: ['Python', 'GUI', 'Streamlit'], 
      modalSkills: ['Python', 'GUI', 'Streamlit'], 
      categories: ["fullstack"],
      description:'based Task application that helps manage daily tasks efficiently.',
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
      links: {
        code: "https://github.com/Arireal/my-todo-web-app",
        demo: "https://arireal-my-todo-web-app-web-app-yuez5x.streamlit.app/",
        caseStudy: "https://example.com/case-study"
  
          
        }
      },
     { 
      id: 9,
      title: 'Weather API', 
      client: "Personal Project",
      technologies: ['Streamlit', 'Plotly', 'Python'], 
      categories: ["fullstack"],
        modalSkills: ['Python', 'Plotly', 'Streamlit','Git Version Control'], 
       description:'A python forecast API, using Plotly and Streamlit for data visualization.',
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
      links: {
        code: "https://github.com/Arireal/Weather_API_Dashboard",
        demo: "https://arianesouza-weather-api.streamlit.app/",
        caseStudy: "https://example.com/case-study"
  
          
        }
       
    }
   
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(activeCategory));

  // Category data with counts
  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.categories.includes('frontend')).length },
    { id: 'uxui', name: 'UX/UI Design', count: projects.filter(p => p.categories.includes('uxui')).length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.categories.includes('fullstack')).length }
  ];

  const getCategoryColor = (category) => {
    switch(category) {
      case 'dfrontend': return 'bg-blue-100 text-blue-600';
      case 'uxui': return 'bg-orange-100 text-orange-600';
      case 'fullstack': return 'bg-blue-200 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };


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
    <div className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2
                ${activeCategory === category.id 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {category.name}
              <span className={`text-xs py-0.5 px-2 rounded-full ${
                activeCategory === category.id ? 'bg-indigo-500' : 'bg-gray-100'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects List */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map(category => (
                      <span 
                        key={category} 
                        className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(category)}`}
                      >
                        {category === 'uxui' ? 'UX/UI' : category.charAt(0).toUpperCase() + category.slice(1)}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Header */}
                  <h3 className="text-xl font-bold mb-1 text-blue-500">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">Client: {project.client}</p>
                  
                  {/* Project Description */}
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-5">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Action Buttons */}
<div className="flex gap-3 mt-auto">
  {project.links.demo && (
    <a 
      href={project.links.demo} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-lg transition-colors text-sm"
    >
      <ExternalLink size={16} />
      Live Demo
    </a>
  )}

  {project.links.code && (
    <a 
      href={project.links.code} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-lg transition-colors text-sm"
    >
      <Github size={16} />
      Code
    </a>
  )}

  {project.links.caseStudy && (
    <a
      onClick={() => handleOpenModal(project)}
      className="px-4 py-2 text-blue-400 border border-blue-400 rounded hover:bg-blue-50 cursor-pointer"
    >
      Case Study
    </a>
  )}
</div>

                  
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
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

export default ProjectList;