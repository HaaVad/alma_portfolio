"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getImageUrl } from '../lib/utils';

import { Project } from '../../../types/project';

interface ProjectGridProps {
    projects: Project[];
    // initial: boolean;
  }

  const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {




  return (
    <div className="px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {projects.map((project, index) => (
      <div key={index} 
    // className={`${initial ? 'fade-in' : ''}`}
      className="fade-in" 
      style={{ animationDelay: `${1+(index * 0.4)}s` }}>
        {project.images && project.images.length > 0 && (            
        <Link 
          href={`/projects/${project.slug}`}             
          >

          <div className="relative h-72 w-80 lg:w-96 flex justify-center items-center">
          <Image
            src={getImageUrl(project.images[0])}
            alt={project.name}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"              
            className="object-cover hover:opacity-60 z-30 hover:z-10 saturate-100 hover:saturate-50"
            priority={true}
          />
          <h2 className={`z-20 text-center ${project.name.length > 20 ? "text-2xl" : "text-3xl"}  pointer-events-none`}>{project.name}</h2>
        </div>
        </Link>
        )}
      </div>
    ))}
    </div>
  );
};

export default ProjectGrid;
