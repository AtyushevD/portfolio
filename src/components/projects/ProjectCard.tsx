import { useState } from 'react';
import { Project } from '@/lib/projects';

import styles from './projects.module.css';

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.isNDA && (
        <div className={styles.ndaBadge}>NDA</div>
      )}
      
      <h3 className={styles.title}>{project.title}</h3>
      
      <div className={styles.technologies}>
        {project.technologies.slice(0, 3).map(tech => (
          <span key={tech} className={styles.techTag}>{tech}</span>
        ))}
        {project.technologies.length > 3 && (
          <span className={styles.moreTag}>+{project.technologies.length - 3}</span>
        )}
      </div>

      {isHovered && (
        <div className={styles.hoverContent}>
          <p className={styles.description}>{project.description}</p>
          <button className={styles.detailsButton}>
            {project.isNDA ? 'Подробности под NDA' : 'Подробнее'}
          </button>
        </div>
      )}
    </div>
  );
};