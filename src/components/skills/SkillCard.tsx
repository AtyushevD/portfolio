import { SkillItem } from '@/lib/skills';

import styles from './SkillsGrid.module.css';

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{skill.icon}</div>
      <div className={styles.info}>
        <h4 className={styles.name}>{skill.name}</h4>
        <span className={styles.category}>{skill.category}</span>
      </div>
    </div>
  );
};