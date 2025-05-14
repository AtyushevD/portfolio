import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiJest, SiWebpack, SiWebdriverio } from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

export interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Testing';
  icon: React.JSX.Element;
}

export const SKILLS: SkillItem[] = [
  {
    id: '1',
    name: 'React',
    category: 'Frontend',
    icon: <FaReact size={24} />
  },
  {
    id: '2',
    name: 'TypeScript',
    category: 'Frontend',
    icon: <SiTypescript size={24} />
  },
  {
    id: '3',
    name: 'Node.js',
    category: 'Backend',
    icon: <FaNodeJs size={24} />
  },
  {
    id: '4',
    name: 'Docker',
    category: 'DevOps',
    icon: <FaDocker size={24} />
  },
  {
    id: '5',
    name: 'Jest',
    category: 'Testing',
    icon: <SiJest size={24} />
  },
  {
    id: '6',
    name: 'Webpack',
    category: 'Frontend',
    icon: <SiWebpack size={24} />
  },
  {
    id: '7',
    name: 'HTML',
    category: 'Frontend',
    icon: <FaHtml5 size={24} />
  },
  {
    id: '8',
    name: 'CSS',
    category: 'Frontend',
    icon: <FaCss3Alt size={24} />
  },
  {
    id: '9',
    name: 'SQL',
    category: 'Backend',
    icon: <TbSql size={24} />
  },
  {
    id: '10',
    name: 'WebDriver',
    category: 'Testing',
    icon: <SiWebdriverio size={24} />
  }
];

export const SKILL_CATEGORIES = ['All', 'Frontend', 'Backend', 'DevOps', 'Testing'] as const;