import React, { useState, useEffect } from 'react';

const ProjectModal = ({ isOpen, onClose, projectData }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [playingVideo, setPlayingVideo] = useState(null);

  const closeModalOnEscape = (event) => {
    if (event.key === 'Escape' && isModalOpen) {
      onClose();
    }
  };

  // Helper function to determine if file is video
  const isVideo = (url) => {
    const videoExtensions = ['mp4', 'webm', 'ogg'];
    const extension = url.split('.').pop().toLowerCase();
    return videoExtensions.includes(extension);
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModalOnEscape);
    return () => {
      document.removeEventListener('keydown', closeModalOnEscape);
    };
  }, [isModalOpen]);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  // Safely get data with fallback
  const skills = projectData?.skills || [];
  const visuals = projectData?.visuals || [];
  const features = projectData?.features || [];
  const process = projectData?.process || [];
  const description = projectData?.description || 'No description available';
  const title = projectData?.title || 'No title available';

  const handleVideoClick = (videoUrl) => {
    setPlayingVideo(playingVideo === videoUrl ? null : videoUrl);
  };

  const MediaItem = ({ src, index }) => {
    if (isVideo(src)) {
      return (
        <div className="relative w-full">
          {playingVideo === src ? (
            <video
              src={src}
              className="w-full h-auto max-w-full rounded-lg shadow-lg"
              controls
              autoPlay
              onClick={() => handleVideoClick(src)}
            />
          ) : (
            <div 
              className="relative cursor-pointer"
              onClick={() => handleVideoClick(src)}
            >
              <video
                src={src}
                className="w-full h-auto max-w-full rounded-lg shadow-lg"
                muted
                playsInline
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
                <svg 
                  className="w-16 h-16 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      );
    }
    return (
      <img
        src={src}
        alt={`Project visual ${index + 1}`}
        className="w-full h-auto max-w-full rounded-lg shadow-lg"
      />
    );
  };

  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <div className="relative bg-white mx-auto my-16 p-10 rounded-lg max-w-4xl animate-fade-in">
            <span
              onClick={onClose}
              className="absolute top-4 right-4 text-3xl text-gray-500 cursor-pointer hover:text-blue-600 transition-colors"
            >
              &times;
            </span>

            {/* Project Header */}
            <div className="mb-8">
              <h1 className="text-3xl text-black mb-4">{title}</h1>
              <p
                className="text-lg text-gray-600 mb-8"
                dangerouslySetInnerHTML={{ __html: projectData.modalDescription }}
              ></p>
            </div>

            {/* Skills & Technologies */}
            {projectData.modalSkills && projectData.modalSkills.length > 0 && (
              <>
                <h2 className="text-blue-600 text-2xl mb-6">Technologies & Skills</h2>
                <div className="flex flex-wrap gap-4 mb-8">
                  {projectData.modalSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-400 text-white rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Project Visuals */}
            {projectData.visuals && projectData.visuals.length > 0 && (
              <>
                <h2 className="text-blue-600 text-2xl mb-6">Project Showcase</h2>
                <div className="flex flex-col gap-6 mb-8">
                  {projectData.visuals.map((visual, index) => (
                    <div key={index} className="w-full">
                      <MediaItem src={visual} index={index} />
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Rest of your existing modal content... */}
            {/* Project Details */}
            {features.length > 0 && (
              <>
                <h2 className="text-blue-600 text-2xl mb-6">Key Features</h2>
                <ul className="list-disc pl-5 mb-8 text-gray-600">
                  {features.map((feature, index) => (
                    <li key={index} className="mb-3">{feature}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Development Process */}
            {process.length > 0 && (
              <>
                <h2 className="text-blue-600 text-2xl mb-6">Development Process</h2>
                <ul className="list-disc pl-5 text-gray-600">
                  {process.map((processStep, index) => (
                    <li key={index} className="mb-3">{processStep}</li>
                  ))}
                </ul>
              </>
            )}

            {/* UX/UI Details */}
            {projectData.ux && projectData.ux.length > 0 && (
              <>
                <h2 className="text-blue-600 text-2xl mb-6">UX/UI</h2>
                <ul className="list-disc pl-5 mb-8 text-gray-600">
                  {projectData.ux.map((item, index) => (
                    <li key={index} className="mb-3">{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;