'use client';

import { useEffect, useState } from 'react';
import styles from './FlashlightEffect.module.css';

export const FlashlightEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDark(theme === 'dark');
    };

    const checkScreen = () => {
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
    };

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    checkTheme();
    checkScreen();

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('resize', checkScreen);
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('resize', checkScreen);
      observer.disconnect();
    };
  }, []);

  if (!isDark || !isDesktop) return null;

  return (
    <div 
      className={styles.flashlight}
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};