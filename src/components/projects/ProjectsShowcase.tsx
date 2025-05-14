'use client';

import { useState } from 'react';
import { PROJECTS, Project } from '@/lib/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

import styles from './projects.module.css';

export const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {PROJECTS.map(project => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};