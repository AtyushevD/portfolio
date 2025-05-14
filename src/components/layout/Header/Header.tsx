'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';

import styles from './Header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          Денис Атюшев
        </Link>

        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/experience" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Опыт
          </Link>
          <Link href="/skills" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Навыки
          </Link>
          <Link href="/projects" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Проекты
          </Link>
          <div className={styles.themeSwitcherMobile}>
            <ThemeSwitcher />
          </div>
        </nav>

        <div className={styles.themeSwitcherDesktop}>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}