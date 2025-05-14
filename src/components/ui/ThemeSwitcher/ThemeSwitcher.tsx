'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeSwitcher.module.css';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  if (!isMounted) return null;

  return (
    <button
      className={styles.switch}
      onClick={toggleTheme}
      aria-label={`Переключить на ${theme === 'light' ? 'тёмную' : 'светлую'} тему`}
    >
      <div className={`${styles.slider} ${theme === 'dark' ? styles.dark : ''}`}>
        <div className={styles.icons}>
          <FaSun className={`${styles.icon} ${theme === 'light' ? styles.active : ''}`} />
          <FaMoon className={`${styles.icon} ${theme === 'dark' ? styles.active : ''}`} />
        </div>
      </div>
    </button>
  );
}