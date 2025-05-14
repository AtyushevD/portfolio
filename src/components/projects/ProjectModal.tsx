'use client';

import { useEffect } from 'react';
import { Project } from '@/lib/projects';

import styles from './projects.module.css';

export const ProjectModal = ({ 
  project,
  onClose 
}: {
  project: Project | null;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = '' };
  }, [project]);

  if (!project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <h2 className={styles.modalTitle}>{project.title}</h2>
        
        {project.isNDA ? (
          <div className={styles.ndaContent}>
            <h3>🔒 Проект под NDA</h3>
            <p>Детали не могут быть раскрыты в соответствии с соглашением</p>
            <p>Готов обсудить мой вклад лично</p>
          </div>
        ) : (
          <>
            <p><strong>Роль:</strong> {project.role}</p>
            <p><strong>Описание:</strong> {project.description}</p>
            
            <h3>Ключевые особенности:</h3>
            <ul className={styles.featuresList}>
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            
            <div className={styles.technologies}>
              {project.technologies.map(tech => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};