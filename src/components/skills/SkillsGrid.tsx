'use client';

import { useState } from 'react';
import { SKILLS, SKILL_CATEGORIES } from '@/lib/skills';
import { SkillCard } from './SkillCard';

import styles from './SkillsGrid.module.css';

export const SkillsGrid = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredSkills = filter === 'All' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === filter);

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {SKILL_CATEGORIES.map(category => (
          <button
            key={category}
            className={`${styles.filter} ${filter === category ? styles.active : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredSkills.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};