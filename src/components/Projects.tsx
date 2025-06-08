import React from 'react';
import Image from 'next/image';
import projects from '@/constants/projects';

const Projects = () => {
  return (
    <>
      <div className="flex items-end mb-4">
        <span className="text-6xl font-spaceGrotesk gradient-text">&#8220;</span>
        <div className="text-4xl font-textMeOne gradient-text">Projects...</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-effect rounded-lg gradient-border overflow-hidden group hover:scale-[1.02] transition-all duration-300 flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                width={500}
                height={300}
                className="object-cover w-full h-full"
                priority={index === 0}
              />
            </div>
            
            <div className="p-6 bg-primary/80 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
              
              <p className="text-gray-300 text-sm mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs rounded-full bg-accent-yellow/20 text-accent-yellow font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 rounded-md bg-[#333] text-white text-center hover:bg-[#444] transition-colors duration-300 font-medium"
                >
                  GitHub
                </a>
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 rounded-md bg-gradient-accent text-white text-center hover:shadow-glow transition-all duration-300 font-medium"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;