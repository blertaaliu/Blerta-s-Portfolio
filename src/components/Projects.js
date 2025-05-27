import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const projectsPerLoad = 3;
  
  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + projectsPerLoad, projects.length));
  };

  const showLess = () => {
    setVisibleProjects(projectsPerLoad);
  };

  return (
    <section id="projects" className="py-8 bg-[rgb(10,0,27)] relative overflow-hidden">
      {/* AI/Galaxy themed background elements */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[rgba(34,197,94,0.1)] to-[rgb(10,0,27)] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center mb-2 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              My Work
            </span>
          </h2>
          <p className="text-center text-emerald-300/80 text-md mb-4">A collection of projects I've worked on.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          {visibleProjects < projects.length ? (
            <button
              onClick={loadMore}
              className="group relative px-8 py-3 bg-[rgb(15,5,37)] text-emerald-400 rounded-full
                       transform hover:scale-105 transition-all duration-300
                       border border-emerald-500/30 hover:border-emerald-500/50"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              
              {/* Button content */}
              <div className="relative flex items-center gap-2">
                <span className="text-lg">Load More Projects</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </button>
          ) : (
            visibleProjects > projectsPerLoad && (
              <button
                onClick={showLess}
                className="group relative px-8 py-3 bg-[rgb(15,5,37)] text-emerald-400 rounded-full
                         transform hover:scale-105 transition-all duration-300
                         border border-emerald-500/30 hover:border-emerald-500/50"
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                
                {/* Button content */}
                <div className="relative flex items-center gap-2">
                  <span className="text-lg">Show Less</span>
                  <svg 
                    className="w-5 h-5 transform rotate-180 group-hover:-translate-y-0.5 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects; 