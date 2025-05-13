'use client';

import Link from 'next/link';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          Денис Атюшев
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/experience" className={styles.navLink}>
            Опыт
          </Link>
          <Link href="/skills" className={styles.navLink}>
            Навыки
          </Link>
          <Link href="/projects" className={styles.navLink}>
            Проекты
          </Link>
        </nav>
        
        <ThemeSwitcher />
      </div>
    </header>
  );
}