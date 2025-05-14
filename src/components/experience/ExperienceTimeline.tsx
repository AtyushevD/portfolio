'use client';

import { motion } from 'framer-motion';
import { ExperienceItem } from '@/lib/experience';

import styles from './ExperienceTimeline.module.css';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const ExperienceTimeline = ({ items }: { items: ExperienceItem[] }) => {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className={styles.item}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={styles.dot} />
          <div className={styles.content}>
            <h3 className={styles.company}>{item.company}</h3>
            <p className={styles.position}>{item.position}</p>
            <p className={styles.period}>{item.period}</p>
            
            <ul className={styles.description}>
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            
            <div className={styles.tags}>
              {item.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};