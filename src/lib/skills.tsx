import React from 'react';
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJest, SiWebpack } from 'react-icons/si';

export interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Testing';
  level: number; // 1-5
  icon: React.JSX.Element;
}

export const SKILLS: SkillItem[] = [
  {
    id: '1',
    name: 'React',
    category: 'Frontend',
    level: 5,
    icon: <FaReact size={24} />
  },
  {
    id: '2',
    name: 'TypeScript',
    category: 'Frontend',
    level: 4,
    icon: <SiTypescript size={24} />
  },
  {
    id: '3',
    name: 'Node.js',
    category: 'Backend',
    level: 4,
    icon: <FaNodeJs size={24} />
  },
  {
    id: '4',
    name: 'Docker',
    category: 'DevOps',
    level: 3,
    icon: <FaDocker size={24} />
  },
  {
    id: '5',
    name: 'Jest',
    category: 'Testing',
    level: 5,
    icon: <SiJest size={24} />
  },
  {
    id: '6',
    name: 'Webpack',
    category: 'Frontend',
    level: 4,
    icon: <SiWebpack size={24} />
  }
];

export const SKILL_CATEGORIES = ['All', 'Frontend', 'Backend', 'DevOps', 'Testing'] as const;